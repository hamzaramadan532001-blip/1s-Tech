"use client";

import { useState, type FormEvent } from "react";
import { FaCheckCircle, FaPaperPlane } from "react-icons/fa";
import { COMPANY, kit } from "./PageKit";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "email" | "tel" | "url" | "select" | "textarea";
  required?: boolean;
  placeholder?: string;
  options?: string[];
  /** ياخد عرض الفورم كله */
  full?: boolean;
  autoComplete?: string;
}

export interface FormMessages {
  submit: string;
  required: string;
  invalidEmail: string;
  invalidPhone: string;
  invalidUrl: string;
  selectPlaceholder: string;
  note: string;
  success: string;
}

interface MailtoFormProps {
  fields: FormField[];
  messages: FormMessages;
  /** بيرجع عنوان الإيميل من القيم */
  buildSubject: (values: Record<string, string>) => string;
  to?: string;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^\+?[\d\s()-]{7,20}$/;

/**
 * فورم بيتحقق من البيانات وبعدين يفتح برنامج البريد عند الزائر
 * برسالة جاهزة لـ info@1stech.sa.
 * لما يبقى فيه API للإرسال (مثلاً app/api/contact) استبدل الجزء
 * اللي في handleSubmit بـ fetch.
 */
export default function MailtoForm({ fields, messages, buildSubject, to = COMPANY.email }: MailtoFormProps) {
  const [values, setValues] = useState<Record<string, string>>(() =>
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const validate = (name: string, value: string): string => {
    const field = fields.find((f) => f.name === name);
    if (!field) return "";
    const v = value.trim();
    if (field.required && !v) return messages.required;
    if (!v) return "";
    if (field.type === "email" && !EMAIL_RE.test(v)) return messages.invalidEmail;
    if (field.type === "tel" && !PHONE_RE.test(v)) return messages.invalidPhone;
    if (field.type === "url") {
      try {
        new URL(v.startsWith("http") ? v : `https://${v}`);
      } catch {
        return messages.invalidUrl;
      }
    }
    return "";
  };

  const update = (name: string, value: string) => {
    setValues((prev) => ({ ...prev, [name]: value }));
    setSent(false);
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors: Record<string, string> = {};
    fields.forEach((f) => {
      const err = validate(f.name, values[f.name]);
      if (err) nextErrors[f.name] = err;
    });
    setErrors(nextErrors);

    const firstInvalid = fields.find((f) => nextErrors[f.name]);
    if (firstInvalid) {
      document.getElementById(`field-${firstInvalid.name}`)?.focus();
      return;
    }

    const body = fields
      .filter((f) => values[f.name].trim())
      .map((f) => `${f.label}:\n${values[f.name].trim()}`)
      .join("\n\n");

    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      buildSubject(values)
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <form className={kit.form} onSubmit={handleSubmit} noValidate>
      {fields.map((f) => {
        const id = `field-${f.name}`;
        const err = errors[f.name];
        const common = {
          id,
          name: f.name,
          value: values[f.name],
          required: f.required,
          "aria-invalid": !!err,
          "aria-describedby": err ? `${id}-error` : undefined,
          onBlur: () => setErrors((prev) => ({ ...prev, [f.name]: validate(f.name, values[f.name]) })),
        };

        return (
          <div key={f.name} className={`${kit.field} ${f.full ? kit.fieldFull : ""}`}>
            <label htmlFor={id} className={kit.label}>
              {f.label}
              {f.required && (
                <span className={kit.required} aria-hidden="true">
                  *
                </span>
              )}
            </label>

            {f.type === "textarea" ? (
              <textarea
                {...common}
                className={`${kit.textarea} ${err ? kit.invalid : ""}`}
                placeholder={f.placeholder}
                onChange={(e) => update(f.name, e.target.value)}
              />
            ) : f.type === "select" ? (
              <select
                {...common}
                className={`${kit.select} ${err ? kit.invalid : ""}`}
                onChange={(e) => update(f.name, e.target.value)}
              >
                <option value="">{messages.selectPlaceholder}</option>
                {f.options?.map((o) => (
                  <option key={o} value={o}>
                    {o}
                  </option>
                ))}
              </select>
            ) : (
              <input
                {...common}
                type={f.type}
                dir={f.type === "email" || f.type === "tel" || f.type === "url" ? "ltr" : undefined}
                className={`${kit.input} ${err ? kit.invalid : ""}`}
                placeholder={f.placeholder}
                autoComplete={f.autoComplete}
                onChange={(e) => update(f.name, e.target.value)}
              />
            )}

            {err && (
              <span id={`${id}-error`} className={kit.errorText} role="alert">
                {err}
              </span>
            )}
          </div>
        );
      })}

      {sent && (
        <div className={`${kit.alert} ${kit.alertSuccess}`} role="status">
          <FaCheckCircle className={kit.alertIcon} />
          <span>{messages.success}</span>
        </div>
      )}

      <div className={kit.formFooter}>
        <p className={kit.formNote}>{messages.note}</p>
        <button type="submit" className={kit.btnPrimary}>
          <span>{messages.submit}</span>
          <FaPaperPlane className={kit.btnIcon} />
        </button>
      </div>
    </form>
  );
}
