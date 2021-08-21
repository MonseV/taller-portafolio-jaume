const $cv = document.querySelector('#cv');

$cv.addEventListener('click', handleCv)

function handleCv() {
  const cv = window.open('https://cvjaumeexample.com', '_blank')
  /* console.log('Le diste click al botón CV') */
}

const $form = document.querySelector('#formulario'); // Formulario
const $buttonMailto = document.querySelector('#dataForm'); // Email donde se enviara la info

$form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault(); /* cancelamos el refrech y el código sigue ejecutandose */
  const form = new FormData(this); /* almacenr y envia información de formularios */
  //console.log(form.get('name')); /* obtenemos el nombre del formulario */

  /* Agregamos los datos del formulario que tendra el email */
  $buttonMailto.setAttribute('href',
                            `mailto:monse.ame@gmail.com
                            ?subject=Nombre:${form.get('name')}  Correo:${form.get('email')}
                            &body=${form.get('message')}
                            `)

  $buttonMailto.click()
  this.reset(); // limpia los input del formulario
}