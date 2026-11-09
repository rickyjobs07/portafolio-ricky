import { useLocale } from '../hooks/useLocale';

export default function Experience() {
  const { t } = useLocale();

  return (
    <section className="section" id="trajectory" aria-labelledby="trajectory-title">
      <div className="wrap">
        <div className="section__head reveal">
          <p className="kicker">{t.trajectory.index}</p>
          <h2 id="trajectory-title">{t.trajectory.title}</h2>
          <p className="lede">{t.trajectory.lede}</p>
        </div>
        <ol className="timeline">
          {t.trajectory.roles.map((role) => (
            <li key={role.id} className="role reveal">
              <div className="role__when">
                <p>{role.kind === 'work' ? t.trajectory.workLabel : t.trajectory.studyLabel}</p>
                <strong>{role.years}</strong>
                {role.yearsNote ? <em>{role.yearsNote}</em> : null}
              </div>
              <div>
                <h3>{role.title}</h3>
                <p className="role__org">{role.org}</p>
                <p className="role__place">{role.place}</p>
                <p>{role.summary}</p>
                {role.pending ? <p className="pending">{role.pending}</p> : null}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
