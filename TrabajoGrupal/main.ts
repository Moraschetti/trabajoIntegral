import { Pregunta } from "./pregunta";
import { Examen } from "./examen";
import { Alumno } from "./alumno";
import { RendicionDeExamen } from "./rendicionExamen";

let matPreg1=['A','B','C','D'];
let matPreg2=['A','B','C','D'];
let matPreg3=['A','B','C','D'];

let pregunta1:Pregunta=new Pregunta('Cual es la raiz cubica de 27?',matPreg1,1,2);
let pregunta2:Pregunta=new Pregunta('Cual es la raiz cuadrada de 81?',matPreg2,3,2);
let pregunta3:Pregunta=new Pregunta('Cuanto es 12 a la enesima potencia?',matPreg3,2,2);
let preguntasMatematica:Pregunta[]=[pregunta1,pregunta2,pregunta3];

let histPreg1=['A','B','C','D'];
let histPreg2=['A','B','C','D'];
let histPreg3=['A','B','C','D'];

let pregunta4: Pregunta = new Pregunta("En que pais se produce la revolucion industrial?",histPreg1,2,3);
let pregunta5: Pregunta = new Pregunta("En que año se produce la revolucion francesa?",histPreg2,3,3);
let pregunta6: Pregunta = new Pregunta("A que epoca se denomina el Medioevo?", histPreg3,2,4);
let preguntasHistoria: Pregunta[]=[pregunta4,pregunta5,pregunta6];

let examenMatematica: Examen = new Examen(preguntasMatematica,"Matematica",6);
let examenHistoria: Examen = new Examen(preguntasHistoria,"Historia",6);

let rtasHistoria = [];
let rtasMatematica = [];

let rendicionExamenMatematica:RendicionDeExamen=new RendicionDeExamen(examenMatematica,rtasMatematica);
let rendicionExamenHistoria:RendicionDeExamen=new RendicionDeExamen(examenHistoria,rtasHistoria);

let examenesRendidos: RendicionDeExamen[] = [rendicionExamenMatematica,rendicionExamenHistoria];

let estudiante: Alumno = new Alumno(examenesRendidos,"Matias",35577812);

let respuestasExamenHistoria=["A","A","C"];
let respuestasExamenMatematica=["B","C","B"];

estudiante.rendirExamen(examenHistoria,rtasHistoria);
estudiante.rendirExamen(examenMatematica,rtasMatematica);


rendicionExamenMatematica.estaAprobado();
rendicionExamenHistoria.estaAprobado();