import Cookies from 'js-cookie';

export default () => {
  Cookies.remove('user');
  Cookies.remove('logintoken');
  // Router.replace('/login');
  // window.location.href = '/login';
  window.localStorage.removeItem('user');
  setTimeout(() => {
    window.location.reload();
  }, 50);
};
