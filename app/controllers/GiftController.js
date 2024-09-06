import { AppState } from "../AppState.js"
import { giftService } from "../services/GiftService.js"
import { Pop } from "../utils/Pop.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"

export class GiftController {
  constructor() {
    console.log('gift controller is loaded!')
    AppState.on('user', this.getGifts)
    AppState.on('gifts', this.drawGifts)
  }

  async getGifts() {
    try {
      await giftService.getGifts()
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  drawGifts() {
    const gifts = AppState.gifts
    let giftsHTML = ''
    gifts.forEach(gift => giftsHTML += gift.giftsHTMLTemplate)
    setHTML('gifts-options', giftsHTML)
    console.log(giftsHTML)
  }

  async findGift(giftId) {
    try {
      await giftService.findGift(giftId)
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }

  async createGift(event) {
    try {
      event.preventDefault()
      const form = event.target
      const formData = getFormData(form)
      await giftService.createGift(formData)
      form.reset()
      Pop.success('Gift created successfully!')
    } catch (error) {
      Pop.error(error)
      console.error(error)
    }
  }
}