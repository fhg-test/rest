import { Session } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

interface Create {
  readonly email: string;
  readonly password: string;
}

function getBaseUrl(): string {
  return getResourceEndpoint([Resource.User, Resource.Sessions]);
}

async function create(data: Create, cookie?: any): Promise<Session> {
  return await request.post({
    cookie,
    url: getBaseUrl(),
    body: data,
  });
}

async function getCurrent(
  queryParams?: QueryParams,
  cookie?: any,
): Promise<Session> {
  return await request.get({
    queryParams,
    cookie,
    url: `${getBaseUrl()}/current`,
  });
}

async function delCurrent(cookie?: any): Promise<Session> {
  return await request.del({
    cookie,
    url: `${getBaseUrl()}/current`,
  });
}

export { create, getCurrent, delCurrent };
