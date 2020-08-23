import { RBAC } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

function getBaseUrl(): string {
  return getResourceEndpoint([Resource.User, Resource.RBAC]);
}

async function get(queryParams?: QueryParams, cookie?: any): Promise<RBAC> {
  return await request.get({
    queryParams,
    cookie,
    url: getBaseUrl(),
  });
}

export { get };
