import axios from "axios"

import {urls} from "../src/constants/urls.js"

const axiosDrugStoresService = axios.create({baseURL: urls.drugStores})
const axiosMedicinesService = axios.create({baseURL: urls.medicines})

export {
  axiosDrugStoresService,
  axiosMedicinesService
}