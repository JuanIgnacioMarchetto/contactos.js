const nombre = document.querySelector('.nombre')
const numero = document.querySelector('.numero')
const direccion = document.querySelector('.direccion')
const btnAgregar = document.querySelector('.btn-agregar')
const listado = document.querySelector('.listado')

const db = window.localStorage

btnAgregar.onclick = () => {
  let contacto = {
    id: Math.random(1, 100),
    nombre: nombre.value,
    numero: numero.value,
    direccion: direccion.value,
  }
  const contactoDiv = document.createElement('div')
  contactoDiv.classList.add('contactos')  
  contactoDiv.innerHTML = `
    <h3>${contacto.nombre}</h3>
    <p>${contacto.numero}</p>
    <p>${contacto.direccion}</p>
    <i class="fa-solid fa-ban icono"></i>` 
  listado.appendChild(contactoDiv)
    nombre.value = ''
  numero.value = ''
  direccion.value = ''
}
listado.addEventListener('click', (event) => {
  if (event.target.classList.contains('fa-ban')) {
    const contactoDiv = event.target.parentNode
    contactoDiv.remove()
  }
})
