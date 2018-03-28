import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class UtilityService {

  constructor() { }

  getBaseUrl(): string{
    return environment.baseUrl;
  }

}
