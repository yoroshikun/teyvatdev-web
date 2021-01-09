import Router from 'next/router';
import cookie from 'js-cookie';

export const login = ({ token }: { token: string }): void => {
  cookie.set('token', token, { expires: 1 });
  window.localStorage.setItem('token', token);
  Router.reload();
};

export const logout = (): void => {
  cookie.remove('token');
  window.localStorage.removeItem('token');
  // to support logging out from all windows
  window.localStorage.setItem('logout', Date.now().toString());
  Router.push('/login');
};
