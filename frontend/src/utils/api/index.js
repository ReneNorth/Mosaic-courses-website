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
    const res = await fetch(`${this._url}/blog/posts/`);
    return this.constructor._checkResponse(res);
  }

  async getPostWithSlug(slug) {
    const res = await fetch(`${this._url}/blog/posts/${slug}`);
    return this.constructor._checkResponse(res);
  }

  async getTagsPost(id) {
    const res = await fetch(`${this._url}/tags/${id}`);
    return this.constructor._checkResponse(res);
  }

  async getRelatedPosts(slug) {
    const res = await fetch(`${this._url}/blog/posts/${slug}/related_posts/`);
    return this.constructor._checkResponse(res);
  }

  async getMainCarouselSliders() {
    const res = await fetch(`${this._url}/main_carousel/`);
    return this.constructor._checkResponse(res);
  }

  async getPostsWithTags(tags) {
    const res = await fetch(`${this._url}/blog/posts/?${tags}`);
    return this.constructor._checkResponse(res);
  }

  async postSubscriptionEmail(email) {
    const data = {
      email,
    };
    const res = await fetch(`${this._url}/email_form/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postGiftCertificate(data) {
    const res = await fetch(`${this._url}/certificate/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postCallbackNumber(data) {
    const res = await fetch(`${this._url}/feedback/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }
}

export const api = new Api('https://tessera.hopto.org/api/v1');
