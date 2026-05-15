/**
 * Utility to perform fetch requests with type safety and better error handling.
 * Renamed from useFetch to fetcher to follow naming conventions (not a hook).
 */

export class FetchError extends Error {
  constructor(
    public message: string,
    public status: number,
    public statusText: string
  ) {
    super(message);
    this.name = 'FetchError';
  }
}

export const fetcher = async <T>(
  url: string,
  options: RequestInit = {}
): Promise<T> => {
  const defaultHeaders: Record<string, string> = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...defaultHeaders,
        ...options.headers,
      },
    });

    if (!response.ok) {
      throw new FetchError(
        `Error ${response.status}: ${response.statusText}`,
        response.status,
        response.statusText
      );
    }

    return (await response.json()) as T;
  } catch (error) {
    if (error instanceof FetchError) throw error;

    throw new Error(
      error instanceof Error
        ? error.message
        : 'An unexpected error occurred during fetch'
    );
  }
};
