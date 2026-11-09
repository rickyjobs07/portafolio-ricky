import { describe, expect, it, vi } from 'vitest';
import { submitContact, validateContact } from './contact';

describe('contact', () => {
  it('rejects an incomplete message before any send', async () => {
    const sender = vi.fn();
    const result = await submitContact({ name: 'A', email: 'nope', message: 'hola' }, sender);

    expect(result.ok).toBe(false);
    expect(result.errors).toEqual({ name: 'name', email: 'email', message: 'message' });
    expect(sender).not.toHaveBeenCalled();
  });

  it('sends a trimmed payload only when the fields are valid', async () => {
    const sender = vi.fn().mockResolvedValue({ status: 200 });
    const values = {
      name: '  Ana Ruiz  ',
      email: ' ana@example.com ',
      message: '  Quiero hablar de una integración.  ',
    };

    const result = await submitContact(values, sender);

    expect(validateContact(values)).toEqual({});
    expect(result.ok).toBe(true);
    expect(sender).toHaveBeenCalledOnce();
    expect(sender).toHaveBeenCalledWith({
      from_name: 'Ana Ruiz',
      from_email: 'ana@example.com',
      message: 'Quiero hablar de una integración.',
    });
  });
});
