import { Booking } from '@fhg-test/core';

import { Resource } from '../base';
import { getResourceEndpoint } from '../utils/endpoints';
import request, { QueryParams } from '../utils/request';

function getBaseUrl(): string {
  return getResourceEndpoint(Resource.Bookings);
}

async function create(data: Booking): Promise<Booking> {
  return await request.post({
    url: getBaseUrl(),
    body: data,
  });
}

async function list(queryParams?: QueryParams): Promise<Booking[]> {
  return await request.get({
    queryParams,
    url: getBaseUrl(),
  });
}

async function get(id: string, queryParams?: QueryParams): Promise<Booking> {
  return await request.get({
    queryParams,
    url: `${getBaseUrl()}/${id}`,
  });
}

async function update({ id, ...data }: Booking): Promise<Booking> {
  return await request.patch({
    url: `${getBaseUrl()}/${id}`,
    body: data,
  });
}

async function approve(id: string, date: Date): Promise<Booking> {
  return await request.patch({
    url: `${getBaseUrl()}/${id}/approval`,
    body: { approvedDate: date },
  });
}

async function reject(id: string): Promise<Booking> {
  return await request.patch({
    url: `${getBaseUrl()}/${id}/rejection`,
  });
}

export { list, create, get, update, approve, reject };
