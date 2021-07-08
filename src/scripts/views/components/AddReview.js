/* eslint-disable no-alert */
import RestaurantSource from '../../data/restaurant-source';

class AddReview extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        *{
          box-sizing:border-box;  
          outline:none;
        }
        input[type=text] {
          width: 100%;
          padding: 12px 20px;
          margin: 8px 0;
          display: inline-block;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          min-width: 44px;
          min-height: 44px;
        }
        input:focus {
          outline: none !important;
          border:1px solid black;
          box-shadow: 0 0 10px #719ECE;
        }
        button[type=submit] {
          width: 100%;
          background-color: #949494;
          color: white;
          padding: 14px 20px;
          margin: 8px 0;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 16px;
        }
        button[type=submit]:hover {
          background-color: #7a7a7a;
        }
        .card-input {
          border-radius: 5px;
          background-color: #f2f2f2;
          padding: 20px;
        }
      </style>
          <div class="card">                
              <div class="card-input">
                <input id="name" type="text" placeholder="Your Name" required>
                <input id="review" type="text" placeholder="Your Review" required>
                <button id="addReviewButton" type="submit">Add</button>
              </div>
          </div>
        `;

    const buttonReview = this.shadowDOM.querySelector('#addReviewButton');
    const nameInput = this.shadowDOM.querySelector('#name');
    const reviewInput = this.shadowDOM.querySelector('#review');

    buttonReview.addEventListener('click', () => {
      const name = nameInput.value;
      const review = reviewInput.value;

      const PostData = {
        id: this._data,
        name,
        review,
      };

      const request = RestaurantSource.addReview(PostData);
      request.then((res) => alert(res.message));
      this.render();
    });
  }
}

customElements.define('add-review', AddReview);
