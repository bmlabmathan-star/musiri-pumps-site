export type FieldErrors = Record<string, string>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[0-9+\-\s()]{7,20}$/;

function required(value: string, label: string): string | undefined {
  if (!value.trim()) {
    return `${label} is required.`;
  }
  return undefined;
}

export function validateEnquiry(form: {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  const nameError = required(form.name, "Name");
  if (nameError) errors.name = nameError;
  else if (form.name.trim().length < 2) errors.name = "Enter at least 2 characters.";

  const emailError = required(form.email, "Email");
  if (emailError) errors.email = emailError;
  else if (!emailPattern.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (form.phone.trim() && !phonePattern.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number, or leave this field blank.";
  }

  const subjectError = required(form.subject, "Subject");
  if (subjectError) errors.subject = subjectError;

  const messageError = required(form.message, "Message");
  if (messageError) errors.message = messageError;
  else if (form.message.trim().length < 10) {
    errors.message = "Enter at least 10 characters so the enquiry is clear.";
  }

  return errors;
}

export function validateLogin(form: { email: string; password: string }): FieldErrors {
  const errors: FieldErrors = {};
  const emailError = required(form.email, "Email");
  if (emailError) errors.email = emailError;
  else if (!emailPattern.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  const passwordError = required(form.password, "Password");
  if (passwordError) errors.password = passwordError;
  else if (form.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  return errors;
}

export function validateRegistration(form: {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  const nameError = required(form.name, "Name");
  if (nameError) errors.name = nameError;

  const emailError = required(form.email, "Email");
  if (emailError) errors.email = emailError;
  else if (!emailPattern.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (form.phone.trim() && !phonePattern.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number, or leave this field blank.";
  }

  const passwordError = required(form.password, "Password");
  if (passwordError) errors.password = passwordError;
  else if (form.password.length < 8) {
    errors.password = "Password must be at least 8 characters.";
  }

  if (form.confirmPassword !== form.password) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
}
