import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurant-source';
import '../components/Detail';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';

const Detail = {
  async render() {
    return `
      <section class="content">
          <div id="maincontent">
              <h1 class="latest latest__label" id="title" ></h1>
              <div id="resto"></div>
              <div id="likeButtonContainer"></div>
          </div>
      </section>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantSource.detailResto(url.id);
    const restoContainer = document.getElementById('resto');

    const title = document.querySelector('#title');

    title.innerHTML = resto.restaurant.name;

    const detailShowElement = document.createElement('detail-show');
    detailShowElement.data = resto.restaurant;
    restoContainer.appendChild(detailShowElement);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteResto: FavoriteRestaurantIdb,
      resto: {
        id: resto.restaurant.id,
        name: resto.restaurant.name,
        description: resto.restaurant.description,
        pictureId: resto.restaurant.pictureId,
        city: resto.restaurant.city,
        rating: resto.restaurant.rating,
      },
    });
  },
};

export default Detail;
