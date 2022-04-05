import { CoinActionType, ModifyDetail, MoneyActionType, ProductActionType, Product } from '../abstracts/interfaces';

export const createAction = (type: string, detail?: Product | ModifyDetail | string | number) => ({
  type,
  detail,
});

export const PRODUCT_ACTION: ProductActionType = {
  ADD: 'product-add',
  MODIFY: 'product-modify',
  DELETE: 'product-delete',
  PURCHASE: 'product-purchase',
};

export const COIN_ACTION: CoinActionType = {
  CHARGE: 'charge',
};

export const MONEY_ACTION: MoneyActionType = {
  INPUT: 'input',
};
