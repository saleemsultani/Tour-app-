import axios from 'axios';
import { showAlert } from './alerts';

// type is either 'password' or 'data'
export const updateSettings = async (data, type) => {
  try {
    console.log('we are in update settings');
    const url =
      type === 'password'
        ? 'http://127.0.0.1:3000/api/v1/users/updateMyPassword'
        : 'http://127.0.0.1:3000/api/v1/users/updateMe';

    console.log('we select the url ', url);
    console.log('data type is : ', type);
    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });

    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} updated successfully`);
      //   window.setTimeout(() => {
      //     location.assign('/');
      //   }, 1000);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};
