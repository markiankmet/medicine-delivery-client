import {urls} from "../src/constants/urls.js";
import {axiosDrugStoresService} from "./axios.service.js";

const drugStoreService = {
  getAll: () => axiosDrugStoresService.get(urls.drugStores)
}

export {
  drugStoreService
}