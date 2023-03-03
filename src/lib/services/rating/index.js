import directService from '../service';

const ratingService = (body) => {
  return directService({
    url: `/commandTask/save`,
    method: 'POST',
    data: {
      ...body,
    },
  });
};
const getService = (responseString) => {
  return directService({
    url: `commandTask/get/${responseString}`,
    method: 'GET',
  });
};

export { ratingService, getService };
