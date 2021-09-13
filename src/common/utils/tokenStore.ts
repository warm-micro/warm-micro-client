import Cookies from 'js-cookie';

export const userTokenKey = 'userTokenKey';

export const tokenStore = {
  get() {
    return Cookies.get(userTokenKey);
  },
  save(token: string) {
    Cookies.set(userTokenKey, token, { expires: 90 });
  },
  clear() {
    Cookies.remove(userTokenKey);
  },
};
