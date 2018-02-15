import axios from 'axios';
import config from '../../config/config';

export const PICTURE_QUERY = 'PICTURE_QUERY';

export const getData = query => {
  return dispatch => {
    axios
      .get(
        `https://pixabay.com/api/?key=${
          config.pixabay
        }&q=${query}&image_type=photo&pretty=true`
      )
      .then(response => {
        console.log('query here', query);
        console.log(response.data);
        return dispatch({ type: PICTURE_QUERY, data: response.data });
      });
  };
};
