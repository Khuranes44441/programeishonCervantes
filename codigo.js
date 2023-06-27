let matricula = [];
let nombre = [];
let apellido = [];
let materia = [];
let cicloLectivo = [];
let notaParcial1 = [];
let notaParcial2 = [];
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
    let promGen = (np1 + np2) / 2;

    matricula.push(m);
    nombre.push(n);
    apellido.push(a);
    materia.push(e);
    cicloLectivo.push(parseInt(c));
    notaParcial1.push(np1);
    notaParcial2.push(np2);
    promedioGeneral.push(promGen);
  }

  console.log(nombre, apellido, matricula, materia, cicloLectivo, notaParcial1, notaParcial2, promedioGeneral);
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
        <td>${promedioGeneral[i]}</td>
      </tr>
    `;
  }
}

function CalcularEstadisticas() {
  let cont = nombre.length;
  let acumNota1 = 0;
  let acumNota2 = 0;
  let promedioNota1 = 0;
  let promedioNota2 = 0;
  let materiasDesaprobadas = {};
  let materiasAprobadas = [];
  let materiasPromocionadas = [];

  for (let i = 0; i < nombre.length; i++) {
    acumNota1 += notaParcial1[i];
    acumNota2 += notaParcial2[i];

    if (notaParcial1[i] < 6 || notaParcial2[i] < 6) {
      if (materiasDesaprobadas[materia[i]]) {
        materiasDesaprobadas[materia[i]]++;
      } else {
        materiasDesaprobadas[materia[i]] = 1;
      }
    } else if (notaParcial1[i] >= 8 && notaParcial2[i] >= 8) {
      if (!materiasPromocionadas.includes(materia[i])) {
        materiasPromocionadas.push(materia[i]);
      }
    } else {
      if (!materiasAprobadas.includes(materia[i])) {
        materiasAprobadas.push(materia[i]);
      }
    }
  }

  promedioNota1 = acumNota1 / cont;
  promedioNota2 = acumNota2 / cont;

  const estadisticasElement = document.getElementById("estadisticas");
  estadisticasElement.innerHTML = `Promedio Nota 1: ${promedioNota1.toFixed(
    2
  )}<br>Promedio Nota 2: ${promedioNota2.toFixed(2)}<br><br>`;

  estadisticasElement.innerHTML += "Materias desaprobadas:<br>";
  for (let materiaDesaprobada in materiasDesaprobadas) {
    estadisticasElement.innerHTML += `${materiasDesaprobadas[materiaDesaprobada]} alumno(s) desaprobó ${materiaDesaprobada}<br>`;
  }

  estadisticasElement.innerHTML += `<br>Materias aprobadas: ${materiasAprobadas.join(", ")}<br>`;
  estadisticasElement.innerHTML += `Materias promocionadas: ${materiasPromocionadas.join(", ")}`;
}





