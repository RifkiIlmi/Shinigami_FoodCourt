const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart" style="color:#272727" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createRestaurantItemTemplate = (resto, ENDPOINT) => `
  <article id="resto-${resto.id}" class="post-item">
      <div class="post-item__city">
          <p>${resto.city}</p>
      </div>
      <img class="lazyload post-item__thumbnail" width="100%" height="300px"
          data-src="${ENDPOINT.IMAGES.SMALL(resto.pictureId)}"
          alt="Restoran ${resto.name}">
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
              <span id="post-item__rating" class="number_rating">${resto.rating}</span>
          </div>
          <h1 class="post-item__title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>
          <p class="post-item__description">${resto.description}</p>
              <a href="#/detail/${resto.id}" class="post-item__readmore">Read more</a>
      </div>
  </article>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <article class="post-item">
          <img class="post-item__thumbnail" width="100%" height="350px" src="./images/placeholder-large.jpg" alt="skeleton">
          <div class="post-item__content">
              <h1 class="skeleton">Lorem ipsum dolor sit.</h1>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          </div>
      </article>
  `;
  }
  return template;
};

export {
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSkeletonRestaurantTemplate,
  createRestaurantItemTemplate,
};
