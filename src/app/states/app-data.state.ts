export enum DataStateEnum {
  "LOADED",
  "LOADING",
  "ERROR"
}

export interface AppDataState <T> {
  dataState? : DataStateEnum;
  data?: T;
  errorMessage? : string;
}

export enum ProductActionType {
  GET_ALL_PRODUCTS = "[Product] Get all products",
  GET_SELECTED_PRODUCT = "[Product] selected products",
  GET_AVAILABLE_PRODUCT = "[Product] available products",
  SEARCH_PRODUCT = "[Product] Get found products",
  CREATE_PRODUCT= "[Product] Create product",
  UPDATE_PRODUCT = "[Product] Update product",
  GET_ONE_PRODUCT = "[Product] get a product",
  SELECT_PRODUCT = "[Product] Selected product",
  DELETE_PRODUCT = "[Product] Delete product",

}

export interface ActionEvent {

  type : ProductActionType;
  payload? : any;

}


