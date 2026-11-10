import CVEntry from '@/components/CVEntry'

export default function CVPage() {
  return (
    <>
      <h1 className="text-3xl font-bold">Noah Bertholet</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">
        Élève ingénieur industriel en électronique et informatique, candidat
        officier à l’École royale militaire. Objectif : la cybersécurité au
        Cyber Command de la Défense belge.
      </p>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">Formation</h2>
        <div className="flex flex-col gap-6">
          <CVEntry
            title="Bachelier en sciences de l’ingénieur industriel"
            employer="ECAM, Bruxelles"
            date="2024 – aujourd’hui"
          >
            <p>3e année, option électronique et informatique.</p>
          </CVEntry>
          <CVEntry
            title="Faculté polytechnique"
            employer="École royale militaire"
            date="2023 – 2024"
          >
            <p>52 crédits ECTS obtenus.</p>
          </CVEntry>
          <CVEntry
            title="Année préparatoire"
            employer="DPERM, Saffraanberg"
            date="2022 – 2023"
          />
          <CVEntry
            title="Enseignement secondaire"
            employer="Collège Notre-Dame de la Paix, Namur"
            date="2016 – 2022"
          />
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-2xl font-semibold">Expérience</h2>
        <div className="flex flex-col gap-6">
          <CVEntry
            title="Candidat officier"
            employer="Défense belge – École royale militaire"
            date="Depuis août 2023"
          >
            <ul className="list-disc pl-5">
              <li>Période d’instruction militaire de 6 semaines (2023)</li>
              <li>Camps d’été de 4 semaines (2024 et 2026)</li>
              <li>Camp d’hiver de 2 semaines (2024)</li>
            </ul>
          </CVEntry>
        </div>
      </section>
    </>
  )
}
