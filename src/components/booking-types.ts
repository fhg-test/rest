import { BookingType } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

function getBaseUrl(): string {
  return getResourceEndpoint(Resource.BookingTypes);
}

async function create(data: BookingType): Promise<BookingType> {
  return await request.post({
    url: getBaseUrl(),
    body: data,
  });
}

async function list(queryParams?: QueryParams): Promise<BookingType[]> {
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
): Promise<BookingType> {
  return await request.get({
    queryParams,
    url: `${getBaseUrl()}/${id}`,
  });
}

async function update({ id, ...data }: BookingType): Promise<BookingType> {
  return await request.patch({
    url: `${getBaseUrl()}/${id}`,
    body: data,
  });
}

async function del(id: string): Promise<BookingType> {
  return await request.del({
    url: `${getBaseUrl()}/${id}`,
  });
}

export { list, count, create, get, update, del };
