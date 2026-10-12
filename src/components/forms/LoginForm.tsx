"use client";

import { FormEvent, useState } from "react";
import { authNotConnectedMessage } from "@/lib/backend";
import { validateLogin, type FieldErrors } from "@/lib/validation";
import { FormField } from "@/components/ui/FormField";
import { StatusBanner } from "@/components/ui/StatusBanner";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateLogin({ email, password });
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-lg border border-navy/10 bg-white p-6">
      {submitted ? (
        <StatusBanner tone="info" title="Login is not connected" message={authNotConnectedMessage} />
      ) : null}
      <FormField
        id="login-email"
        name="email"
        type="email"
        label="Email"
        autoComplete="email"
        required
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={errors.email}
      />
      <FormField
        id="login-password"
        name="password"
        type="password"
        label="Password"
        autoComplete="current-password"
        required
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        error={errors.password}
      />
      <button
        type="submit"
        className="w-full rounded-md bg-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-navy-deep"
      >
        Check login details
      </button>
    </form>
  );
}
