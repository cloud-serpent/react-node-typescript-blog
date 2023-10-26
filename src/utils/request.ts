import axios, { AxiosError, Method } from 'axios';

interface RequestData {
  url: string;
  method: Method;
  data?: unknown;
  isTokenIncluded?: boolean;
}

export const request = async ({ url, method, data, ...rest }: RequestData) => {
  try {
    const response = await axios({
      url: url,
      method: method,
      data: data,
      headers: {
        ...(rest.isTokenIncluded && {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }),
      },
    });

    return response;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;
      if (reasonCode === 'UNAUTHORIZED') {
        localStorage.removeItem('token');
      }
    }

    throw error;
  }
};
