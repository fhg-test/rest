import { BookingStatus } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

function getBaseUrl(): string {
  return getResourceEndpoint(Resource.BookingStatuses);
}

async function create(data: BookingStatus): Promise<BookingStatus> {
  return await request.post({
    url: getBaseUrl(),
    body: data,
  });
}

async function list(queryParams?: QueryParams): Promise<BookingStatus[]> {
  return await request.get({
    queryParams,
    url: getBaseUrl(),
  });
}

async function count(queryParams?: QueryParams): Promise<number> {
  const { count } = await request.get({
    queryParams,
    url: `${getBaseUrl()}/count`,
  });

  return count;
}

async function get(
  id: string,
  queryParams?: QueryParams,
): Promise<BookingStatus> {
  return await request.get({
    queryParams,
    url: `${getBaseUrl()}/${id}`,
  });
}

async function update({ id, ...data }: BookingStatus): Promise<BookingStatus> {
  return await request.patch({
    url: `${getBaseUrl()}/${id}`,
    body: data,
  });
}

async function del(id: string): Promise<BookingStatus> {
  return await request.del({
    url: `${getBaseUrl()}/${id}`,
  });
}

export { list, count, create, get, update, del };
