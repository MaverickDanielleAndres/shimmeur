"use client";

import { useEffect, useState } from "react";

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  suburb: string;
  situation: string;
  message: string;
};

const INITIAL: FormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  suburb: "",
  situation: "",
  message: "",
};

const SITUATIONS = [
  { value: "", label: "Select the option that best fits" },
  { value: "Deceased estate", label: "Deceased estate" },
  { value: "Divorce or separation", label: "Divorce or separation" },
  { value: "Downsizing", label: "Downsizing" },
  { value: "Long-term rental property", label: "Long-term rental property" },
  { value: "Capital Partner", label: "Capital Partner" },
  { value: "Referred by someone", label: "Referred by someone" },
  { value: "Other", label: "Other" },
];

export default function ContactForm() {
  const [data, setData] = useState<FormState>(INITIAL);
  const [touched, setTouched] = useState(false);

  // Allow programmatic pre-selection via URL hash or custom event
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handlePreselect = (e: Event) => {
      const customEvent = e as CustomEvent;
      setData((d) => ({ ...d, situation: customEvent.detail }));
    };
    window.addEventListener("shimmeur-preselect", handlePreselect);

    const hash = window.location.hash;
    if (hash.includes("situation=capital-partner")) {
      setData((d) => ({ ...d, situation: "Capital Partner" }));
    }

    return () => {
      window.removeEventListener("shimmeur-preselect", handlePreselect);
    };
  }, []);

  const update =
    <K extends keyof FormState>(field: K) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setData((d) => ({ ...d, [field]: e.target.value }));
    };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    if (
      !data.firstName.trim() ||
      !data.lastName.trim() ||
      !data.email.trim() ||
      !data.message.trim()
    ) {
      return;
    }
    const subject = `Shimmeur enquiry — ${data.firstName} ${data.lastName}`;
    const bodyLines = [
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone || "—"}`,
      `Property suburb: ${data.suburb || "—"}`,
      `Situation: ${data.situation || "—"}`,
      "",
      "Property / message:",
      data.message,
    ];
    const mailto = `mailto:natalie@shimmeur.co?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = mailto;
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-[4px] p-10 md:p-12"
      style={{
        background: "var(--shimmeur-cream)",
      }}
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <Field
          label="First name"
          id="firstName"
          value={data.firstName}
          onChange={update("firstName")}
          placeholder="Your first name"
          required
          error={touched && !data.firstName.trim() ? "Required" : undefined}
        />
        <Field
          label="Last name"
          id="lastName"
          value={data.lastName}
          onChange={update("lastName")}
          placeholder="Your last name"
          required
          error={touched && !data.lastName.trim() ? "Required" : undefined}
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5 mt-5">
        <Field
          label="Email address"
          id="email"
          type="email"
          value={data.email}
          onChange={update("email")}
          placeholder="your@email.com"
          required
          error={touched && !data.email.trim() ? "Required" : undefined}
        />
        <Field
          label="Phone number"
          id="phone"
          type="tel"
          value={data.phone}
          onChange={update("phone")}
          placeholder="0400 000 000"
        />
      </div>
      <div className="mt-5">
        <Field
          label="Property suburb"
          id="suburb"
          value={data.suburb}
          onChange={update("suburb")}
          placeholder="e.g. Five Dock, Baulkham Hills, Kilara…"
        />
      </div>
      <div className="mt-5">
        <label
          htmlFor="situation"
          className="block text-[0.7rem] font-semibold tracking-[0.14em] uppercase mb-2"
          style={{ color: "var(--shimmeur-navy)" }}
        >
          Your situation
        </label>
        <select
          id="situation"
          value={data.situation}
          onChange={update("situation")}
          className="w-full text-[0.92rem] py-3.5 px-[18px] rounded-[2px] outline-none"
          style={{
            background: "#FFFFFF",
            border: "1px solid var(--shimmeur-stone)",
            color: "var(--shimmeur-charcoal)",
            fontFamily: "var(--font-body)",
          }}
        >
          {SITUATIONS.map((opt) => (
            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mt-5">
        <label
          htmlFor="message"
          className="block text-[0.7rem] font-semibold tracking-[0.14em] uppercase mb-2"
          style={{ color: "var(--shimmeur-navy)" }}
        >
          Tell us about your property
        </label>
        <textarea
          id="message"
          rows={5}
          value={data.message}
          onChange={update("message")}
          placeholder="A little context helps — property type, rough location, timeline, and anything else you'd like us to know."
          className="w-full text-[0.92rem] py-3.5 px-[18px] rounded-[2px] outline-none resize-y"
          style={{
            background: "#FFFFFF",
            border: touched && !data.message.trim()
              ? "1px solid #b54545"
              : "1px solid var(--shimmeur-stone)",
            color: "var(--shimmeur-charcoal)",
            fontFamily: "var(--font-body)",
            minHeight: "120px",
          }}
        />
        {touched && !data.message.trim() && (
          <span
            className="block mt-1 text-[0.78rem]"
            style={{ color: "#9F2F2D" }}
          >
            Please share a few details so we can reply meaningfully.
          </span>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-navy w-full mt-6"
      >
        Send enquiry
      </button>
      <p
        className="text-[0.78rem] leading-[1.65] mt-4"
        style={{ color: "var(--shimmeur-mid)" }}
      >
        Every enquiry is treated with full confidentiality. We reply
        personally, usually within a business day.
      </p>
    </form>
  );
}

type FieldProps = {
  label: string;
  id: string;
  type?: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  placeholder?: string;
  required?: boolean;
  error?: string;
};

function Field({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
  required,
  error,
}: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[0.7rem] font-semibold tracking-[0.14em] uppercase mb-2"
        style={{ color: "var(--shimmeur-navy)" }}
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        aria-invalid={Boolean(error)}
        className="w-full text-[0.92rem] py-3.5 px-[18px] rounded-[2px] outline-none"
        style={{
          background: "#FFFFFF",
          border: error
            ? "1px solid #b54545"
            : "1px solid var(--shimmeur-stone)",
          color: "var(--shimmeur-charcoal)",
          fontFamily: "var(--font-body)",
        }}
      />
      {error && (
        <span
          className="block mt-1 text-[0.78rem]"
          style={{ color: "#9F2F2D" }}
        >
          {error}
        </span>
      )}
    </div>
  );
}
