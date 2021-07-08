/* eslint-disable array-callback-return */
/* eslint-disable no-return-assign */
import ENDPOINT from '../../global/api-endpoint';
import './ReviewItem';
import './AddReview';

class Detail extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  set data(data) {
    this._data = data;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
        <style>
        @import url("https://use.fontawesome.com/releases/v5.15.3/css/all.css");
        .resto {
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 18px 16px;
          margin-top: 1rem;
        }
        .resto__poster {
            width: 100%;
            max-width: 800px;
        }
        .resto__info h4 {
            margin: 8px 0;
            font-size: 18px;
        }
        .stars_outer  {
          position: relative;
          display: inline-block;
          font-weight: 900;
          color: #616161;
        }

        .stars_inner {
            position: absolute;
            top: 0;
            left: 0;
            white-space: nowrap;
            overflow: hidden;
            font-weight: 900;
            color: #ffd900;
            width:0;
        }

        .category__tag {
          display: inline-block;
          background-color: rgb(189,189,189);
          margin: 0 5px;
          padding: 6px;
          font-weight: 500;
          border-radius: 60px;
          border: 3px solid rgb(189,189,189);
          min-width: 40px;
          text-align: center;
          box-shadow: 2px 8px 18px -12px rgba(0,0,0,0.75);
          -webkit-box-shadow: 2px 8px 18px -12px rgba(0,0,0,0.75);
          -moz-box-shadow: 2px 8px 18px -12px rgba(0,0,0,0.75);
        }

        .resto__menus {
          display: flex;
          justify-content: space-between;
          flex-direction: row;
        }

        .resto__overview {
          grid-column: 1 / 4;
        }
        .resto__reviews {
          grid-column: 1 / 4;
        }
        .resto__add {
          grid-column: 1 / 4;
        }

        .resto__overview p{
          text-align: justify;
        }

        .resto p{
          font-size: 14px;
        }
        .resto li{
          font-size: 14px;
        }

        @media screen and (max-width: 768px) {
          .resto {
            grid-template-columns: 1fr 1fr;
          }
          .resto__menu {
            grid-column: 1 / 3;
          }
          .resto__menu > h2 {
            text-align: center;
          }
          .resto__menus {
            justify-content: space-evenly;
          }
          .resto__overview {
            text-align: center;
            grid-column: 1 / 3;
          }
          .resto__reviews {
            grid-column: 1 / 3;
          }
          .resto__add {
            grid-column: 1 / 3;
          }
        }

        @media screen and (max-width: 425px) {
          .resto {
            grid-template-columns: 1fr;
          }
          .resto__info {
            text-align: center;
          }
          .resto__menu {
            grid-column: 1 / 2;
          }
          .resto__menu > h2 {
            text-align: center;
          }
          .resto__menus {
            justify-content: space-evenly;
          }
          .resto__overview {
            text-align: center;
            grid-column: 1 / 2;
          }
          .resto__reviews {
            grid-column: 1 / 2;
          }
          .resto__add {
            grid-column: 1 / 2;
          }
        }

        </style>
        <div class="resto">
          <div class="resto__image">
            <img class="resto__poster" src="${ENDPOINT.IMAGES.LARGE(this._data.pictureId)}" alt="${this._data.name}" />
          </div>  
          <div class="resto__info">
            <h2>Information</h2>
            <h3>Address</h3>
            <p>${this._data.address}, Kota ${this._data.city}</p>
            <h3>Rating</h3>
            <div class="stars_outer">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <div class="stars_inner">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                    <span id="number_rating" class="number_rating"> | ${this._data.rating}</span>
            <h3>Special Food</h3>
            <div class="resto__categories"></div>
          </div>
          <div class="resto__menu">
            <h2>Menus</h2>
            <div class="resto__menus">
              <div class="resto__foods">
                <h3>Foods</h3>
              </div>
              <div class="resto__drinks">
                <h3>Drinks</h3>
              </div>
            </div>
          </div>
          <div class="resto__overview">
            <h3>Description</h3>
            <p>${this._data.description}</p>
          </div>
          <div class="resto__reviews">
            <h3>Reviews</h3>
          </div>
          <div class="resto__add">
            <h3>Add Your Review</h3>
          </div>
        </div>
            `;
    const starPercentage = (this._data.rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    const categories = this.shadowDOM.querySelector('.resto__categories');
    const foods = this.shadowDOM.querySelector('.resto__foods');
    const drinks = this.shadowDOM.querySelector('.resto__drinks');
    const reviews = this.shadowDOM.querySelector('.resto__reviews');
    const addReview = this.shadowDOM.querySelector('.resto__add');

    this.shadowDOM.querySelector('.stars_inner').style.width = starPercentageRounded;

    this._data.categories.map((category) => categories.innerHTML += `<span class="category__tag">${category.name} </span>`);

    this._data.menus.foods.map((food) => foods.innerHTML += `<li>${food.name}</li>`);
    this._data.menus.drinks.map((drink) => drinks.innerHTML += `<li>${drink.name}</li>`);

    this._data.customerReviews.map((review) => {
      const reviewItemElement = document.createElement('review-item');
      reviewItemElement.review = review;
      reviews.appendChild(reviewItemElement);
    });

    const addReviewElement = document.createElement('add-review');
    addReviewElement.data = this._data.id;
    addReview.appendChild(addReviewElement);
  }
}

customElements.define('detail-show', Detail);
