import { useEffect, useMemo } from 'react';

import qs from 'qs';
import { useLocation, useSearchParams } from 'react-router-dom';

import { UseQueryParamsConfig } from '../types/params';

export const useSearch = <Query extends object>() => {
  const location = useLocation();

  const search = useMemo(() => {
    return qs.parse(location.search, {
      ignoreQueryPrefix: true,
    }) as Query;
  }, [location.search]);

  return search;
};

export const useQueryParams = <TQuery extends object>(
  initialQuery: TQuery,
  { initialSearch, queryKey }: UseQueryParamsConfig<TQuery> | undefined = {}
) => {
  const query = useSearch<TQuery>();
  const [searchParams, setSearchParams] = useSearchParams();

  const updateQuery = (key: keyof TQuery, value: TQuery[keyof TQuery], replace?: boolean) => {
    const newQuery = { ...query };

    if (value === '' || value === null || value === undefined) {
      delete newQuery[key];
      setSearchParams(qs.stringify(newQuery, { arrayFormat: 'repeat' }), { replace });
      return;
    }

    newQuery[key] = value;
    searchParams.delete(String(key));

    if (Array.isArray(value)) {
      searchParams.set(String(key), value.join(','));
    } else {
      searchParams.set(String(key), String(value));
    }

    setSearchParams(qs.stringify(newQuery, { arrayFormat: 'comma' }));
  };

  const updateAllQueries = (updates: Partial<TQuery>, replace?: boolean) => {
    const newQuery = { ...query };

    Object.entries(updates).forEach(([key, value]) => {
      if (value === '' || value === null || value === undefined) {
        delete newQuery[key as keyof TQuery];
      } else {
        newQuery[key as keyof TQuery] = value as TQuery[keyof TQuery];
      }
    });

    setSearchParams(qs.stringify(newQuery, { arrayFormat: 'comma' }), { replace });
  };

  const currentQueryKey = Array.isArray(queryKey) ? [...queryKey, query] : [queryKey, query];

  useEffect(() => {
    if (initialSearch?.(query)) {
      const queryString = qs.stringify(initialQuery);
      setSearchParams(queryString, { replace: true });
    }
  }, [query, initialSearch, setSearchParams, initialQuery]);

  return {
    query,
    updateQuery,
    updateAllQueries,
    queryKey: currentQueryKey,
  };
};
