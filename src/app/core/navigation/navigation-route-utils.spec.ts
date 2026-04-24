import { ActivatedRouteSnapshot } from '@angular/router';
import { extractGroupCodeFromSnapshot } from './navigation-route-utils';

function snap(params: Record<string, string>, path = '', firstChild: ActivatedRouteSnapshot | null = null): ActivatedRouteSnapshot {
  return { params, routeConfig: path ? { path } : null, firstChild } as unknown as ActivatedRouteSnapshot;
}

describe('extractGroupCodeFromSnapshot', () => {
  it('returns null when no group param exists', () => {
    const root = snap({}, '', snap({}, 'profile', null));
    expect(extractGroupCodeFromSnapshot(root)).toBeNull();
  });

  it('returns groupCode from nested tree', () => {
    const inicio = snap({}, 'inicio', null);
    const group = snap({ groupCode: 'abc-123' }, ':groupCode', inicio);
    const shell = snap({}, '', group);
    const root = snap({}, '', shell);
    expect(extractGroupCodeFromSnapshot(root)).toBe('abc-123');
  });

  it('returns null for empty root', () => {
    expect(extractGroupCodeFromSnapshot(null)).toBeNull();
  });
});
