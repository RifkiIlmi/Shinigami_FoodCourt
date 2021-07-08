class ReviewItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: 'open' });
  }

  set review(review) {
    this._review = review;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <style>
      *{
        box-sizing:border-box;  
        outline:none;
      }
      body {
        color: #7f8c8d;
        font-size: 16px;
        font-weight: 300;
        height: 100%;
        padding: 20px 0;
      }
      .card {
        display: block;
        position: relative;
      }
      
      .card .card-info .name {
        font-size: 16px;
        font-weight: 100;
        vertical-align: top;
        position: relative;
        margin-top: 0;
      }
      .card .card-info hr {
        margin: 0 0 15px;
      }
    </style>
        <div class="card">                
            <div class="card-info">
            <hr>
            <div class="content">
                <p>${this._review.name} - <strong>${this._review.date}</strong></p> 
                <div class="name">
                    <p>${this._review.review}</p>
                </div>
            </div>
            </div>
        </div>
      `;
  }
}

customElements.define('review-item', ReviewItem);
