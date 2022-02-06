import { ShopActionTypes } from './shop.types'

export const changeSelectedCollectionId = item => ({
  type: ShopActionTypes.CHANGE_PARAMS,
  payload: item,
})
