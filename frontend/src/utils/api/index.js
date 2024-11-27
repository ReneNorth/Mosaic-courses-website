import { SLIDER_CONFIG } from '../consts/mockData';
import { getCookie } from '../../helpers/getCookie';

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

  async getMyPersonalInfo() {
    const url = `${this._url}/api/v1/users/me/`;
    const accessToken = localStorage.getItem('accessToken');

    const res = await fetch(url, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return this.constructor._checkResponse(res);
  }

  async changeEmail(newEmail) {
    const url = `${this._url}/api/v1/users/set_email/`;
    const accessToken = localStorage.getItem('accessToken');

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEmail),
    });
    return this.constructor._checkResponse(res);
  }

  async changeMyPersonalInfo(changes) {
    const url = `${this._url}/api/v1/users/me/`;
    const accessToken = localStorage.getItem('accessToken');

    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(changes),
    });

    return this.constructor._checkResponse(res);
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

  async getSchoolInfo() {
    const res = await fetch(`${this._url}/api/v1/school/`);
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

  async getAllcourses() {
    const res = await fetch(`${this._url}/api/v1/masterclass_types`);
    return this.constructor._checkResponse(res);
  }

  async getCourses(dataReq) {
    const res = await fetch(
      // eslint-disable-next-line max-len
      `${this._url}/api/v1/masterclass_types/?limit=${dataReq.limit}&offset=${dataReq.offset}&ordering=${dataReq.order}${dataReq.filter}`,
    );
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

  async getCourseWithId(id) {
    const res = await fetch(`${this._url}/api/v1/masterclass_types/${id}/`);
    return this.constructor._checkResponse(res);
  }

  async bookMasterclass(masterclassId) {
    const res = await this._fetchAuthorized(`${this._url}/api/v1/booking/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        masterclass: masterclassId,
      }),
    });
    return this.constructor._checkResponse(res);
  }

  async bookMasterclassForUnauthorizedUser(data) {
    const res = await fetch(`${this._url}/api/v1/feedback/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
      body: JSON.stringify(data),
    });
  }

  async postSubscriptionEmail(email) {
    const csrftoken = getCookie('csrftoken');
    const data = {
      email,
    };
    const res = await fetch(`${this._url}/api/v1/email_form/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postGiftCertificate(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/v1/certificate/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postCallbackNumber(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/v1/feedback/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async getReviews() {
    const res = await fetch(`${this._url}/api/v1/reviews/`);
    const data = await this.constructor._checkResponse(res);
    if (res.ok) {
      if (data.count === 0) {
        data.results = SLIDER_CONFIG;
      } else {
        let firstId = 1;
        data.results.forEach((review) => {
          review.id = firstId;
          firstId += 1;
        });
      }
    } else {
      return Promise.reject(new Error(`${res.status}`));
    }
    return data.results;
  }

  async getReviewWithSlug(slug) {
    const res = await fetch(`${this._url}/api/v1/reviews/${slug}`);
    const review = await this.constructor._checkResponse(res);
    return review;
  }

  async postRegisterUser(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/v1/users/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postActivateUser(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/v1/users/activation/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      return res;
    }
    return Promise.reject(new Error(`${res.status}`));
  }

  async postResendActivation(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/v1/users/resend_activation/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postLoginUser(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/auth/jwt/create/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async refreshToken(token) {
    const csrftoken = getCookie('csrftoken');
    let res = await fetch(`${this._url}/api/auth/jwt/refresh/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify({
        refresh: token,
      }),
    });
    res = await res.json();
    localStorage.setItem('accessToken', res.accessToken);
    localStorage.setItem('refreshToken', res.refreshToken);
    return this.constructor._checkResponse(res);
  }

  async verifyToken(accessToken) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/auth/jwt/verify/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify({
        token: accessToken,
      }),
    });
    return this.constructor._checkResponse(res);
  }

  async postPasswordReset(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/v1/users/reset_password/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      return res;
    }
    return Promise.reject(new Error(`${res.status}`));
  }

  async getEmailByUID(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(`${this._url}/api/v1/users/email/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'X-CSRFToken': csrftoken,
      },
      body: JSON.stringify(data),
    });
    return this.constructor._checkResponse(res);
  }

  async postResetPasswordConfirm(data) {
    const csrftoken = getCookie('csrftoken');
    const res = await fetch(
      `${this._url}/api/v1/users/reset_password_confirm/`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'X-CSRFToken': csrftoken,
        },
        body: JSON.stringify(data),
      },
    );
    if (res.ok) {
      return res;
    }
    return Promise.reject(new Error(`${res.status}`));
  }

  async getAllFilters() {
    const res = await fetch(`${this._url}/api/v1/filters/`);
    const data = await this.constructor._checkResponse(res);
    if (res.ok) {
      const sorting = [
        { name: 'Рекомендуемые', slug: 'recommended' },
        { name: 'Для начинающих', slug: 'beginners' },
      ];
      const result = data;
      result.ORDER = [...sorting, ...result.ORDER];
      return result;
    }
    return Promise.reject(new Error(`${res.status}`));
  }

  async _fetchAuthorized(url, method = 'GET', headers = null, body = null) {
    const accessToken = localStorage.getItem('accessToken');
    let res = await fetch(`${this._url}${url}`, {
      method,
      headers: {
        Authorization: `Bearer ${accessToken}`,
        ...(headers || {}),
      },
      body,
    });
    if (res.status === 401) {
      await this.refreshToken(localStorage.getItem('refreshToken'));
      const accessToken = localStorage.getItem('accessToken');
      res = await fetch(`${this._url}${url}`, {
        method,
        headers: {
          Authorization: `Bearer ${accessToken}`,
          ...(headers || {}),
        },
        body,
      });
    }
    return this._checkResponse(res);
  }
}

export const api = new Api(
  process.env.REACT_APP_API_URL || 'http://localhost:8000',
  { 'content-type': 'application/json' },
);
