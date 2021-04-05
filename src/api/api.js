import { default as axios } from 'axios';
const API_URL = 'http://15.165.145.100:3002';

const ajax = {
  async signUp({ email, nickname, photo_url }) {
    return await axios.post(`${API_URL}/signup`, {
      email,
      nickname,
      photo_url,
    });
  },

  async signIn(email) {
    return await axios.post(`${API_URL}/signin`, {
      email,
    });
  },

  async fetchTils() {},

  async createTil(user_id, subject, contents) {
    return await axios.post(`${API_URL}/create_til`, {
      user_id,
      subject,
      contents,
    });
  },
};

export default ajax;
