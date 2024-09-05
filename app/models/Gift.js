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
    <div class="card">
              <img onclick="app.GiftController.findGift('${this.id}')"  class="img-fluid" src="${this.url}" alt="">
              <p>${this.tag}</p>
            </div>
   `
  }


}


const data = {

  "tag": {
    "type": "String",
    "maxlength": 120
  },
  "url": {
    "type": "String",
    "required": true,
    "maxLength": 500
  },
  "opened": {
    "type": "Boolean",
    "default": false
  },
  "creatorId": {
    "type": "SchemaObjectId",
    "required": true,
    "ref": "Account"
  },
  "profileIdsOpened": [
    {
      "type": "SchemaObjectId",
      "ref": "Account"
    }
  ]
}
