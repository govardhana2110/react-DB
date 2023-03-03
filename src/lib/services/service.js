import axios from 'axios';
import Cookies from 'js-cookie';

// export const getLangCookie = () => Cookies.get('NEXT_LOCALE') || 'en_us';
export const timeStamp = new Date().getTime();

const client = axios.create({
  baseURL: `${process.env.API_URL}:${process.env.API_PORT}/api/v1`,
  validateStatus: (status) => status >= 200 && status < 300,
});
const directService = async (options, cancelReq = false) => {
  let cancelToken;

  if (cancelReq) {
    cancelToken = axios.CancelToken.source();
  }
  if (typeof cancelToken !== typeof undefined) {
    cancelToken.cancel('Operation canceled due to new request.');
  }
  const onSuccess = (response) => Promise.resolve(response.data);
  const onError = (error) => {
    const servicerResponse =
      error &&
      error.response &&
      error.response.data &&
      error.response.data.response;

    if (servicerResponse && typeof servicerResponse !== 'undefined')
      return Promise.reject(servicerResponse.result);
    return Promise.reject((error && error) || servicerResponse.result);
  };
  try {
    let response;
    if (cancelReq) {
      response = await client({
        ...options,
        cancelToken: cancelToken.token,
      });
    } else {
      response = await client({
        ...options,
      });
    }
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

export default directService;
