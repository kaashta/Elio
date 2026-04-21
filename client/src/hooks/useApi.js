// useApi — thin wrapper around fetch that handles credentials,
// JSON serialisation, and basic error normalisation

import { useCallback } from 'react';

export function useApi() {
  // Generic request helper
  const request = useCallback(async (path, options = {}) => {
    const { body, method = 'GET', ...rest } = options;

    const res = await fetch(path, {
      method,
      credentials: 'include',
      headers: {
        ...(body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
        ...rest.headers,
      },
      body: body instanceof FormData ? body : body ? JSON.stringify(body) : undefined,
      ...rest,
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      throw new Error(data.error || `Request failed (${res.status})`);
    }

    return data;
  }, []);

  const get = useCallback((path) => request(path), [request]);
  const post = useCallback((path, body) => request(path, { method: 'POST', body }), [request]);
  const patch = useCallback((path, body) => request(path, { method: 'PATCH', body }), [request]);

  return { get, post, patch, request };
}
