export const PROCESSORS = [
  { id: 'northline', order: 1, baseMs: 180 },
  { id: 'harbor', order: 2, baseMs: 260 },
  { id: 'meridian', order: 3, baseMs: 340 },
];

export const PROCESSOR_STATES = ['up', 'degraded', 'down'];

export function initialHealth() {
  return {
    northline: 'up',
    harbor: 'up',
    meridian: 'up',
  };
}

export function nextProcessorState(state) {
  const index = PROCESSOR_STATES.indexOf(state);
  return PROCESSOR_STATES[(index + 1) % PROCESSOR_STATES.length];
}

export function createChargeKey(random = Math.random) {
  const value = Math.floor(random() * 9000) + 1000;
  return `pay_${value}`;
}

export function routeCharge(health) {
  const skipped = [];

  for (const processor of PROCESSORS) {
    const state = health[processor.id];
    if (state === 'down') {
      skipped.push(processor.id);
      continue;
    }

    const degraded = state === 'degraded';
    return {
      outcome: degraded ? 'slow' : 'accepted',
      processor: processor.id,
      skipped,
      latencyMs: degraded ? processor.baseMs * 3 : processor.baseMs,
    };
  }

  return {
    outcome: 'rejected',
    processor: null,
    skipped,
    latencyMs: null,
  };
}
