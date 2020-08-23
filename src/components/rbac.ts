import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request from '../utils/request';

interface Authorize {
  readonly id: string;
  readonly permission: string;
}

function getBaseUrl(): string {
  return getResourceEndpoint(Resource.RBAC);
}

async function authorize(data: Authorize): Promise<void> {
  return await request.post({
    url: `${getBaseUrl()}/authorize`,
    body: data,
  });
}

export { authorize };
