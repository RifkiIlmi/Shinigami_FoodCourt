/* eslint-disable no-prototype-builtins */
/* eslint-disable consistent-return */
/* eslint-disable no-return-assign */
/* eslint-disable no-undef */
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

let favoriteRestaurants = [];

const FavoriteRestaurantArray = {

  getResto(id) {
    if (!id) {
      return;
    }

    return favoriteRestaurants.find((resto) => resto.id === id);
  },

  getAllResto() {
    return favoriteRestaurants;
  },

  putResto(resto) {
    if (!resto.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurants
    if (this.getResto(resto.id)) {
      return;
    }

    favoriteRestaurants.push(resto);
  },

  deleteResto(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    favoriteRestaurants = favoriteRestaurants.filter((resto) => resto.id !== id);
  },
};

describe('Favorite Restaurant Array Contract Test Implementation', () => {
  afterEach(() => favoriteRestaurants = []);

  itActsAsFavoriteRestoModel(FavoriteRestaurantArray);
});
