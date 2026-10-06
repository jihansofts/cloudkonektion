import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { COUNTRIES, FORM_ENDPOINT, SECTORS } from "../data/site";
import { Button } from "./ui";

const inputCls = {
  light:
    "w-full rounded-lg border border-line bg-white px-4 py-3 text-night placeholder:text-night/40 focus:border-gold-deep focus:outline-none focus:ring-2 focus:ring-gold/40",
  dark: "w-full rounded-lg border border-cream/15 bg-taupe px-4 py-3 text-cream placeholder:text-cream/45 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30",
};

const labelCls = {
  light: "mb-1.5 block text-sm font-semibold text-night",
  dark: "mb-1.5 block text-sm font-semibold text-cream/90",
};

export const Field = ({
  label,
  name,
  type = "text",
  required = false,
  tone = "light",
  as,
  options,
  className = "",
  ...props
}) => {
  const id = `f-${name}-${tone}`;
  let control;
  if (as === "textarea") {
    control = (
      <textarea
        id={id}
        name={name}
        rows={4}
        required={required}
        className={inputCls[tone]}
        {...props}
      />
    );
  } else if (as === "select") {
    control = (
      <select
        id={id}
        name={name}
        required={required}
        className={inputCls[tone]}
        defaultValue={props.defaultValue ?? ""}>
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  } else if (type === "file") {
    control = (
      <input
        id={id}
        name={name}
        type="file"
        required={required}
        className={`${inputCls[tone]} file:mr-4 file:rounded-full file:border-0 file:bg-gold file:px-4 file:py-1.5 file:text-sm file:font-semibold file:text-ink`}
        {...props}
      />
    );
  } else {
    control = (
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className={inputCls[tone]}
        {...props}
      />
    );
  }
  return (
    <div className={className}>
      <label htmlFor={id} className={labelCls[tone]}>
        {label}
        {required && <span className="text-gold-deep"> *</span>}
      </label>
      {control}
    </div>
  );
};

// Wraps FormSubmit's hidden config fields. `_next` must be absolute.
const FormShell = ({
  subject,
  autoresponse,
  multipart = false,
  tone = "light",
  children,
  submitLabel = "Submit",
  submitVariant = "gold",
}) => (
  <form
    action={FORM_ENDPOINT}
    method="POST"
    encType={multipart ? "multipart/form-data" : undefined}
    className="grid gap-5 sm:grid-cols-2">
    <input type="hidden" name="_subject" value={subject} />
    <input type="hidden" name="_captcha" value="false" />
    <input type="hidden" name="_template" value="table" />
    <input
      type="hidden"
      name="_next"
      value={`${window.location.origin}/?submitted=1`}
    />
    {autoresponse && (
      <input type="hidden" name="_autoresponse" value={autoresponse} />
    )}
    <input type="text" name="_honey" className="hidden" tabIndex={-1} aria-hidden="true" />
    {children}
    <p
      className={`text-sm sm:col-span-2 ${
        tone === "dark" ? "text-cream/60" : "text-night/60"
      }`}>
      By submitting, you agree to our{" "}
      <Link to="/privacy-policy" className="underline underline-offset-2">
        Privacy Policy
      </Link>
      .
    </p>
    <div className="sm:col-span-2">
      <Button type="submit" variant={submitVariant}>
        {submitLabel}
      </Button>
    </div>
  </form>
);

const sectorNames = SECTORS.map((s) => s.name);

export const VacancyForm = () => (
  <FormShell
    subject="New Vacancy Submission — Karyera Plus"
    autoresponse="Thank you for submitting your vacancy to Karyera Plus. We've received your details and will be in touch to discuss your requirement.">
    <input type="hidden" name="Form" value="Submit a Vacancy" />
    <Field label="Company name" name="Company" required />
    <Field label="Contact name" name="Contact name" required />
    <Field label="Email" name="email" type="email" required />
    <Field label="Phone" name="Phone" type="tel" />
    <Field label="Sector / role type" name="Sector" as="select" options={sectorNames} />
    <Field label="Number of workers needed" name="Workers needed" type="number" min="1" />
    <Field label="Preferred start date" name="Preferred start date" type="date" />
    <Field label="Country of placement" name="Country of placement" as="select" options={COUNTRIES} />
    <Field
      label="Additional details"
      name="Additional details"
      as="textarea"
      className="sm:col-span-2"
    />
  </FormShell>
);

export const CandidateForm = () => (
  <FormShell
    multipart
    submitVariant="sage"
    subject="New Candidate Registration — Karyera Plus"
    autoresponse="Thank you for registering with Karyera Plus. We've received your profile and will be in touch once we've reviewed your documents.">
    <input type="hidden" name="Form" value="Register as a Candidate" />
    <Field label="Full name" name="Full name" required />
    <Field label="Email" name="email" type="email" required />
    <Field
      label="Phone (with country code)"
      name="Phone"
      type="tel"
      placeholder="+880 …"
      required
    />
    <Field label="Country of residence" name="Country of residence" />
    <Field label="Preferred sector" name="Preferred sector" as="select" options={sectorNames} />
    <Field
      label="CV upload"
      name="attachment"
      type="file"
      accept=".pdf,.doc,.docx"
    />
  </FormShell>
);

const ENQUIRY_TYPES = {
  mediation: "Recruitment Mediation",
  staffing: "Staffing Supply",
  screening: "Candidate Screening",
  registration: "Candidate Registration",
  other: "Other",
};

const AudienceToggle = ({ value, onChange, tone = "light" }) => {
  const opts = ["Employer", "Job Seeker"];
  return (
    <div
      role="tablist"
      className={`mb-6 inline-flex rounded-full p-1 ${
        tone === "dark" ? "bg-taupe" : "bg-line/50"
      }`}>
      {opts.map((o) => (
        <button
          key={o}
          type="button"
          role="tab"
          aria-selected={value === o}
          onClick={() => onChange(o)}
          className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
            value === o
              ? "bg-gold text-ink"
              : tone === "dark"
              ? "text-cream/75 hover:text-cream"
              : "text-night/70 hover:text-night"
          }`}>
          {o}
        </button>
      ))}
    </div>
  );
};

export const ContactForm = () => {
  const [params] = useSearchParams();
  const preset = ENQUIRY_TYPES[params.get("enquiry")];
  const [audience, setAudience] = useState(
    preset === ENQUIRY_TYPES.registration ? "Job Seeker" : "Employer"
  );
  return (
    <>
      <AudienceToggle value={audience} onChange={setAudience} />
      <FormShell subject={`New ${audience} Enquiry — Karyera Plus`}>
        <input type="hidden" name="Audience" value={audience} />
        <Field label="Name" name="Name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="Phone" type="tel" />
        <Field
          key={preset}
          label="Enquiry type"
          name="Enquiry type"
          as="select"
          options={Object.values(ENQUIRY_TYPES)}
          defaultValue={preset}
        />
        <Field
          label="Message"
          name="Message"
          as="textarea"
          required
          className="sm:col-span-2"
        />
      </FormShell>
    </>
  );
};

// Footer toggle form: Job Seeker gets an upload, Employer gets a message box.
export const FooterForm = () => {
  const [audience, setAudience] = useState("Job Seeker");
  const seeker = audience === "Job Seeker";
  return (
    <>
      <AudienceToggle value={audience} onChange={setAudience} tone="dark" />
      <FormShell
        key={audience}
        tone="dark"
        multipart={seeker}
        subject={`Footer ${audience} Enquiry — Karyera Plus`}>
        <input type="hidden" name="Audience" value={audience} />
        <Field tone="dark" label="Name" name="Name" required />
        <Field tone="dark" label="Email" name="email" type="email" required />
        <Field tone="dark" label="Phone" name="Phone" type="tel" />
        <Field tone="dark" label="Location" name="Location" />
        {seeker ? (
          <Field
            tone="dark"
            label="Upload CV"
            name="attachment"
            type="file"
            accept=".pdf,.doc,.docx"
            className="sm:col-span-2"
          />
        ) : (
          <Field
            tone="dark"
            label="Message"
            name="Message"
            as="textarea"
            className="sm:col-span-2"
          />
        )}
      </FormShell>
    </>
  );
};
