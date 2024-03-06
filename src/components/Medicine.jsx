const Medicine = ({medicine}) => {

  const addToCart = () => {
    const localStorageData = localStorage.getItem("cart")
    const buyMedicine = {
      medicine: {...medicine},
      quantity: 1
    }
    if (localStorageData) {
      const cart = JSON.parse(localStorageData)
      const medicineExists = cart.find(med => med.medicine._id === medicine._id)
      if (medicineExists) {
        return
      }
      cart.push(buyMedicine)
      localStorage.setItem("cart", JSON.stringify(cart))
    } else {
      localStorage.setItem("cart", JSON.stringify([buyMedicine]))
    }
  }

  return (
    <div>
      <div>
        <p>{medicine.title}</p>
        <p>{medicine.price}</p>
      </div>
      <button onClick={addToCart}>add to Cart</button>
    </div>
  )
}

export {
  Medicine
}
