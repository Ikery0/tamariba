import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'hangout',
  apiKey: process.env.API_KEY,
})