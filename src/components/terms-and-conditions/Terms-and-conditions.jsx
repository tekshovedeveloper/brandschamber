import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import styles from "./Terms-and-conditions.module.css";

const definitions = [
  {
    term: '"Company", "We", "Us", or "Our"',
    text: "refers to Brands Chamber, operating at www.brandschamber.com.",
  },
  {
    term: '"Client", "You", or "Your"',
    text: "refers to the individual or business entity that engages Brands Chamber for services.",
  },
  {
    term: '"Services"',
    text: "refers to all creative, digital, and marketing services offered by Brands Chamber including but not limited to logo design, branding, web development, mobile app development, graphic design, video production, UI/UX design, and SEO and digital marketing services.",
  },
  {
    term: '"Project"',
    text: "refers to the specific scope of work agreed upon between the Company and the Client.",
  },
  {
    term: '"Deliverables"',
    text: "refers to the final creative, digital, or written work produced by the Company for the Client as part of a Project.",
  },
  {
    term: '"Intellectual Property"',
    text: "refers to all creative work, designs, code, concepts, and materials produced in connection with a Project.",
  },
];

export default function TermsAndConditions({ breadcrumbs = [] }) {
  const hasBreadcrumbs = Array.isArray(breadcrumbs) && breadcrumbs.length > 0;

  return (
    <section className={styles.page}>
      <div className={styles.container}>
        <header className={styles.hero}>
          {hasBreadcrumbs && (
            <div className={styles.breadcrumbSlot}>
              <Breadcrumbs items={breadcrumbs} variant="centered" />
            </div>
          )}

          <h1 className={styles.title}>
            TERMS & CONDITIONS
          </h1>

          <p className={styles.intro}>
            Please read these Terms and Conditions carefully before using the
            Brands Chamber website or engaging any of our services. By
            accessing our website or placing an order for services, you agree
            to be bound by these Terms. If you do not agree with any part of
            these Terms, please do not use our website or engage our services.
          </p>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <h2>01. DEFINITIONS</h2>
            <p>
              In these Terms and Conditions, the following definitions apply:
            </p>

            <ul className={styles.definitionList}>
              {definitions.map((item, index) => (
                <li key={index}>
                  <strong>{item.term}</strong> {item.text}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.section}>
            <h2>02. ACCEPTANCE OF TERMS</h2>
            <p>
              By engaging Brands Chamber for any service — whether through our
              website, email, messaging platform, or any other communication
              channel — you confirm that you have read, understood, and agreed
              to these Terms and Conditions in their entirety.
            </p>
            <p>
              These Terms constitute the entire agreement between the Client and
              Brands Chamber with respect to the subject matter herein and
              supersede all prior understandings, representations, or
              agreements whether written or oral, unless a separate written
              agreement has been executed by both parties.
            </p>
            <p>
              We reserve the right to update or modify these Terms at any time
              without prior notice. The most current version will always be
              published on our website. Your continued use of our website or
              services after any changes constitutes your acceptance of the
              updated Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2>03. SERVICES</h2>

            <h3>3.1 Scope of Work</h3>
            <p>
              All services provided by Brands Chamber are governed by the agreed
              project scope, which is defined prior to the commencement of work.
              The scope of work may be communicated via email proposal, project
              brief, or formal agreement. Any changes to the agreed scope
              requested by the Client after work has commenced may result in
              additional charges and revised timelines.
            </p>

            <h3>3.2 Project Commencement</h3>
            <p>
              Work on a project will not commence until the following
              conditions have been met: (a) the Client has approved the project
              scope and pricing; (b) the agreed deposit or full payment has
              been received; and (c) all required materials, information, or
              access credentials have been provided by the Client.
            </p>

            <h3>3.3 Client Responsibilities</h3>
            <p>
              The Client is responsible for providing accurate, complete, and
              timely information required for the completion of the project.
              Brands Chamber shall not be held liable for delays, errors, or
              substandard outputs resulting from incomplete, incorrect, or
              untimely information provided by the Client.
            </p>

            <h3>3.4 Revisions</h3>
            <p>
              The number of revision rounds included in a project will be
              specified in the project scope or proposal. Where unlimited
              revisions are offered, this applies to reasonable adjustments
              within the agreed scope and does not include changes that
              materially alter the direction, concept, or deliverables of the
              project. Brands Chamber reserves the right to charge for
              revisions that exceed the agreed scope.
            </p>

            <h3>3.5 Project Timelines</h3>
            <p>
              All timelines provided are estimates based on the agreed scope and
              the timely provision of information and feedback by the Client.
              Brands Chamber will make reasonable efforts to meet agreed
              deadlines but shall not be held liable for delays caused by
              factors beyond its reasonable control, including but not limited
              to delays in Client feedback, force majeure events, or third-party
              service outages.
            </p>
          </section>

          <section className={styles.section}>
            <h2>04. PAYMENT TERMS</h2>

            <h3>4.1 Pricing</h3>
            <p>
              All prices for services are agreed upon in writing prior to
              project commencement. Brands Chamber reserves the right to adjust
              pricing for future projects. Published starting prices on the
              website are indicative only — final pricing is determined after
              project scoping.
            </p>

            <h3>4.2 Deposit</h3>
            <p>
              A deposit of 50% of the total agreed project fee is required
              before work commences, unless otherwise agreed in writing. The
              remaining balance is due upon project completion and prior to the
              delivery of final files.
            </p>

            <h3>4.3 Accepted Payment Methods</h3>
            <p>Brands Chamber accepts payment via the following methods:</p>
            <ul className={styles.simpleList}>
              <li>Credit or Debit Card (Visa, Mastercard, American Express)</li>
              <li>
                Bank Transfer (wire transfer to designated account details
                provided on invoice)
              </li>
              <li>PayPal (payments accepted via contact@brandschamber.com)</li>
            </ul>

            <h3>4.4 Late Payment</h3>
            <p>
              Invoices are due within the timeframe specified on the invoice,
              typically 7 days from the date of issue unless otherwise agreed.
              Brands Chamber reserves the right to suspend or withhold delivery
              of work in the event of outstanding payment. Late payments may be
              subject to a late fee of 1.5% per month on the outstanding
              balance.
            </p>

            <h3>4.5 Currency</h3>
            <p>
              All prices are quoted and invoiced in United States Dollars (USD)
              unless otherwise stated in writing. The Client is responsible for
              any currency conversion fees or bank charges incurred during
              payment.
            </p>
          </section>

          <section className={styles.section}>
            <h2>05. INTELLECTUAL PROPERTY & OWNERSHIP</h2>

            <h3>5.1 Transfer of Ownership</h3>
            <p>
              Upon receipt of full payment, all intellectual property rights for
              the final approved Deliverables are transferred to the Client.
              This includes the right to use, reproduce, modify, and distribute
              the Deliverables for any lawful business purpose.
            </p>

            <h3>5.2 Ownership Prior to Full Payment</h3>
            <p>
              Until full payment has been received, all Deliverables —
              including concepts, drafts, and final files — remain the
              exclusive intellectual property of Brands Chamber. The Client
              shall have no right to use, reproduce, or distribute any
              Deliverables until full payment has been made.
            </p>

            <h3>5.3 Brands Chamber Portfolio Rights</h3>
            <p>
              Unless otherwise agreed in writing, Brands Chamber reserves the
              right to display completed work in its portfolio, case studies,
              social media, and marketing materials. If the Client requires
              confidentiality regarding the project, this must be communicated
              and agreed upon in writing prior to project commencement.
            </p>

            <h3>5.4 Third-Party Assets</h3>
            <p>
              Where third-party assets such as stock photography, fonts, icons,
              or plugins are incorporated into Deliverables, the Client is
              responsible for ensuring compliance with the applicable
              third-party licences. Brands Chamber will notify the Client of any
              third-party assets used and the applicable licence terms.
            </p>

            <h3>5.5 Client-Provided Materials</h3>
            <p>
              By providing any materials — including logos, images, text, or
              other content — to Brands Chamber for use in a project, the
              Client warrants that they have the legal right to use and share
              such materials, and that their use will not infringe upon the
              intellectual property rights of any third party. The Client agrees
              to indemnify Brands Chamber against any claims arising from the
              use of Client-provided materials.
            </p>
          </section>

          <section className={styles.section}>
            <h2>06. REFUND POLICY</h2>
            <p>
              Brands Chamber evaluates refund requests on a case-by-case basis.
              We are committed to delivering work that meets the agreed brief
              and our quality standards, and we will always work with the Client
              to resolve any concerns before considering a refund.
            </p>

            <h3>6.1 General Refund Principles</h3>
            <p>
              Refund requests are reviewed individually, taking into account the
              stage of the project, the nature of the concern, and the
              circumstances of the request. The following general principles
              apply:
            </p>
            <ul className={styles.simpleList}>
              <li>
                Deposits are non-refundable once project work has commenced, as
                they cover time, resources, and creative work already invested.
              </li>
              <li>
                If a project is cancelled by the Client after work has
                commenced, the Client shall be invoiced for the work completed
                to date, proportional to the total project fee.
              </li>
              <li>
                If Brands Chamber is unable to deliver the agreed services due
                to circumstances on our part, the Client will be entitled to a
                proportional refund of any fees paid.
              </li>
              <li>
                Refunds will not be issued on the basis of subjective
                dissatisfaction with creative direction where the work has been
                produced in accordance with the agreed brief and revision
                process.
              </li>
            </ul>

            <h3>6.2 Requesting a Refund</h3>
            <p>
              To request a refund, the Client must contact Brands Chamber in
              writing at contact@brandschamber.com with a clear explanation of the
              reason for the request. Brands Chamber will respond within 5
              business days and work toward a fair resolution.
            </p>
          </section>

          <section className={styles.section}>
            <h2>07. CONFIDENTIALITY</h2>
            <p>
              Both parties agree to keep confidential any proprietary or
              sensitive information shared during the course of a project.
              Brands Chamber will not disclose Client-specific business
              information, strategies, or materials to any third party without
              the Client&apos;s written consent, except where required by law.
            </p>
            <p>
              This confidentiality obligation does not apply to information that
              is publicly available, already known to the receiving party, or
              required to be disclosed by law or regulation.
            </p>
          </section>

          <section className={styles.section}>
            <h2>08. LIMITATION OF LIABILITY</h2>
            <p>
              To the fullest extent permitted by applicable law, Brands Chamber
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or related to
              the services provided, including but not limited to loss of
              revenue, loss of business, loss of data, or reputational damage.
            </p>
            <p>
              Brands Chamber&apos;s total liability to the Client in connection
              with any project shall not exceed the total fees paid by the
              Client for that specific project.
            </p>
            <p>
              Brands Chamber does not guarantee specific business outcomes,
              search engine rankings, advertising performance, revenue
              increases, or other results from its services. All performance
              projections or estimates provided are indicative only.
            </p>
          </section>

          <section className={styles.section}>
            <h2>09. WARRANTIES & REPRESENTATIONS</h2>
            <p>
              Brands Chamber warrants that all services will be performed with
              reasonable skill and care, and that all Deliverables will be
              produced in accordance with the agreed project brief.
            </p>
            <p>
              The Client warrants that: (a) they have the authority to enter
              into this agreement; (b) all materials provided to Brands Chamber
              are owned by the Client or licensed for the intended use; and (c)
              the intended use of the Deliverables does not and will not
              infringe upon the rights of any third party.
            </p>
          </section>

          <section className={styles.section}>
            <h2>10. TERMINATION</h2>
            <p>
              Either party may terminate a project by providing written notice
              to the other party. In the event of termination:
            </p>
            <ul className={styles.simpleList}>
              <li>
                The Client shall pay for all work completed up to the date of
                termination, proportional to the total agreed project fee.
              </li>
              <li>
                Brands Chamber shall deliver all completed work and source files
                up to the point of termination upon receipt of outstanding
                payment.
              </li>
              <li>
                If Brands Chamber terminates a project due to Client breach of
                these Terms, the Client shall not be entitled to a refund of any
                deposits paid.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2>11. GOVERNING LAW & DISPUTE RESOLUTION</h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the United States. Any disputes
              arising from or related to these Terms or the services provided
              shall first be attempted to be resolved through good-faith
              negotiation between the parties.
            </p>
            <p>
              If a dispute cannot be resolved through negotiation within 30
              days, the parties agree to pursue mediation before initiating any
              legal proceedings. Any legal proceedings shall be brought in the
              appropriate courts of the United States.
            </p>
          </section>

          <section className={styles.section}>
            <h2>12. MISCELLANEOUS</h2>

            <h3>12.1 Entire Agreement</h3>
            <p>
              These Terms and Conditions, together with any written project
              proposal or agreement, constitute the entire agreement between the
              Client and Brands Chamber with respect to the services.
            </p>

            <h3>12.2 Severability</h3>
            <p>
              If any provision of these Terms is found to be unenforceable or
              invalid under applicable law, that provision will be limited or
              eliminated to the minimum extent necessary, and the remaining
              provisions will continue in full force and effect.
            </p>

            <h3>12.3 No Waiver</h3>
            <p>
              Brands Chamber&apos;s failure to enforce any provision of these
              Terms shall not constitute a waiver of its right to enforce that
              provision or any other provision in the future.
            </p>

            <h3>12.4 Contact</h3>
            <p>
              For any questions or concerns regarding these Terms and
              Conditions, please contact us at:
            </p>
            <p className={styles.contact}>
              Brands Chamber · 	contact@brandschamber.com ·
              www.brandschamber.com
            </p>
          </section>
        </div>
      </div>
    </section>
  );
}
