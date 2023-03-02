/* eslint-disable class-methods-use-this */
class Api {
  constructor(settings) {
    this._url = settings;
  }

  async _getResponseData(res) {
    if (!res.ok) {
      const err = await res.json();
      return Promise.reject(err);
    }
    return res.json();
  }

  async getAllPosts() {
    const res = await fetch(`${this._url}/v1/blog/posts`);
    return this._getResponseData(res);
  }

  async getPost(id) {
    const res = await fetch(`${this._url}/v1/blog/posts/${id}`);
    return this._getResponseData(res);
  }
}

const settings = 'http://localhost/api';
export const api = new Api(settings);
