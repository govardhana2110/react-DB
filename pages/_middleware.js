import React from 'react';
import { NextResponse } from 'next/server';
import Cookies from 'js-cookie';

const Middleware = (request) => {
  // const [storedValue] = useLocalStorage('user');
  const cookie = request.cookies.logintoken;
  // request.cookies.logintoken;
  // getCookie('logintoken');
  // console.log(cookie);
  // const [userInfo, setUserInfo] = React.useState();
  const { pathname } = request.nextUrl;
  // const userStatus = () => {
  //   const [storedValue] = useLocalStorage('user');
  //   return storedValue;
  // };
  // console.log(pathname);

  // authnecation
  // React.useEffect(() => {
  //   setUserInfo(userStatus());
  // }, []);
  if (
    cookie === undefined &&
    [
      '/add-address',
      '/account-usage',
      '/add-card',
      '/bill',
      // '/check-coverage',
      '/comparedevice',
      '/entertainment',
      '/gift-data',
      '/datashare',
      '/mobileshop',
      '/myAccount',
      '/Dashboard',
      '/transactions',
      '/mydevice-upgrade',
      '/mydevices',
      '/myorders',
      '/order-placed',
      '/plan-upgrade',
      '/rewards',
      '/roaming',
      '/send-money',
      '/track-fault-report',
      '/track-faults',
      '/track-order',
      '/unlock-device',
      '/usage',
      '/help/community',
      '/help/csmart-recycle',
      '/help/recycle',
      '/help/report-online',
      // '/help/talk-to-us',
      '/help/topic-detail',
      // '/maps/find-store',
      '/maps/check-coverage-search',
      '/maps/check-coverage-found',
      // '/maps/network-search',
      '/shop/cart',
      '/shop/checkout',
      '/shop/details',
      '/shop',
      '/shop/payment',
      '/shop/plan',
      '/wallet/add-card',
      // '/wallet/add-money',
      '/wallet/payment',
      '/Corporate-Dashboard',
      // '/help/faqs',
      // '/help',
      // '/help/help-faq-articals',
      // '/shop/deals',
      // '/portout',
      '/transactions',
    ].includes(pathname)
  ) {
    return NextResponse.redirect('/login');
  }

  // non authnection

  if (
    cookie !== undefined &&
    [
      '/register',
      '/reset-password',
      '/en_us',
      // '/verify-email',
      // '/otp-login',
      // '/help/faqs',
      // '/help',
      // '/help/help-faq-articals',
      // '/shop/deals',
      // '/portout',
      '/',
      '/login',
    ].includes(pathname)
  ) {
    if (
      pathname === '/register' ||
      pathname === '/login' ||
      pathname === '/reset-password' ||
      pathname === '/' ||
      pathname === '/en_us'
    ) {
      // return NextResponse.redirect('/Dashboard');
    }
    return NextResponse.next();
  }

  return NextResponse.next();
};

export default Middleware;
