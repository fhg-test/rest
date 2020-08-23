import { Session } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

interface Create {
  readonly email: string;
  readonly password: string;
}

function getBaseUrl(): string {
  return getResourceEndpoint(Resource.Sessions);
}

async function create(data: Create, cookie?: any): Promise<Session> {
  return await request.post({
    cookie,
    url: getBaseUrl(),
    body: data,
  });
}

async function list(
  queryParams?: QueryParams,
  cookie?: any,
): Promise<Session[]> {
  return await request.get({
    queryParams,
    cookie,
    url: getBaseUrl(),
  });
}

async function count(queryParams?: QueryParams, cookie?: any): Promise<number> {
  const { count } = await request.get({
    queryParams,
    cookie,
    url: `${getBaseUrl()}/count`,
  });

  return count;
}

async function get(
  id: string,
  queryParams?: QueryParams,
  cookie?: any,
): Promise<Session> {
  return await request.get({
    queryParams,
    cookie,
    url: `${getBaseUrl()}/${id}`,
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

async function del(id: string, cookie?: any): Promise<Session> {
  return await request.del({
    cookie,
    url: `${getBaseUrl()}/${id}`,
  });
}

async function delCurrent(cookie?: any): Promise<Session> {
  return await request.del({
    cookie,
    url: `${getBaseUrl()}/current`,
  });
}

export { list, count, create, get, getCurrent, del, delCurrent };
