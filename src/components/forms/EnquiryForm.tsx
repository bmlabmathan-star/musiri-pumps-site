"use client";

import { FormEvent, useState } from "react";
import { backendNotConnectedMessage } from "@/lib/backend";
import { validateEnquiry, type FieldErrors } from "@/lib/validation";
import { FormField } from "@/components/ui/FormField";
import { StatusBanner } from "@/components/ui/StatusBanner";

const initial = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

export function EnquiryForm() {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof typeof initial, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEnquiry(values);
    setErrors(nextErrors);
    setSubmitted(Object.keys(nextErrors).length === 0);
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4 rounded-lg border border-navy/10 bg-white p-6">
      {submitted ? (
        <StatusBanner
          tone="info"
          title="Enquiry not sent"
          message={backendNotConnectedMessage}
        />
      ) : null}
      <FormField
        id="name"
        name="name"
        label="Name"
        autoComplete="name"
        required
        value={values.name}
        onChange={(event) => update("name", event.target.value)}
        error={errors.name}
      />
      <FormField
        id="email"
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
        id="phone"
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
        id="subject"
        name="subject"
        label="Subject"
        required
        value={values.subject}
        onChange={(event) => update("subject", event.target.value)}
        error={errors.subject}
      />
      <FormField
        as="textarea"
        id="message"
        name="message"
        label="Message"
        required
        value={values.message}
        onChange={(event) => update("message", event.target.value)}
        error={errors.message}
      />
      <button
        type="submit"
        className="rounded-md bg-copper px-5 py-2.5 text-sm font-semibold text-white hover:bg-copper-dark"
      >
        Check enquiry
      </button>
    </form>
  );
}
