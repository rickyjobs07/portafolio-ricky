import { useLocale } from '../hooks/useLocale';

export default function Expertise() {
  const { t } = useLocale();

  return (
    <section className="section" id="practice" aria-labelledby="practice-title">
      <div className="wrap">
        <div className="section__head reveal">
          <p className="kicker">{t.practice.index}</p>
          <h2 id="practice-title">{t.practice.title}</h2>
          <p className="lede">{t.practice.lede}</p>
        </div>
        <ol className="practice">
          {t.practice.groups.map((group, index) => (
            <li key={group.id} className="practice__row reveal">
              <span className="practice__index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <h3>{group.title}</h3>
                <p>{group.thesis}</p>
              </div>
              <ul className="chips" aria-label={group.title}>
                {group.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
