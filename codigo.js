let matricula = [];
let nombre = [];
let apellido = [];
let materia = [];
let cicloLectivo = [];
let notaParcial1 = [];
let notaParcial2 = [];
let notaTrabajoPractico = [];
let promedioGeneral = [];

Cargar();
Listar();
CalcularEstadisticas();

function Cargar() {
  for (let i = 0; i < 3; i++) {
    let m = prompt("Matricula:");
    let n = prompt("Nombre:");
    let a = prompt("Apellido:");
    let e = prompt("Materia:");
    let c = prompt("Ciclo lectivo:");
    let np1 = parseFloat(prompt("Nota parcial 1:"));
    let np2 = parseFloat(prompt("Nota parcial 2:"));
    let ntp = parseFloat(prompt("Nota trabajo practico:"));
    let promGen = (np1 + np2) / 2;

    matricula.push(m);
    nombre.push(n);
    apellido.push(a);
    materia.push(e);
    cicloLectivo.push(parseInt(c));
    notaParcial1.push(np1);
    notaParcial2.push(np2);
    notaTrabajoPractico.push(ntp);
    promedioGeneral.push(promGen);
  }

  console.log(nombre, apellido, matricula, materia, cicloLectivo, notaParcial1, notaParcial2, promedioGeneral);    // ... Tu función Cargar existente ...
}

function Listar() {
  const tbody = document.querySelector("tbody");

  for (let i = 0; i < nombre.length; i++) {
    tbody.innerHTML += `
        <tr>
          <td>${matricula[i]}</td>
          <td>${nombre[i]}</td>
          <td>${apellido[i]}</td>
          <td>${materia[i]}</td>
          <td>${cicloLectivo[i]}</td>
          <td>${notaParcial1[i]}</td>
          <td>${notaParcial2[i]}</td>
          <td>${notaTrabajoPractico[i]}</td>
          <td>${promedioGeneral[i]}</td>
        </tr>
      `;
  }// ... Tu función Listar existente ...
}


function CalcularCantidadAlumnosPorCiclo(ciclo) {
  let cantidadAlumnos = 0;
  for (let i = 0; i < cicloLectivo.length; i++) {
    if (cicloLectivo[i] === ciclo) {
      cantidadAlumnos++;
    }
  }
  const estadisticasElement = document.getElementById("estadisticas");
  estadisticasElement.innerHTML += `Cantidad de alumnos en el ciclo lectivo ${ciclo}: ${cantidadAlumnos}<br>`;
}


// Función para calcular la cantidad de alumnos por materia
function CalcularCantidadAlumnosPorMateria(nombreMateria) {
  let cantidadAlumnos = 0;
  for (let i = 0; i < materia.length; i++) {
    if (materia[i] === nombreMateria) {
      cantidadAlumnos++;
    }
  }
  return cantidadAlumnos;
}


// Función para calcular todas las estadísticas
function CalcularEstadisticas() {
  // ... Tlet cont = nombre.length;
  let materiasDesaprobadas = {};
  let materiasAprobadas = [];
  let materiasPromocionadas = [];

  for (let i = 0; i < nombre.length; i++) {
    if (notaParcial1[i] >= 4 && notaParcial2[i] >= 4) {
      if (promedioGeneral[i] >= 7) {
        if (!materiasPromocionadas.includes(materia[i])) {
          materiasPromocionadas.push(materia[i]);
        }
      } else {
        if (!materiasAprobadas.includes(materia[i])) {
          materiasAprobadas.push(materia[i]);
        }
      }
    } else {
      if (materiasDesaprobadas[materia[i]]) {
        materiasDesaprobadas[materia[i]]++;
      } else {
        materiasDesaprobadas[materia[i]] = 1;
      }
    }
  }

  const estadisticasElemento = document.getElementById("estadisticas");
  estadisticasElemento.innerHTML = "MATERIAS DESAPROBADAS: <br>";
  for (let materiaDesaprobada in materiasDesaprobadas) {
    estadisticasElemento.innerHTML += `${materiasDesaprobadas[materiaDesaprobada]} alumno(s) desaprobó ${materiaDesaprobada}<br>`;
  }

  estadisticasElemento.innerHTML += `MATERIAS APROBADAS: ${materiasAprobadas.join(", ")}<br>`;
  estadisticasElemento.innerHTML += `MATERIAS PROMOCIONADAS: ${materiasPromocionadas.join(", ")}<br>`;// ... Tu función CalcularEstadisticas existente ...

  // Obtener los ciclos únicos del arreglo cicloLectivo
  const ciclosUnicos = [...new Set(cicloLectivo)];

  // Calcular y mostrar la cantidad de alumnos por ciclo
  for (const ciclo of ciclosUnicos) {
    CalcularCantidadAlumnosPorCiclo(ciclo);
  }

  // Obtener las materias únicas del arreglo materia
  const materiasUnicas = [...new Set(materia)];

  // Calcular y mostrar la cantidad de alumnos por materia
  const estadisticasElement = document.getElementById("estadisticas");
  estadisticasElemento.innerHTML += "<br>Cantidad de alumnos por materia: <br>";
  for (const materiaUnica of materiasUnicas) {
    const cantidadAlumnosPorMateria = CalcularCantidadAlumnosPorMateria(materiaUnica);
    estadisticasElemento.innerHTML += `${cantidadAlumnosPorMateria} alumno(s) en la materia ${materiaUnica}<br>`;
  }
}

// Llamar a la función CalcularEstadisticas para que calcule todas las estadísticas
CalcularEstadisticas();




