import { CanActivateFn } from '@angular/router';
import { SharedService } from '../shared/services/shared.service';

export const controlGuard: CanActivateFn = (route, state) => {
  return SharedService.isConnected;
};
