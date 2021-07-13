import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import ENDPPOINT from '../../global/api-endpoint';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
        <section class="content">
            <div id="maincontent" class="latest">
                <h1 class="latest__label">Favorite Restaurant:</h1>
                <div id="posts" class="posts"></div>
            </div>
        </section>
        `;
  },

  async afterRender() {
    const restos = await FavoriteRestaurantIdb.getAllResto();
    const restosContainer = document.getElementById('posts');

    if (restos.length === 0) {
      restosContainer.innerHTML = `
        Tidak ada Restaurant untuk ditampilkan 
      `;
    } else {
      restos.forEach((resto) => {
        restosContainer.innerHTML += createRestaurantItemTemplate(resto, ENDPPOINT);
        const starPercentage = (resto.rating / 5) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        document.querySelector(`#resto-${resto.id} .stars_inner`).style.width = starPercentageRounded;
      });
    }
  },
};

export default Favorite;
