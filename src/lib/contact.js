const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const emailJsConfig = {
  serviceId: 'service_vxqeexu',
  templateId: 'template_s8zdoga',
  publicKey: 'Ptn7_YLaoOgG5tiTn',
};

export function validateContact(values) {
  const errors = {};
  const name = values.name?.trim() ?? '';
  const email = values.email?.trim() ?? '';
  const message = values.message?.trim() ?? '';

  if (name.length < 2) errors.name = 'name';
  if (!EMAIL_PATTERN.test(email)) errors.email = 'email';
  if (message.length < 12) errors.message = 'message';

  return errors;
}

export function toEmailJsPayload(values) {
  return {
    from_name: values.name.trim(),
    from_email: values.email.trim(),
    message: values.message.trim(),
  };
}

export async function submitContact(values, sender) {
  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return { ok: false, errors };
  }

  await sender(toEmailJsPayload(values));
  return { ok: true, errors: {} };
}

export async function sendWithEmailJs(payload) {
  const { default: emailjs } = await import('@emailjs/browser');
  return emailjs.send(
    emailJsConfig.serviceId,
    emailJsConfig.templateId,
    payload,
    emailJsConfig.publicKey,
  );
}
