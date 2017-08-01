import axios from 'axios';

export const GET_FRIENDS = 'GET_FRIENDS';

export const getFriends = () => {
  const promise = axios.get('http://localhost:5000/friends');
  return {
    type: GET_FRIENDS,
    payload: promise
  }
};

export const FRIEND_INPUT = 'FRIEND_INPUT';

export const friendInput = (data) => {
  const promise = axios.post('http://localhost:5000/friends');
  return {
    type: FRIEND_INPUT,
    payload: promise
  }
};