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
    const data = await this.constructor._checkResponse(res);
    if (res.ok) {
      data.forEach((post) => {
        const newImgLink = `${this._url}${post.image}`;
        post.image = newImgLink;
      });
    } else {
      return Promise.reject(new Error(`${res.status}`));
    }
    return data;
  }

  async getPostWithSlug(slug) {
    const res = await fetch(`${this._url}/api/v1/blog/${slug}`);
    const post = await this.constructor._checkResponse(res);
    if (res.ok) {
      const newImgLink = `${this._url}${post.image}`;
      post.image = newImgLink;
    } else {
      return Promise.reject(new Error(`${res.status}`));
    }
    return post;
  }

  async getTagsPost(id) {
    const res = await fetch(`${this._url}/api/v1/tags/${id}`);
    return this.constructor._checkResponse(res);
  }

  async getRelatedPosts(slug) {
    const res = await fetch(`${this._url}/api/v1/blog/${slug}/related_posts/`);
    const data = await this.constructor._checkResponse(res);
    if (res.ok) {
      data.forEach((post) => {
        const newImgLink = `${this._url}${post.image}`;
        post.image = newImgLink;
      });
    } else {
      return Promise.reject(new Error(`${res.status}`));
    }
    return data;
  }

  async getMainCarouselSliders() {
    const res = await fetch(`${this._url}/api/v1/main_carousel/`);
    return this.constructor._checkResponse(res);
  }

  async getPostsWithTags(tags) {
    const res = await fetch(`${this._url}/api/v1/blog/?${tags}`);
    return this.constructor._checkResponse(res);
  }

  async getCourses() {
    const res = await fetch(`${this._url}/api/v1/masterclass_types/`);
    const data = await this.constructor._checkResponse(res);
    if (res.ok) {
      data.results.forEach((course) => {
        const newImgLink = `${this._url}${course.image}`;
        course.image = newImgLink;
      });
    } else {
      return Promise.reject(new Error(`${res.status}`));
    }
    return data;
  }

  async getCourseWithSlug(slug) {
    const res = await fetch(`${this._url}/api/v1/masterclass_types/${slug}`);
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

export const api = new Api(process.env.API_URL || 'http://localhost:8000', { 'content-type': 'application/json' });
