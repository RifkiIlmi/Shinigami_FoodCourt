import RestaurantSource from '../../data/restaurant-source';
import '../components/Card';

const Home = {
  async render() {
    return `
        <section class="content">
            <div id="maincontent" class="latest">
                <h1 class="latest__label">Our Partner Restaurant:</h1>
                <div id="posts" class="posts"></div>
            </div>
        </section>
      `;
  },

  async afterRender() {
    const restos = await RestaurantSource.allResto();
    const restosContainer = document.getElementById('posts');

    restos.restaurants.forEach((resto) => {
      const cardShowElement = document.createElement('card-show');
      cardShowElement.data = resto;
      restosContainer.appendChild(cardShowElement);
    });
  },
};

export default Home;
