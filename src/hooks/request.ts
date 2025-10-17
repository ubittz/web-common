import { useRef } from 'react';

import qs from 'qs';
import useSWR from 'swr';

import { SWRConfig, UbittzResponse } from '../types/request';

// eslint-disable-next-line
export const useSWRList = <D = any, Q extends Record<string, any> = Record<string, any>>(path: string, config?: SWRConfig<D, Q>) => {
  const prevResponse = useRef<UbittzResponse<D>>();

  const response = useSWR<UbittzResponse<D>>(config?.skip ? null : `${path}?${qs.stringify(config?.query ?? {})}`, config ?? {});

  if (!response.data && !response.error) {
    return { ...response, data: prevResponse.current };
  }

  prevResponse.current = response.data;

  return response;
};

export const useSWRDetail = <D>(path: string, config?: SWRConfig<D>) => {
  const response = useSWR<UbittzResponse<D>>(config?.skip ? null : `${path}?${qs.stringify(config?.query ?? {})}`, config);
  return response;
};
