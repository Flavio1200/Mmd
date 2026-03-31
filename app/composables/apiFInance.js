import { restClient } from '@massive.com/client-js';

export function useApiFinance() {
const apiKey = "0kS3qAkjNxfpmphtRL2kYExYSKajzKBQ";
const rest = restClient(apiKey, 'https://api.massive.com');

async function example_getTicker(company) {
  try {
    const response = await rest.getTicker(
      {
        ticker: company,
      }
    );
    return response;

  } catch (e) {
    console.error('Error:', e);
  }
}

}