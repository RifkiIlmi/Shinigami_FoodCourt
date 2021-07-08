import ENDPOINT from '../../global/api-endpoint';

class Card extends HTMLElement {
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
            
        .post-item {
            float: left;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            width: 100%;
            border-radius: 5px;
            overflow: hidden;
        }

        .post-item__city{
            width: 10ch;
            text-align: center;
            background-color: #2b2929;
            color: white;
            position: absolute;
            padding: 10px 10px;
            font-size: 20px;
            border-end-end-radius: 10px;
            border-top-left-radius: 10px;
            margin-top: 20px;
            margin-left: -12px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.712);
        }

        .post-item__city > p {
            display: inline;
        }

        .post-item__content {
            padding: 16px 32px 32px 32px;
        }

        .post-item__thumbnail {
            width: 100%;
        }

        .post-item__date {
            font-size: 10px;
            text-transform: uppercase;
            color: #999;
        }

        .post-item__date__author {
            color: red;
            text-decoration: none;
        }

        .post-item__title {
            font-weight: 500;
            font-size: 18px;
            margin-top: 16px;
            transition: 0.3s opacity;
        }

        .post-item__title:hover {
            opacity: 0.5;
        }

        .post-item__title a {
            text-decoration: none;
            color: inherit;
            display: block;
            min-width: 44px;
            min-height: 44px;
            margin-bottom: -20px;
        }

        .post-item__description {
            margin-top: 16px;
            font-size: 14px;
            line-height: 1.5em;
            text-align: justify;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 6; /* number of lines to show */
            -webkit-box-orient: vertical;
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

        .post-item__readmore {
            font-size: 16px;
            color: black;
            display: block;
            min-width: 44px;
            min-height: 44px;
            text-align: center;
            margin-bottom: -30px;
        }

        .post-item__readmore:hover {
            color: black;
        }


        @media screen and (min-width: 650px) {
            .post-item__content {
                padding: 16px 32px 32px 32px;
            }

            .post-item__title {
                font-size: 18px;
            }

            .post-item__description {
                font-size: 14px;
            }
        }
        
        @media screen and (min-width: 768px) {
            .post-item__thumbnail {
                max-height: 220px;
            }
        }
        
        @media screen and (min-width: 1024px) {
            .post-item__thumbnail {
                max-height: 230px;
            }
        }
        
        @media screen and (max-width: 1024px) {
            .post-item__thumbnail {
                max-height: 200px;
            }
        }
        
        @media screen and (min-width: 1440px) {
            .post-item__thumbnail {
                max-height: 230px;
            }
        }

        </style>

        <article id="${this._data.id}" class="post-item">
            <div class="post-item__city">
                <p>${this._data.city}</p>
            </div>
            <img class="lazyload post-item__thumbnail"
                src="${ENDPOINT.IMAGES.SMALL(this._data.pictureId)}"
                alt="Restoran ${this._data.name}">
            <div class="post-item__content">
                <div class="post-item__rating">
                    <label for="number_rating">Rating: </label>
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
                    <span id="number_rating" class="number_rating">${this._data.rating}</span>
                </div>
                <h1 class="post-item__title"><a href="#/detail/${this._data.id}">${this._data.name}</a></h1>
                <p class="post-item__description">${this._data.description}</p>
                    <a href="#/detail/${this._data.id}" class="post-item__readmore">Read more</a>
            </div>
        </article>
        `;
    const starPercentage = (this._data.rating / 5) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

    // set width to star-inner class to percentage
    // document.querySelector('#id .stars_inner').style.width = starPercentageRounded
    this.shadowDOM.querySelector('.stars_inner').style.width = starPercentageRounded;
  }
}

customElements.define('card-show', Card);
