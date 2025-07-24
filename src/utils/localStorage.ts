const PREFIX = '@ubittz';

const STORAGE_KEYS = {
  accessToken: 'access_token',
} as const;

export const get = (name: string) => localStorage.getItem(`${PREFIX}/${name}`);

export const remove = (name: string) => localStorage.removeItem(`${PREFIX}/${name}`);

export const set = (name: string, value: string) => {
  localStorage.setItem(`${PREFIX}/${name}`, value);
};

export const getAccessToken = () => get(STORAGE_KEYS.accessToken);

export const saveToken = (accessToken: string) => {
  set(STORAGE_KEYS.accessToken, accessToken);
};

export const clearToken = () => {
  remove(STORAGE_KEYS.accessToken);
};
