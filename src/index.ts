import { useSearch, useQueryParams, useSWRList, useSWRDetail } from './hooks';
import type { UseQueryParamsConfig, UbittzResponse, UbittzErrorResponse, UbittzPageResponse, SWRConfig, PageQuery } from './types';
import {
  isBase64,
  base64Encoder,
  base64Decoder,
  formatSWRListResponse,
  createBlobJSON,
  get,
  remove,
  set,
  getAccessToken,
  saveToken,
  clearToken,
  unAuthenticatedRequest,
  authenticatedRequest,
  fetcher,
} from './utils';

export {
  isBase64,
  base64Encoder,
  base64Decoder,
  formatSWRListResponse,
  createBlobJSON,
  get,
  remove,
  set,
  getAccessToken,
  saveToken,
  clearToken,
  unAuthenticatedRequest,
  authenticatedRequest,
  fetcher,
  useSearch,
  useQueryParams,
  useSWRList,
  useSWRDetail,
};

export type { UseQueryParamsConfig, UbittzResponse, UbittzErrorResponse, UbittzPageResponse, SWRConfig, PageQuery };

export default {
  isBase64,
  base64Encoder,
  base64Decoder,
  formatSWRListResponse,
  createBlobJSON,
  get,
  remove,
  set,
  getAccessToken,
  saveToken,
  clearToken,
  unAuthenticatedRequest,
  authenticatedRequest,
  fetcher,
  useSearch,
  useQueryParams,
  useSWRList,
  useSWRDetail,
};
