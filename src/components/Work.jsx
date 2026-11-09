import { useLocale } from '../hooks/useLocale';

export default function Work() {
  const { t } = useLocale();

  return (
    <section className="section section--paper" id="work" aria-labelledby="work-title">
      <div className="wrap">
        <div className="section__head reveal">
          <p className="kicker">{t.work.index}</p>
          <h2 id="work-title">{t.work.title}</h2>
          <p className="lede">{t.work.lede}</p>
        </div>
        <div className="cases">
          {t.work.items.map((item, index) => (
            <article key={item.id} className="case reveal">
              <header className="case__top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <p>{item.kind}</p>
              </header>
              <h3>
                {item.title}
                {item.repo ? <small>{item.repo}</small> : null}
              </h3>
              <div className="case__grid">
                <div>
                  <h4>{t.work.context}</h4>
                  <p>{item.context}</p>
                </div>
                <div>
                  <h4>{t.work.challenge}</h4>
                  <p>{item.challenge}</p>
                </div>
                <div>
                  <h4>{t.work.approach}</h4>
                  <p>{item.approach}</p>
                </div>
              </div>
              <p className="case__result">
                <span>{t.work.result}</span>
                {item.result}
              </p>
              {item.pending ? <p className="pending">{item.pending}</p> : null}
              <ul className="chips" aria-label={t.work.stack}>
                {item.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
              {item.links.length > 0 ? (
                <p className="case__links">
                  {item.links.map((link) => (
                    <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                      {link.label}
                    </a>
                  ))}
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
