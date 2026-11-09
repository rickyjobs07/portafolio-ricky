import { useState } from 'react';
import { useLocale } from '../hooks/useLocale';

const LAYOUT = [
  { id: 'channel', x: 22, y: 48 },
  { id: 'api', x: 46, y: 18 },
  { id: 'services', x: 76, y: 40 },
  { id: 'events', x: 34, y: 78 },
  { id: 'data', x: 74, y: 76 },
];

const LINKS = [
  ['channel', 'api'],
  ['api', 'services'],
  ['services', 'events'],
  ['services', 'data'],
  ['events', 'data'],
];

const POINTS = Object.fromEntries(LAYOUT.map((node) => [node.id, node]));

export default function Hero() {
  const { t } = useLocale();
  const [active, setActive] = useState('services');
  const node = t.hero.nodes[active];

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div className="hero__copy">
          <p className="kicker">{t.hero.index}</p>
          <p className="hero__name">{t.hero.name}</p>
          <h1 id="hero-title">
            {t.hero.titleLead}
            <em>{t.hero.titleEmphasis}</em>
          </h1>
          <p className="lede hero__lede">{t.hero.lede}</p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#work">{t.hero.primary}</a>
            <a className="btn btn--ghost" href="#trajectory">{t.hero.secondary}</a>
            <a className="btn btn--ghost" href="#contact">{t.hero.tertiary}</a>
          </div>
          <dl className="hero__facts">
            {t.hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt>{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="map">
          <p className="map__label" id="map-label">{t.hero.mapLabel}</p>
          <div className="map__stage" role="group" aria-labelledby="map-label">
            <svg className="map__lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              {LINKS.map(([from, to]) => {
                const hot = active === from || active === to;
                return (
                  <line
                    key={`${from}-${to}`}
                    x1={POINTS[from].x}
                    y1={POINTS[from].y}
                    x2={POINTS[to].x}
                    y2={POINTS[to].y}
                    className={hot ? 'is-hot' : undefined}
                  />
                );
              })}
            </svg>
            {LAYOUT.map((item) => {
              const copy = t.hero.nodes[item.id];
              return (
                <button
                  key={item.id}
                  type="button"
                  className={`map__node ${active === item.id ? 'is-active' : ''}`}
                  style={{ left: `${item.x}%`, top: `${item.y}%` }}
                  aria-pressed={active === item.id}
                  onClick={() => setActive(item.id)}
                >
                  <span>{copy.kind}</span>
                  <strong>{copy.title}</strong>
                </button>
              );
            })}
          </div>
          <p className="map__detail" aria-live="polite">
            <strong>{node.title}. </strong>
            {node.body}
          </p>
          <p className="map__hint">
            {t.hero.mapHint}{' '}
            <a href="#lab">{t.hero.labLink}</a>
          </p>
        </div>
      </div>
    </section>
  );
}
