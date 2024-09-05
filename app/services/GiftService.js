
import { api } from "./AxiosService.js"
import { AppState } from "../AppState.js"
import { Gift } from "../models/Gift.js"
class GiftService {
  async findGift(giftId) {
    const openedGift = AppState.gifts.find(Gift => Gift.id == giftId)
    console.log(openedGift)

    const giftData = { opened: !giftId.opened }

    const response = await api.put(`api/gifts/${giftId}`, giftData)
    console.log(response.data);

  }

  async getGifts() {
    const response = await api.get('api/gifts')
    console.log(response.data)
    const gifts = response.data.map(giftsData => new Gift(giftsData))
    AppState.gifts = gifts

  }

}


export const giftService = new GiftService()