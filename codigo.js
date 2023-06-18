let matricula = [];
let nombre = [];
let apellido = [];
let materia = [];
let cicloLectivo = [];
let notaParcial1 = [];
let notaParcial2 = [];
let promedioGeneral = [];

let m;
let n;
let a;
let e;
let c;
let np1;
let np2;
let promGen;


Cargar()
Listar()

function Cargar() {

    for (let i = 0; i < 3; i++) {

        m = prompt("matricula");
        n = prompt("Nombre:");
        a = prompt("Apellido:");
        e = prompt("materia");
        c = prompt("ciclo lectivo");
        np1 = parseFloat(prompt("nota parcial 1"));
        np2 = parseFloat(prompt("nota parcial 2"));
        promGen = (np1 + np2) / 2;



        matricula[i] = m
        nombre[i] = n
        apellido[i] = a
        materia[i] = e
        cicloLectivo[i] = parseInt(c)
        notaParcial1[i] = parseInt(np1)
        notaParcial2[i] = parseInt(np2)
        promedioGeneral[i] = parseFloat(promGen)


    }

    console.log(nombre, apellido, matricula, materia, cicloLectivo, notaParcial1, notaParcial2, promedioGeneral)


}

totalAlumnos = e.length;

function Listar() {

    const _tbody = document.querySelector("tbody")

    for (let i = 0; i < nombre.length; i++) {

        _tbody.innerHTML += `   <tr>
                    
                            <td> ${matricula[i]} </td>
                            <td> ${nombre[i]}</td>
                            <td> ${apellido[i]}</td>
                            <td> ${materia[i]}</td>
                            <td> ${cicloLectivo[i]}   </td>
                            <td> ${notaParcial1[i]} </td>
                            <td> ${notaParcial2[i]}</td>
                            <td> ${promedioGeneral[i]}</td>
                        </tr>    `
    }



}/*

        function VerEstadistica() {

            cont = 0

            acumNota1 = 0
            acumNota2 = 0

            promEdad = 0
            PromSueldo = 0

            for (i = 0; i < nombre.length; i++) {


                cont++

                acumNota1 += notaParcial1[i]
                acumNota2 += notaParcial2[i]

                acum += sueldo[i]


            }


            promEdad = acumEdad / cont

            PromSueldo = acumSueldo / cont


            const _pEstadistica = document.getElementById("estadisticas")

            _pEstadistica.innerHTML = `Edades: Promedio: ${promEdad}  Acumulador: ${acumEdad} Contador: ${cont}
                                        <br><br>
                                        Sueldo: Promedio: ${PromSueldo}  Acumulador: ${acumSueldo} Contador: ${cont}
            `



        }*/


//for(i = 0; i <= matricula.length; i++){
//  alert(promGen[i])
//}




cantidadAlumnosMatematica = 0

for (let i = 0; i < materia.length; i++) {
    if (e == ("matematicas")) { cantidadAlumnosMatematica++ }

}


alert("estudian la carrera de matematica " + cantidadAlumnosMatematica + " alumnos")

if (e != "matematicas") {

    cantidadAlumnosNoMatematica = 0




    cantidadAlumnosNoMatematica =

        cantidadAlumnosNoMatematica++


    alert(cantidadAlumnosNoMatematica)



}



