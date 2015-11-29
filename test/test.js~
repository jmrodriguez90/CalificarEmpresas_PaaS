//Este código es original de Abel Agra(https://github.com/jfrancisco4490)
//Usado por José Manuel Rodríguez(https://github.com/jmrodriguez90) como herramienta para realizar ejercicios de la asignatura de Cloud Computing 2015 - 2016

var sqlite3 = require('sqlite3').verbose();

// Cargar archivo de base de datos con los datos de prueba
var db = new sqlite3.Database('./db/base.db');

// Cargar libreria de funciones de calificación de empresas
var libCalif = require('../src/lib/CalificarEmpresas.js');

// Cargar modulo de aserciones
var assert = require('assert');

// Grupo de pruebas sobre librería de calificación de empresas
describe('CalificacionEmpresa_Test', function(){

	// Verifica que se haya cargado bien la librería de valoración de empresas
	describe('Carga', function(){
		it('Cargando libreria...', function(){
			assert(libCalif, "Carga de Libreria Exitosa!!");
		});

	});

	// Prueba de registro de nueva empresa
	describe('Crear_Empresa', function(){
		it('Registrando Correctamente Empresa...', function(){
			var resultado1 = libCalif.crearEmpresa(db, 'EmpTest','EmpresaTest', 'DireccionTest', 'AreaTest');
			assert.equal(resultado1, true, 'Creacion correcta de nueva empresa');
		});
	});
	
	// Prueba de registro de nueva calificación de usuario a empresa
	describe('Registrar_Calificacion', function(){
		it('Registrando Correctamente Calificacion...', function(){
			var resultado2 = libCalif.crearCalificacion(db, 'Emp1', 'Usr1', 3);
			assert.equal(resultado2, true, 'Creacion correcta de nueva calificacion');
		});
	});
	
	// Prueba de eliminación de calificación o valoración de empresa
	describe('Eliminar_Calificacion', function(){
		it('Eliminando Correctamente Calificacion...', function(){
			var resultado3 = libCalif.eliminarCalificacion(db, 'Emp1', 'Usr1');
			assert.equal(resultado3, true, 'Eliminacion correcta de calificacion');
		});
	});
});
