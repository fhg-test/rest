import { User } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

function getBaseUrl(): string {
  return getResourceEndpoint(Resource.User);
}

async function get(queryParams?: QueryParams, cookie?: any): Promise<User> {
  return await request.get({
    queryParams,
    cookie,
    url: getBaseUrl(),
  });
}

export { get };
