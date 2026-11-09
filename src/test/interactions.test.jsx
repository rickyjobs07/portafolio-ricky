import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { LocaleProvider } from '../context/Locale';
import App from '../App';
import Contact from '../components/Contact';
import Lab from '../components/Lab';

afterEach(() => {
  cleanup();
  localStorage.clear();
});

function renderWithLocale(ui) {
  return render(<LocaleProvider>{ui}</LocaleProvider>);
}

describe('portfolio interactions', () => {
  it('switches the hero into English', async () => {
    const user = userEvent.setup();
    render(<App />);

    await user.click(screen.getByRole('button', { name: 'EN', pressed: false }));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The architecture');
    expect(document.documentElement.lang).toBe('en');
  });

  it('routes a charge to the next fictional processor and keeps the key', async () => {
    const user = userEvent.setup();
    renderWithLocale(<Lab />);

    const send = screen.getByRole('button', { name: /enviar cobro de prueba/i });
    const status = screen.getByRole('status');

    await user.click(send);
    const key = status.textContent.match(/pay_\d{4}/)[0];
    expect(status).toHaveTextContent(`Aceptado en Northline`);
    expect(status).toHaveTextContent(key);

    await user.click(screen.getByRole('button', { name: /northline\. operativo\. cambiar estado/i }));
    await user.click(screen.getByRole('button', { name: /northline\. degradado\. cambiar estado/i }));
    await user.click(send);

    expect(status).toHaveTextContent('Aceptado en Harbor');
    expect(status).toHaveTextContent(key);
    expect(screen.getByText(/Northline está caído/i)).toBeInTheDocument();
  });

  it('does not call the mail sender for an invalid form', async () => {
    const user = userEvent.setup();
    const sender = vi.fn();
    renderWithLocale(<Contact sender={sender} />);

    await user.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(sender).not.toHaveBeenCalled();
    expect(screen.getByText(/al menos 2 caracteres/i)).toBeInTheDocument();
  });

  it('submits through the injected sender and never the network', async () => {
    const user = userEvent.setup();
    const sender = vi.fn().mockResolvedValue({ status: 200 });
    renderWithLocale(<Contact sender={sender} />);

    await user.type(screen.getByLabelText('Nombre'), 'Ana Ruiz');
    await user.type(screen.getByLabelText('Correo'), 'ana@example.com');
    await user.type(screen.getByLabelText('Mensaje'), 'Hablemos de una integración.');
    await user.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(sender).toHaveBeenCalledOnce();
    expect(screen.getByRole('status')).toHaveTextContent(/mensaje enviado/i);
  });

  it('does not publish placeholder links', () => {
    render(<App />);
    const links = screen.getAllByRole('link');
    expect(links.length).toBeGreaterThan(0);
    for (const link of links) {
      expect(link.getAttribute('href')).not.toBe('#');
      expect(link.getAttribute('href')).not.toBe('');
    }
  });
});
