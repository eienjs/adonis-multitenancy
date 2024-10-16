import { RuntimeException } from '@poppinss/utils';

export default class InvalidConfiguration extends RuntimeException {
  public static tenantConnectionDoesNotExist(expectedConnectionName: string): InvalidConfiguration {
    return new InvalidConfiguration(
      `Could not find a tenant connection named "${expectedConnectionName}". Make sure to create a connection with that name in the "connections" key of the "database" config file`,
    );
  }

  public static tenantConnectionIsEmptyOrEqualsToLanlordConnection(): InvalidConfiguration {
    return new InvalidConfiguration(
      '"SwitchTenantDatabaseTask" fails because "multitenancy.tenantDatabaseConnectionName" is "null" or equals to "multitenancy.landlordDatabaseConnectionName"',
    );
  }

  public static invalidAction(
    actionName: string,
    configuredClass: string,
    actionClass: string,
  ): InvalidConfiguration {
    return new InvalidConfiguration(
      `The class currently specified in the "multitenancy.actions.${actionName}" key "${configuredClass}" should be or extend "${actionClass}"`,
    );
  }
}
