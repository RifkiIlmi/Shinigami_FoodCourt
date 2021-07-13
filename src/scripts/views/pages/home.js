import RestaurantSource from '../../data/restaurant-source';
import ENDPPOINT from '../../global/api-endpoint';
import { createSkeletonRestaurantTemplate, createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <section class="content">
            <div id="maincontent" class="latest">
                <h1 class="latest__label">Our Partner Restaurant:</h1>
                <div id="posts" class="posts">
                  ${createSkeletonRestaurantTemplate(20)}
                </div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const restos = await RestaurantSource.allResto();
    const restosContainer = document.getElementById('posts');

    restosContainer.innerHTML = '';

    restos.restaurants.forEach((resto) => {
      restosContainer.innerHTML += createRestaurantItemTemplate(resto, ENDPPOINT);
      const starPercentage = (resto.rating / 5) * 100;
      const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
      document.querySelector(`#resto-${resto.id} .stars_inner`).style.width = starPercentageRounded;
    });
  },
};

export default Home;
