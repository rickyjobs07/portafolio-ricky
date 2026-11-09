import portrait from '../assets/rickymontero.jpg';
import { useLocale } from '../hooks/useLocale';

export default function About() {
  const { t } = useLocale();

  return (
    <section className="section section--paper" id="profile" aria-labelledby="profile-title">
      <div className="wrap about">
        <div className="about__intro">
          <p className="kicker">{t.about.index}</p>
          <h2 id="profile-title">{t.about.title}</h2>
        </div>
        <figure className="about__frame">
          <img
            src={portrait}
            alt={t.about.portraitAlt}
            width="600"
            height="800"
          />
          <figcaption>{t.about.portraitCaption}</figcaption>
        </figure>
        <div className="about__text">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
