eventListeners();

function eventListeners() {
  //Cuando se envia el formulario
  document.getElementById("formulario").addEventListener("submit", formulario);
  //contenido cargado
  document.addEventListener("DOMContentLoaded", localStoragelisto);
}

function formulario(e) {
  //Prevenimos el envio del formulario
  e.preventDefault();

  const name = document.getElementById("name").value;
  const lastName = document.getElementById("lastName").value;
  const identification = document.getElementById("identification").value;
  const nPhone = document.getElementById("nPhone").value;
  const nCelphone = document.getElementById("nCelphone").value;
  const country = document.getElementById("country").value;
  const departament = document.getElementById("departament").value;
  const city = document.getElementById("city").value;
  const neighborhood = document.getElementById("neighborhood").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const levelOS = document.getElementById("levelOS").value;
  const profession = document.getElementById("profession").value;
  const stratum = document.getElementById("stratum").value;
  const dateOB = document.getElementById("dateOB").value;
  const maritalS = document.getElementById("maritalS").value;
  const tipo = document.querySelector('input[name="tipo"]:checked').value;

  const dato = {
    name,
    lastName,
    identification,
    nPhone,
    nCelphone,
    country,
    departament,
    city,
    neighborhood,
    address,
    email,
    levelOS,
    profession,
    stratum,
    dateOB,
    maritalS,
    tipo
  };

  agregarDatosLocalStorage(dato);
  localStoragelisto();
}

function agregarDatosLocalStorage(dato) {
  //obtengo los datos del localstore
  const datos = obtenerLocalStorage();
  //añado el email al array
  datos.push(dato);
  //convertimos el array a string
  localStorage.setItem("datos", JSON.stringify(datos));
}

//Comprobar que haya elementos en el localStorage
function obtenerLocalStorage() {
  let datos;
  //Revisamos los valores del localstorage
  if (localStorage.getItem("datos") === null) {
    datos = [];
  } else {
    //Convertimos el texto a un array
    datos = JSON.parse(localStorage.getItem("datos"));
  }
  return datos;
}

function localStoragelisto() {
  const datos = obtenerLocalStorage();
  const dataList = document.getElementById("dataList");

  dataList.innerHTML = "";
  datos.forEach((dato) => {
    dataList.innerHTML += `
        <tr>
          <td class="mr-2 ml-2 p-2 text-center">${dato.name}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.lastName}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.identification}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.nPhone}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.nCelphone}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.country}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.departament}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.city}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.neighborhood}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.address}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.email}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.levelOS}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.profession}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.stratum}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.dateOB}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.maritalS}</th>
          <td class="mr-2 ml-2 p-2 text-center">${dato.tipo}</th>
        </tr>`;
  });
}
