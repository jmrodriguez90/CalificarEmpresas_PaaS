//Este código es original de Abel Agra(https://github.com/jfrancisco4490)
//Usado por José Manuel Rodríguez(https://github.com/jmrodriguez90) como herramienta para realizar ejercicios de la asignatura de Cloud Computing 2015 - 2016

var sqlite3 = require('sqlite3').verbose();

// Cargar archivo de base de datos con los datos de prueba
var db = new sqlite3.Database('../base.db');

// Cargar libreria de funciones de calificación de empresas
var libCalif = require('./lib/CalificarEmpresas.js');

console.log("[INFO] Iniciando Ejecucion de Pruebas!!!");
console.log("");

// Realizar pruebas sobre posibles funciones de la libreria

// Pruebas sobre registro de nuevas empresas
console.log("[INFO] Prueba de Creacion de Empresa...");

libCalif.crearEmpresa(db, 'EmpTest','EmpresaTest', 'DireccionTest', 'AreaTest');

console.log("[INFO] Finalizada con exito!!!");
console.log("");

// Definir calificaciones de usuarios a empresas
console.log("[INFO] Prueba de Registro de calificaciones validas...");

libCalif.crearCalificacion(db, 'Emp1', 'Usr1', 3);
libCalif.crearCalificacion(db, 'Emp2', 'Usr1', 2);
libCalif.crearCalificacion(db, 'Emp3', 'Usr1', 5);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr1', 4);

libCalif.crearCalificacion(db, 'Emp1', 'Usr2', 1);
libCalif.crearCalificacion(db, 'Emp2', 'Usr2', 1);
libCalif.crearCalificacion(db, 'Emp3', 'Usr2', 2);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr2', 5);

libCalif.crearCalificacion(db, 'Emp1', 'Usr3', 2);
libCalif.crearCalificacion(db, 'Emp2', 'Usr3', 4);
libCalif.crearCalificacion(db, 'Emp3', 'Usr3', 5);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr3', 1);

libCalif.crearCalificacion(db, 'Emp1', 'UsrTest', 5);
libCalif.crearCalificacion(db, 'Emp2', 'UsrTest', 5);
libCalif.crearCalificacion(db, 'Emp3', 'UsrTest', 4);
libCalif.crearCalificacion(db, 'EmpTest', 'UsrTest', 3);

console.log("[INFO] Finalizada con exito!!!");
console.log("");

// Eliminar valoraciones registradas
console.log("[INFO] Prueba de Eliminacion de calificaciones...");

libCalif.eliminarCalificacion(db, 'EmpTest', 'UsrTest');

console.log("[INFO] Finalizada con exito!!!");
console.log("");

// Presentar listado de calificaciones registradas para cada empresa
console.log("[INFO] Prueba de Listado de calificaciones por empresa...");

libCalif.listarCalificaciones(db, 'Emp1');

libCalif.listarCalificaciones(db, 'Emp2');

libCalif.listarCalificaciones(db, 'Emp3');

libCalif.listarCalificaciones(db, 'EmpTest');

console.log("");

// Mostrar ránking actual de empresas (según el promedio de sus calificaciones)
console.log("[INFO] Prueba de Ranking de empresas...");

libCalif.ranking(db);

console.log("[INFO] Finalizada con exito!!!");
console.log("");

// Intentar registro de calificaciones duplicadas (un usuario intenta valorar 
// a una empresa a la cual ya había calificado previamente)
console.log("[INFO] Prueba de Registro de calificaciones duplicadas...");

libCalif.crearCalificacion(db, 'EmpTest', 'Usr1', 4);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr2', 5);
libCalif.crearCalificacion(db, 'EmpTest', 'Usr3', 1);
libCalif.crearCalificacion(db, 'EmpTest', 'UsrTest', 3);

console.log("[INFO] Finalizada con exito!!!");
console.log("");

db.close();

console.log("[INFO] Terminando Ejecucion de Pruebas");
