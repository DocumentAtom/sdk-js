import * as sdk from '../src';
export const mockEndpoint = 'http://localhost:8701/v1.0/mock/'; //endpoint
export const api = new sdk.DocumentAtomSdk(
  mockEndpoint //endpoint
);

export { sdk };
