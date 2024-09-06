export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url
    this.opened = data.opened
    this.profileIdsOpened = data.profileIdsOpened
  }

  get giftsHTMLTemplate() {
    return `
      <div class="col-md-4 mb-3">
        <div class="card h-100">
          <img onclick="app.GiftController.findGift('${this.id}')" class="card-img-top" src="${this.url}" alt="${this.tag}">
          <div class="card-body">
            <p class="card-text">${this.tag}</p>
          </div>
        </div>
      </div>
    `
  }
}



