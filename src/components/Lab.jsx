import { useMemo, useState } from 'react';
import { useLocale } from '../hooks/useLocale';
import {
  PROCESSORS,
  createChargeKey,
  initialHealth,
  nextProcessorState,
  routeCharge,
} from '../lib/failover';

export default function Lab() {
  const { t } = useLocale();
  const [health, setHealth] = useState(initialHealth);
  const [key, setKey] = useState(createChargeKey);
  const [attempt, setAttempt] = useState(0);
  const [result, setResult] = useState(null);

  const summary = useMemo(() => {
    if (!result) return t.lab.idle;
    if (result.outcome === 'rejected') return t.lab.rejected(key);
    if (result.outcome === 'slow') return t.lab.slow(t.lab.processors[result.processor].name, result.latencyMs, key);
    return t.lab.accepted(t.lab.processors[result.processor].name, result.latencyMs, key);
  }, [result, key, t]);

  const steps = useMemo(() => {
    if (!result) return [];
    const lines = result.skipped.map((id) => t.lab.skip(t.lab.processors[id].name));
    if (result.processor) {
      lines.push(t.lab.took(t.lab.processors[result.processor].name, result.outcome));
    }
    if (attempt > 1) lines.push(t.lab.sameKey);
    return lines;
  }, [result, attempt, t]);

  const cycle = (id) => {
    setHealth((current) => ({ ...current, [id]: nextProcessorState(current[id]) }));
  };

  const send = () => {
    setResult(routeCharge(health));
    setAttempt((count) => count + 1);
  };

  return (
    <section className="section section--lab" id="lab" aria-labelledby="lab-title">
      <div className="wrap">
        <div className="section__head reveal">
          <p className="kicker">{t.lab.index}</p>
          <h2 id="lab-title">{t.lab.title}</h2>
          <p className="lede">{t.lab.lede}</p>
        </div>

        <div className="lab reveal">
          <div className="lab__brief">
            <p>{t.lab.fiction}</p>
            <p>{t.lab.how}</p>
            <div className="lab__key">
              <span>{t.lab.keyLabel}</span>
              <strong>{key}</strong>
              <button
                type="button"
                className="btn btn--ghost"
                onClick={() => {
                  setKey(createChargeKey());
                  setAttempt(0);
                  setResult(null);
                }}
              >
                {t.lab.newKey}
              </button>
            </div>
          </div>

          <div className="lab__board">
            <ol className="processors" aria-label={t.lab.orderLabel}>
              {PROCESSORS.map((processor) => {
                const state = health[processor.id];
                const copy = t.lab.processors[processor.id];
                const chosen = result?.processor === processor.id;
                const skipped = result?.skipped.includes(processor.id);
                return (
                  <li
                    key={processor.id}
                    className={`processor is-${state} ${chosen ? 'is-chosen' : ''} ${skipped ? 'is-skipped' : ''}`}
                  >
                    <div>
                      <span>{String(processor.order).padStart(2, '0')}</span>
                      <strong>{copy.name}</strong>
                      <em>{copy.note}</em>
                    </div>
                    <button
                      type="button"
                      onClick={() => cycle(processor.id)}
                      aria-label={`${copy.name}. ${t.lab.states[state]}. ${t.lab.changeState}`}
                    >
                      {t.lab.states[state]}
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className="lab__dispatch">
              <button type="button" className="btn btn--solid" onClick={send}>
                {t.lab.send}
              </button>
              <p role="status">{summary}</p>
              {steps.length > 0 ? (
                <ol className="lab__trace">
                  {steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
