//Este código es original de Abel Agra(https://github.com/jfrancisco4490)
//Usado por José Manuel Rodríguez(https://github.com/jmrodriguez90) como herramienta para realizar ejercicios de la asignatura de Cloud Computing 2015 - 2016

// Cargar módulo de _sqlite3_
var sqlite3 = require('sqlite3').verbose();

// Cargar archivo de base de datos con los datos de prueba
var db = new sqlite3.Database('../baseCalificarAsserts.db');

// Cargar libreria de funciones de calificación de empresas
var libCalif = require('./lib/CalificarEmpresas.js');

// Cargar modulo de aserciones
var assert = require('assert');

// Iniciar pruebas con aserciones

// Aserciones exitosas

// Prueba de registro de nueva empresa
var resultado1 = libCalif.crearEmpresa(db, 'EmpTest','EmpresaTest', 'DireccionTest', 'AreaTest');
assert.equal(resultado1, true, 'Creacion correcta de nueva empresa');

// Prueba de registro de nueva calificación
var resultado2 = libCalif.crearCalificacion(db, 'Emp1', 'Usr1', 3);
assert.equal(resultado2, true, 'Creacion correcta de nueva calificacion');

// Prueba de eliminación de valoración
var resultado3 = libCalif.eliminarCalificacion(db, 'Emp1', 'Usr1');
assert.equal(resultado3, true, 'Eliminacion correcta de calificacion');

console.log("Todas las pruebas con aserciones fueron superadas con exito!!!");
