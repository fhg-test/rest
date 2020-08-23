import { Resource } from '../base';
import config from '../config';

function getResourceEndpoint(resource: Resource | Resource[]): string {
  const resources = Array.isArray(resource) ? resource : [resource];

  return [config.get().baseUrl, ...resources].join('/');
}

export { getResourceEndpoint };
