/* eslint-disable import/prefer-default-export */
import LikeButtonInitiator from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../src/scripts/data/favoriterestaurant-idb';

const createLikeButtonPresenterWithRestaurant = async (resto) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteResto: FavoriteRestaurantIdb,
    resto,
  });
};

export { createLikeButtonPresenterWithRestaurant };
