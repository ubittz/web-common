import axios, { AxiosError, AxiosRequestConfig, AxiosResponse, Method } from 'axios';

import { getAccessToken } from './localStorage';
import { UbittzErrorResponse, UbittzResponse } from '../types/request';

const responseInterceptor = (axiosRes: AxiosResponse) => {
  // eslint-disable-next-line
  const response: UbittzResponse<any> = {
    ...axiosRes,
    ok: Math.floor(axiosRes.status / 100) === 2,
  };

  return response;
};

const errorInterceptor = async (axiosError: AxiosError) => {
  const error: UbittzErrorResponse = {
    ...axiosError,
    ok: Math.floor((axiosError.status ?? 500) / 100) === 2,
  };
  
  return error;
};

const generatorRequest = (auth: boolean = false) => {
  axios.interceptors.response.use(responseInterceptor, errorInterceptor);

  
  const generator =
  (method: Method) =>
    // eslint-disable-next-line
  async <Data = any>(path: string, config?: AxiosRequestConfig): Promise<UbittzResponse<Data>> => {
    const accessToken = getAccessToken();
    
      const newConfig: AxiosRequestConfig = {
        ...config,
        headers: {
          ...config?.headers,
          Authorization: auth ? accessToken && `Bearer ${accessToken}` : undefined,
        },
        method,
      };

      return axios(path, newConfig);
    };

  return {
    get: generator('get'),
    post: generator('post'),
    put: generator('put'),
    delete: generator('delete'),
    patch: generator('patch'),
  };
};

export const unAuthenticatedRequest = generatorRequest();

export const authenticatedRequest = generatorRequest(true);

export const fetcher = async (url: string) => {
  const res = await authenticatedRequest.get(url);

  if ([4, 5].includes(Math.floor(res.status / 100))) {
    const error = res as unknown as AxiosError;
    throw error;
  }

  return res;
};
