import { Link } from "react-router-dom";
import { Container, PageHero } from "../components/ui";
import { COMPANY, COUNTRY_COUNT, LEGAL_LAST_UPDATED } from "../data/site";

const LegalLayout = ({ eyebrow, title, children }) => (
  <>
    <PageHero eyebrow={eyebrow} title={title} />
    <section className="py-16 sm:py-20">
      <Container className="max-w-3xl space-y-10 text-lg leading-relaxed text-night/80 [&_h2]:mb-3 [&_h2]:text-2xl [&_h2]:text-night [&_h3]:mb-2 [&_h3]:text-xl [&_h3]:text-night [&_li]:mt-1.5 [&_ul]:list-disc [&_ul]:pl-6">
        {children}
        <p className="border-t border-line pt-6 text-base text-night/60">
          Last updated: {LEGAL_LAST_UPDATED ?? "date to be confirmed at publication"}
        </p>
      </Container>
    </section>
  </>
);

const ContactLink = () => (
  <Link to="/contact" className="font-semibold text-gold-deep underline underline-offset-2">
    Contact page
  </Link>
);

export const PrivacyPolicy = () => (
  <LegalLayout eyebrow="Legal" title="Privacy Policy">
    <div>
      <h2>1. Who We Are</h2>
      <p>
        {COMPANY.name} ("we," "us," "our") is the data controller for personal
        information processed through this website and our recruitment
        services. Our registered office is: {COMPANY.name}, {COMPANY.office.full}.
      </p>
      <p className="mt-3">
        We process personal data in accordance with the UK General Data
        Protection Regulation (UK GDPR) and the Data Protection Act 2018.
      </p>
    </div>
    <div>
      <h2>2. What Information We Collect</h2>
      <p>Depending on whether you're a candidate, an employer, or a website visitor, we may collect:</p>
      <ul className="mt-3">
        <li><strong>Identification data:</strong> full name, date of birth, nationality, passport/ID details</li>
        <li><strong>Contact data:</strong> email address, phone number, postal address</li>
        <li><strong>Professional data:</strong> CV, work history, qualifications, certifications, language skills</li>
        <li><strong>Employment-related data:</strong> desired roles, salary expectations, availability, right-to-work documentation</li>
        <li><strong>Technical data:</strong> IP address, browser type, cookies and website usage data (see our <Link to="/terms#cookies" className="underline">Cookie Policy</Link>)</li>
        <li><strong>Communications:</strong> messages sent via our contact and registration forms</li>
      </ul>
    </div>
    <div>
      <h2>3. How We Use Your Information</h2>
      <p>We process personal data to:</p>
      <ul className="mt-3">
        <li>Match candidates with employer vacancies</li>
        <li>Verify candidate identity, right-to-work status, and qualifications</li>
        <li>Communicate with candidates and employers about opportunities and enquiries</li>
        <li>Meet our legal and regulatory obligations related to recruitment and employment</li>
        <li>Improve our website and services</li>
      </ul>
    </div>
    <div>
      <h2>4. Legal Basis for Processing</h2>
      <p>We rely on the following legal bases under UK GDPR:</p>
      <ul className="mt-3">
        <li><strong>Contract:</strong> processing necessary to provide recruitment services you've requested</li>
        <li><strong>Legitimate interests:</strong> improving our services and communicating relevant opportunities</li>
        <li><strong>Legal obligation:</strong> meeting right-to-work verification and other regulatory requirements</li>
        <li><strong>Consent:</strong> where you've given specific permission, e.g. for marketing communications (which you can withdraw at any time)</li>
      </ul>
    </div>
    <div>
      <h2>5. Sharing Your Information</h2>
      <p>
        We may share candidate information with prospective employers as part
        of the recruitment process, and with third parties where required by
        law (e.g. right-to-work verification bodies). We do not sell personal
        data to third parties.
      </p>
    </div>
    <div>
      <h2>6. International Transfers</h2>
      <p>
        Given our sourcing footprint spans {COMPANY.sourceRegions}, and our
        placement footprint spans {COUNTRY_COUNT} European countries, some
        personal data may be transferred outside the UK. Where this happens,
        we take steps to ensure appropriate safeguards are in place in line
        with UK GDPR requirements.
      </p>
    </div>
    <div>
      <h2>7. Data Retention</h2>
      <p>
        We retain personal data only for as long as necessary to fulfil the
        purposes described in this policy, or as required by law. Candidate
        profiles that are no longer active may be retained for a limited period
        to allow for future opportunity matching, and can be deleted on request
        (see Section 9).
      </p>
    </div>
    <div>
      <h2>8. Data Security</h2>
      <p>
        We apply appropriate technical and organisational measures to protect
        personal data against unauthorised access, loss, or misuse.
      </p>
    </div>
    <div>
      <h2>9. Your Rights</h2>
      <p>Under UK GDPR, you have the right to:</p>
      <ul className="mt-3">
        <li>Access the personal data we hold about you</li>
        <li>Request correction of inaccurate data</li>
        <li>Request deletion of your data ("right to be forgotten")</li>
        <li>Restrict or object to certain processing</li>
        <li>Request data portability</li>
        <li>Withdraw consent at any time, where processing is based on consent</li>
      </ul>
      <p className="mt-3">
        To exercise any of these rights, contact us via the details on our <ContactLink />.
      </p>
    </div>
    <div>
      <h2>10. Complaints</h2>
      <p>
        If you're unhappy with how we've handled your personal data, you have
        the right to lodge a complaint with the UK's supervisory authority, the
        Information Commissioner's Office (ICO) —{" "}
        <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="underline">
          ico.org.uk
        </a>
        .
      </p>
    </div>
    <div>
      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this policy from time to time. The current version will
        always be available on this page.
      </p>
    </div>
  </LegalLayout>
);

export const Terms = () => (
  <LegalLayout eyebrow="Legal" title="Terms of Use & Cookie Policy">
    <h2 className="text-3xl!">Part A — Terms of Use</h2>
    <div>
      <h3>1. Acceptance of Terms</h3>
      <p>By using this website, you agree to these Terms of Use. If you do not agree, please do not use the site.</p>
    </div>
    <div>
      <h3>2. Our Services</h3>
      <p>
        {COMPANY.name} provides international recruitment services, including
        candidate sourcing, screening, and placement support, as described on
        this website. Use of the site does not guarantee employment or
        successful candidate placement.
      </p>
    </div>
    <div>
      <h3>3. Accuracy of Information</h3>
      <p>
        We aim to keep all information on this site accurate and current, but
        we do not guarantee completeness or accuracy at all times. Job seekers
        and employers should verify specific details directly with us before
        relying on them.
      </p>
    </div>
    <div>
      <h3>4. User Conduct</h3>
      <p>When using this site or submitting information to us (via forms, CV uploads, or vacancy submissions), you agree to:</p>
      <ul className="mt-3">
        <li>Provide accurate and truthful information</li>
        <li>Not misuse the site for unlawful purposes</li>
        <li>Not attempt to access restricted areas of the site or interfere with its operation</li>
      </ul>
    </div>
    <div>
      <h3>5. Candidate & Employer Submissions</h3>
      <p>
        By submitting a CV, vacancy, or enquiry, you confirm the information
        provided is accurate and that you have the right to share any documents
        or data included.
      </p>
    </div>
    <div>
      <h3>6. Intellectual Property</h3>
      <p>
        All content on this site — text, graphics, logos — is owned by or
        licensed to {COMPANY.name} and may not be reproduced without permission.
      </p>
    </div>
    <div>
      <h3>7. Limitation of Liability</h3>
      <p>
        {COMPANY.name} is not liable for any indirect or consequential loss
        arising from use of this website, to the fullest extent permitted by law.
      </p>
    </div>
    <div>
      <h3>8. Governing Law</h3>
      <p>These Terms are governed by the laws of England and Wales.</p>
    </div>
    <div>
      <h3>9. Contact</h3>
      <p>Questions about these Terms can be directed via our <ContactLink />.</p>
    </div>

    <h2 id="cookies" className="scroll-mt-28 border-t border-line pt-10 text-3xl!">
      Part B — Cookie Policy
    </h2>
    <div>
      <h3>1. What Are Cookies</h3>
      <p>
        Cookies are small text files stored on your device when you visit our
        website, used to make the site function properly and to understand how
        it's used.
      </p>
    </div>
    <div>
      <h3>2. Cookies We Use</h3>
      <div className="mt-3 overflow-x-auto rounded-xl border border-line">
        <table className="w-full text-left text-base">
          <thead className="bg-ink text-cream">
            <tr>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Purpose</th>
              <th className="px-4 py-3 font-semibold">Can be disabled?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line bg-white">
            <tr>
              <td className="px-4 py-3 font-semibold text-night">Essential</td>
              <td className="px-4 py-3">Required for core site functionality (navigation, form submission, security)</td>
              <td className="px-4 py-3">No</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-night">Analytics</td>
              <td className="px-4 py-3">Helps us understand site usage to improve content and structure</td>
              <td className="px-4 py-3">Yes</td>
            </tr>
            <tr>
              <td className="px-4 py-3 font-semibold text-night">Functional</td>
              <td className="px-4 py-3">Remembers preferences (e.g. language, form progress)</td>
              <td className="px-4 py-3">Yes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <h3>3. Managing Cookies</h3>
      <p>
        You can accept, reject non-essential cookies, or customise your
        preferences via the cookie banner shown on your first visit, or at any
        time through your browser settings.
      </p>
    </div>
    <div>
      <h3>4. Third-Party Cookies</h3>
      <p>
        Some cookies may be set by third-party services we use (e.g. analytics
        providers), governed by their own privacy policies.
      </p>
    </div>
    <div>
      <h3>5. Changes to This Policy</h3>
      <p>
        We may update this Cookie Policy periodically; the current version is
        always available on this page.
      </p>
    </div>
  </LegalLayout>
);

export const Compliance = () => (
  <LegalLayout eyebrow="Compliance" title="Accreditations & Compliance">
    <div>
      <h2>How we work</h2>
      <p>
        {COMPANY.name} is registered in London, England, at{" "}
        {COMPANY.office.full}. Our recruitment process is built around
        document-led verification: every candidate's identification,
        right-to-work status, and relevant qualifications are checked before
        they are introduced to an employer.
      </p>
    </div>
    <div>
      <h2>Data protection</h2>
      <p>
        We process personal data in accordance with the UK General Data
        Protection Regulation (UK GDPR) and the Data Protection Act 2018. See
        our{" "}
        <Link to="/privacy-policy" className="font-semibold text-gold-deep underline underline-offset-2">
          Privacy Policy
        </Link>{" "}
        for full details.
      </p>
    </div>
    <div>
      <h2>Visa and work-permit documentation</h2>
      <p>
        We support contract issuance and the relevant visa/work-permit
        documentation for the country of placement, in line with that
        country's requirements.
      </p>
    </div>
    <div>
      <h2>Accreditations</h2>
      <p>
        Details of third-party accreditations and memberships will be published
        on this page once confirmed. For any compliance questions in the
        meantime, please use our <ContactLink />.
      </p>
    </div>
  </LegalLayout>
);

export const ThankYou = () => (
  <PageHero
    eyebrow="Submission received"
    title="Thank you — we've got your details."
    text="A member of our team will review your submission and be in touch.">
    <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 font-semibold text-ink hover:bg-gold-deep">
      Back to Homepage
    </Link>
  </PageHero>
);

export const NotFound = () => (
  <PageHero eyebrow="404" title="We couldn't find that page." text="It may have moved, or the link may be incorrect.">
    <Link to="/" className="inline-flex items-center justify-center rounded-full bg-gold px-6 py-3 font-semibold text-ink hover:bg-gold-deep">
      Back to Homepage
    </Link>
  </PageHero>
);
