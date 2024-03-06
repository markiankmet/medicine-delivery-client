const CartSubmitButton = () => {
  const localCart = JSON.parse(localStorage.getItem("cart"));

  const handleSubmit = () => {
    document.getElementById("user-form").reset()
    const nameInput = document.getElementById("name").value()
    const emailInput = document.getElementById("email").value()
    const phoneInput = document.getElementById("phone").value()
    const addressInput = document.getElementById("address").value()

    console.log("Submitted")
    localStorage.setItem("cart", JSON.stringify([]))
  }

  return (
    <div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export {
  CartSubmitButton
}
