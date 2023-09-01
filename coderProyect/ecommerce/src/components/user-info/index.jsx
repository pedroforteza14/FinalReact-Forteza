import React from 'react'

const emailValidator = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

const UserInfo = ({ carrito, createNewOrder}) => {
  const [nombre, setNombre] = React.useState('');
  const [apellido, setApellido] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [telefono, setTelefono] = React.useState('');

  const handleSubmit = () => {
    if (!isFormValid() || !createNewOrder || !carrito.length) {
      return;
    }

    const order = {
      comprador: {
        nombre,
        apellido,
        email,
        telefono
      },
      items: carrito,
      createdAt: new Date(),
      total: carrito.reduce((acc, item) => acc + item.pricePerUnit * item.quantity, 0)
    }
    createNewOrder(order);
  }

  const isFormValid = () => {
    return Boolean(nombre.length) && Boolean(apellido.length) && emailValidator(email) && Boolean(telefono.length);
  }
  console.log(isFormValid());
  return (
    <div>
      <h3>User Info</h3>
      <div style={{ display: 'flex', justifyContent:'center', gap: 30 }}>
        <input type="text" placeholder="Nombre" value={nombre} onChange={(event) => setNombre(event.target.value)} />
        <input type="text" placeholder="Apellido" value={apellido} onChange={(event) => setApellido(event.target.value)}  />
        <input type="text" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}  />
        <input type="text" placeholder="Teléfono" value={telefono} onChange={(event) => setTelefono(event.target.value)}  />
      </div>
      <div>
        <button onClick={handleSubmit} disabled={!isFormValid()}>Finalizar compra</button>
      </div>
    </div>
  )
}

export default UserInfo;