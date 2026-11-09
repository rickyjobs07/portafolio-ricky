import { describe, expect, it } from 'vitest';
import { initialHealth, nextProcessorState, routeCharge } from './failover';

describe('routeCharge', () => {
  it('uses the first healthy processor', () => {
    const result = routeCharge(initialHealth());
    expect(result).toMatchObject({
      outcome: 'accepted',
      processor: 'northline',
      skipped: [],
      latencyMs: 180,
    });
  });

  it('skips a down processor and reports a degraded acceptance', () => {
    const result = routeCharge({
      northline: 'down',
      harbor: 'degraded',
      meridian: 'up',
    });

    expect(result).toMatchObject({
      outcome: 'slow',
      processor: 'harbor',
      skipped: ['northline'],
      latencyMs: 780,
    });
  });

  it('rejects the charge when every processor is down', () => {
    const result = routeCharge({
      northline: 'down',
      harbor: 'down',
      meridian: 'down',
    });

    expect(result.outcome).toBe('rejected');
    expect(result.processor).toBeNull();
    expect(result.skipped).toEqual(['northline', 'harbor', 'meridian']);
  });

  it('cycles processor state without leaving the known set', () => {
    expect(nextProcessorState('up')).toBe('degraded');
    expect(nextProcessorState('degraded')).toBe('down');
    expect(nextProcessorState('down')).toBe('up');
  });
});
