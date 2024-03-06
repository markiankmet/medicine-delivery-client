const baseURL = "http://localhost:8082/api"

const drugStores = "/drug-stores"
const medicines = "/medicines"

const urls = {
  drugStores: baseURL + drugStores,

  medicines: baseURL + medicines
}

export {
  baseURL,
  urls
}