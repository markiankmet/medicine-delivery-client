import {axiosMedicinesService} from "./axios.service.js";
import {urls} from "../src/constants/urls.js";

const medicineService = {
  getAll: () => axiosMedicinesService.get(urls.medicines)
}

export {
  medicineService
}