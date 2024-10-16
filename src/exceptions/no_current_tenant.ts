import { Exception } from '@poppinss/utils';

export default class NoCurrentTenant extends Exception {
  public static make(): NoCurrentTenant {
    return new NoCurrentTenant('The request expected a current tenant but none was set');
  }
}
