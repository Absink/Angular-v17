import { CanActivateFn } from '@angular/router';

export const controlGuard: CanActivateFn = (route, state) => {
  return true;
};
