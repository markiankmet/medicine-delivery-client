import {useEffect, useState} from "react";
import {medicineService} from "../../services/index.js";
import {Medicine} from "./Medicine.jsx";

const Medicines = () => {
  const [medicines, setMedicines] = useState([])

  useEffect(() => {
    medicineService.getAll().then(res => res.data).then(data => setMedicines(data))
  }, [])

  return (

    <div>
      fads
      {
        medicines.map(medicine => <Medicine key={medicine._id} medicine={medicine} />)
      }
    </div>
  )
}

export {
  Medicines
}
