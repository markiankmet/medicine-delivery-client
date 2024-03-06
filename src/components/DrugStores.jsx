import {useEffect, useState} from "react";
import {drugStoreService} from "../../services/index.js";
import {DrugStore} from "./DrugStore.jsx";

const DrugStores = () => {
  const [drugStores, setDrugStores] = useState([])

  useEffect(() => {
    drugStoreService.getAll().then(res => res.data).then(data => setDrugStores(data))
  }, [])

  return (
    <div>
      {
        drugStores.map(store => <DrugStore key={store._id} title={store.title} />)
      }
    </div>
  )
}

export {
  DrugStores
}
