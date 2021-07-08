import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import '../components/Card';

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
    }

    restos.forEach((resto) => {
      const cardShowElement = document.createElement('card-show');
      cardShowElement.data = resto;
      restosContainer.appendChild(cardShowElement);
    });
  },
};

export default Favorite;
