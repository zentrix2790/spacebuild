import LandingEnquiry from "@/components/LandingEnquiry";

export default function Content() {
  return (
    <div className="mx-auto flex max-w-[1800px] flex-col gap-8 px-4 py-12 lg:flex-row sm:px-8">
      <article className="space-y-6 text-gray-700 lg:w-[65%]">
        <header className="space-y-4">
          <h2 className="text-3xl font-bold leading-tight text-gray-900">
            How to Find Architectural Design Services Near You in Haldwani
          </h2>
          <p className="leading-8">
            Choosing an architectural design professional nearby can make it
            easier to discuss your plans, understand your site, and coordinate
            design decisions. For a project in Haldwani, look for a provider
            who can explain the scope clearly and has experience relevant to
            your building type and requirements.
          </p>
          <p className="leading-8">
            Compare providers by their process, portfolio, deliverables,
            communication, and fees—not distance or ratings alone. Confirm
            which services are included, such as site study, floor plans,
            elevations, working drawings, coordination, approval support, and
            construction-stage visits.
          </p>
        </header>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            What to Check Before Choosing a Nearby Architect
          </h3>
          <ul className="list-disc space-y-2 pl-6 leading-7">
            <li>
              Review completed projects similar in size and use to yours.
            </li>
            <li>
              Ask for a written scope, design stages, deliverables, and
              revision limits.
            </li>
            <li>
              Clarify fees, payment milestones, exclusions, and extra-visit
              charges before work begins.
            </li>
            <li>
              Discuss site visits, communication channels, and who will handle
              consultant coordination.
            </li>
            <li>
              Check relevant qualifications and clarify responsibility for
              approvals and technical drawings.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Are Remote Design Services an Option?
          </h3>
          <p className="leading-7">
            Some consultations and drawing reviews can be handled online.
            However, site measurements, local conditions, and construction
            coordination may require in-person work. Agree in advance which
            meetings can be remote and how the site will be assessed.
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">
            Plan Your Project with Space Build Haldwani
          </h3>
          <p className="leading-7">
            Share your plot details, building requirements, preferred
            timeline, and budget before comparing proposals. A clear brief
            helps architectural design providers prepare a more useful scope
            and explain the next steps for your project in Haldwani.
          </p>
        </section>
      </article>

      <aside className="lg:w-[35%]">
        <LandingEnquiry />
      </aside>
    </div>
  );
}
