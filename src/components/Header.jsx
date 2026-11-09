import { useEffect, useId, useState } from 'react';
import { useLocale } from '../hooks/useLocale';

export default function Header({ active }) {
  const { t, locale, setLocale } = useLocale();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuId = useId();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('nav-lock', open);
    return () => document.body.classList.remove('nav-lock');
  }, [open]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header ${scrolled || open ? 'is-solid' : ''}`}>
      <a className="skip" href="#contenido">
        {locale === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <div className="wrap site-header__bar">
        <a className="brand" href="#top" onClick={close}>
          RM
          <span className="sr-only">. {t.brand}</span>
        </a>

        <div className="header-end">
          <nav id={menuId} className={`nav ${open ? 'is-open' : ''}`} aria-label="Principal">
            <ul>
              {t.nav.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className={active === item.id ? 'is-active' : undefined}
                    aria-current={active === item.id ? 'true' : undefined}
                    onClick={close}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lang" role="group" aria-label={t.lang.label}>
            <button type="button" aria-pressed={locale === 'es'} onClick={() => setLocale('es')}>
              {t.lang.es}
            </button>
            <button type="button" aria-pressed={locale === 'en'} onClick={() => setLocale('en')}>
              {t.lang.en}
            </button>
          </div>
          <button
            type="button"
            className={`menu-btn ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? t.menu.close : t.menu.open}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="menu-btn__lines" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
