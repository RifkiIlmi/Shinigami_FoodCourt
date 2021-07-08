/* eslint-disable no-undef */
const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

const condition = 'Tidak ada Restaurant untuk ditampilkan';
const moreDetailLink = { shadow: ['card-show:nth-child(1)', '.post-item', '.post-item__content', '.post-item__title', 'a'] };
const formReview = { shadow: ['detail-show', 'add-review', '.card', '.card-input'] };
const inputName = { shadow: ['detail-show', 'add-review', '.card', '.card-input', 'input#name'] };
const inputReview = { shadow: ['detail-show', 'add-review', '.card', '.card-input', 'input#review'] };
const reviewSubmitBtn = { shadow: ['detail-show', 'add-review', '.card', '.card-input', 'button'] };
const latestReview = { shadow: ['detail-show', 'review-item:last-child', '.name', 'p'] };

Scenario('print title of the page in console', async ({ I }) => {
  I.amOnPage('/');
  I.wait(2);
  const title = await I.grabTitle();
  console.log(`Title was:${title}`);
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#posts');
  I.see(condition, '#posts');
});

Scenario('liking one movie', async ({ I }) => {
  I.see(condition, '#posts');

  I.amOnPage('/');
  // pause();

  I.seeElement(moreDetailLink);
  const firstResto = locate(moreDetailLink);
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement({ shadow: ['card-show:nth-child(1)', '.post-item'] });

  const likedRestoTitle = await I.grabTextFrom(moreDetailLink);

  assert.strictEqual(firstRestoTitle, likedRestoTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see(condition, '#posts');

  I.amOnPage('/');
  // pause();

  I.seeElement(moreDetailLink);
  const firstResto = locate(moreDetailLink);
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement({ shadow: ['card-show:nth-child(1)', '.post-item'] });

  const likedRestoTitle = await I.grabTextFrom(moreDetailLink);

  assert.strictEqual(firstRestoTitle, likedRestoTitle);

  I.click(moreDetailLink);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#posts');
  const secondCondition = await I.grabTextFrom('#posts');
  // pause();

  assert.strictEqual(secondCondition, condition);
});

Scenario('Customer review', async ({ I }) => {
  I.see(condition, '#posts');

  I.amOnPage('/');
  I.seeElement(moreDetailLink);
  I.click(moreDetailLink);

  I.seeElement(formReview);

  const myReview = 'Hooray';
  I.fillField(inputName, 'EagleSlow');
  I.fillField(inputReview, myReview);
  // pause();

  I.click(reviewSubmitBtn);

  I.wait(5);

  I.refreshPage();
  I.refreshPage();

  I.seeElement(latestReview);
  const lastReview = locate(latestReview);
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(myReview, textLastReview);
});
