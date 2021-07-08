import API_ENDPOINT from '../global/api-endpoint';
import CONFIG from '../global/config';

class ResaturantSource {
  static async allResto() {
    const response = await fetch(API_ENDPOINT.ALLRESTO);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async searchResto(query) {
    const response = await fetch(API_ENDPOINT.SEARCH(query));
    return response.json();
  }

  static async addReview(data) {
    const response = await fetch(API_ENDPOINT.ADDREVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': CONFIG.API_KEY,
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export default ResaturantSource;
