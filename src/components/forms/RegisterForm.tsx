"use client";

import { FormEvent, useState } from "react";
import { authNotConnectedMessage } from "@/lib/backend";
import { validateRegistration, type FieldErrors } from "@/lib/validation";
import { FormField } from "@/components/ui/FormField";
import { StatusBanner } from "@/components/ui/StatusBanner";

const initial = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

export function RegisterForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateRegistration(values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-lg border border-navy/10 bg-white p-6">
      {submitted ? (
        <StatusBanner
          tone="info"
          title="Registration is not connected"
          message={authNotConnectedMessage}
        />
      ) : null}
      <FormField
        id="register-name"
        name="name"
        label="Name"
        autoComplete="name"
        required
        value={values.name}
        onChange={(event) => update("name", event.target.value)}
        error={errors.name}
      />
      <FormField
        id="register-email"
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        required
        value={values.email}
        onChange={(event) => update("email", event.target.value)}
        error={errors.email}
      />
      <FormField
        id="register-phone"
        name="phone"
        type="tel"
        label="Phone"
        autoComplete="tel"
        value={values.phone}
        onChange={(event) => update("phone", event.target.value)}
        error={errors.phone}
        hint="Optional"
      />
      <FormField
        id="register-password"
        name="password"
        type="password"
        label="Password"
        autoComplete="new-password"
        required
        value={values.password}
        onChange={(event) => update("password", event.target.value)}
        error={errors.password}
      />
      <FormField
        id="register-confirm"
        name="confirmPassword"
        type="password"
        label="Confirm password"
        autoComplete="new-password"
        required
        value={values.confirmPassword}
        onChange={(event) => update("confirmPassword", event.target.value)}
        error={errors.confirmPassword}
      />
      <button
        type="submit"
        className="w-full rounded-md bg-copper px-5 py-2.5 text-sm font-semibold text-white hover:bg-copper-dark"
      >
        Check registration details
      </button>
    </form>
  );
}
