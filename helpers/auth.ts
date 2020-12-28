import Router from 'next/router';
import cookie from 'js-cookie';

export const login = ({ token }: { token: string }): void => {
  cookie.set('token', token, { expires: 1 });
  Router.reload();
};

export const logout = (): void => {
  cookie.remove('token');
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now().toString());
  Router.push('/login');
};
