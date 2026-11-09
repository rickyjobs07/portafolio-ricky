import { useState } from 'react';
import { useLocale } from '../hooks/useLocale';
import { contactLinks } from '../data/profile';
import { sendWithEmailJs, submitContact, validateContact } from '../lib/contact';

const EMPTY = { name: '', email: '', message: '' };

export default function Contact({ sender = sendWithEmailJs }) {
  const { t } = useLocale();
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const onChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    if (status !== 'idle') setStatus('idle');
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateContact(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus('idle');
      return;
    }

    setStatus('sending');
    try {
      await submitContact(values, sender);
      setValues(EMPTY);
      setErrors({});
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="section section--paper" id="contact" aria-labelledby="contact-title">
      <div className="wrap contact">
        <div>
          <p className="kicker">{t.contact.index}</p>
          <h2 id="contact-title">{t.contact.title}</h2>
          <p className="lede">{t.contact.lede}</p>
          <ul className="contact__links">
            <li>
              <span>{t.contact.emailLabel}</span>
              <a href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a>
            </li>
            <li>
              <span>{t.contact.githubLabel}</span>
              <a href={contactLinks.github} target="_blank" rel="noreferrer">
                {contactLinks.githubLabel}
              </a>
            </li>
            <li>
              <span>{t.contact.placeLabel}</span>
              <strong>{t.contact.place}</strong>
            </li>
          </ul>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate>
          <Field
            id="name"
            name="name"
            label={t.contact.name}
            value={values.name}
            placeholder={t.contact.namePlaceholder}
            error={errors.name ? t.contact.errors.name : ''}
            autoComplete="name"
            onChange={onChange}
          />
          <Field
            id="email"
            name="email"
            type="email"
            label={t.contact.email}
            value={values.email}
            placeholder={t.contact.emailPlaceholder}
            error={errors.email ? t.contact.errors.email : ''}
            autoComplete="email"
            onChange={onChange}
          />
          <Field
            id="message"
            name="message"
            label={t.contact.message}
            value={values.message}
            placeholder={t.contact.messagePlaceholder}
            error={errors.message ? t.contact.errors.message : ''}
            onChange={onChange}
            multiline
          />

          {status === 'sent' ? <p className="form__ok" role="status">{t.contact.success}</p> : null}
          {status === 'error' ? <p className="form__bad" role="alert">{t.contact.failure}</p> : null}

          <button type="submit" className="btn btn--solid" disabled={status === 'sending'}>
            {status === 'sending' ? t.contact.sending : t.contact.submit}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ id, label, error, multiline, ...props }) {
  const errorId = `${id}-error`;
  const fieldProps = {
    id,
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': error ? errorId : undefined,
    ...props,
  };

  return (
    <div className={`field ${error ? 'is-invalid' : ''}`}>
      <label htmlFor={id}>{label}</label>
      {multiline ? <textarea rows="6" {...fieldProps} /> : <input {...fieldProps} />}
      {error ? <p id={errorId} role="alert">{error}</p> : null}
    </div>
  );
}
