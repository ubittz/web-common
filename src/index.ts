import * as axios from 'axios';

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
  isUbittzError
} from './utils';

export {
  axios,
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
  isUbittzError,
  fetcher,
  useSearch,
  useQueryParams,
  useSWRList,
  useSWRDetail,
};

export type { UseQueryParamsConfig, UbittzResponse, UbittzErrorResponse, UbittzPageResponse, SWRConfig, PageQuery };

export default {
  axios,
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
  isUbittzError,
  fetcher,
  useSearch,
  useQueryParams,
  useSWRList,
  useSWRDetail,
};
