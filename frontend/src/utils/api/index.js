class Api {
  constructor(url) {
    this._url = url;
  }

  static _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(new Error(`${res.status}`));
  }

  async getPosts() {
    const res = await fetch(`${this._url}/api/v1/blog/`);
    return this.constructor._checkResponse(res);
  }

  async getPostWithSlug(slug) {
    const res = await fetch(`${this._url}/api/v1/blog/${slug}`);
    return this.constructor._checkResponse(res);
  }

  async getTagsPost(id) {
    const res = await fetch(`${this._url}/api/v1/tags/${id}`);
    return this.constructor._checkResponse(res);
  }

  async getRelatedPosts(slug) {
    const res = await fetch(`${this._url}/api/v1/blog/${slug}/related_posts/`);
    return this.constructor._checkResponse(res);
  }

  async getMainCarouselSliders() {
    const res = await fetch(`${this._url}/api/v1/main_carousel/`);
    return this.constructor._checkResponse(res);
  }

  async getPostsWithTags(tags) {
    const res = await fetch(`${this._url}/api/v1/blog/?${tags}`);
    return this.constructor._checkResponse(res);
  }

  async postSubscriptionEmail(email) {
    const data = {
      email,
    };
    const res = await fetch(`${this._url}/api/v1/email_form/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postGiftCertificate(data) {
    const res = await fetch(`${this._url}/api/v1/certificate/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postCallbackNumber(data) {
    const res = await fetch(`${this._url}/api/v1/feedback/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }
}

export const api = new Api(process.env.API_URL || 'http://localhost', { 'content-type': 'application/json' });
