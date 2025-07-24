export interface UseQueryParamsConfig<TQuery extends object> {
  initialSearch?: (query: TQuery) => boolean;
  queryKey?: string | string[];
}
