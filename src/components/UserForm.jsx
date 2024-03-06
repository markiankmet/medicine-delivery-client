const UserForm = () => {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" />
      <label htmlFor="phone" id="phone">Phone</label>
      <input type="tel" id="phone" name="phone" />
      <label htmlFor="address">Address</label>
      <input type="text" id="address" name="address" />
    </form>
  )
}

export {
  UserForm
}
