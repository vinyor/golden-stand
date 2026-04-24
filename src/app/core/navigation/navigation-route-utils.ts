import { ActivatedRouteSnapshot } from '@angular/router';

/**
 * Walks the route tree and returns the first `groupCode` param (under `grupos/:groupCode`).
 */
export function extractGroupCodeFromSnapshot(root: ActivatedRouteSnapshot | null): string | null {
  let route: ActivatedRouteSnapshot | null = root;
  while (route) {
    const code = route.params['groupCode'];
    if (typeof code === 'string' && code.length > 0) {
      return code;
    }
    route = route.firstChild;
  }
  return null;
}
