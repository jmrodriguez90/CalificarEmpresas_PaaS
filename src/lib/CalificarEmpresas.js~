//Este código es original de Abel Agra(https://github.com/jfrancisco4490)
//Usado con como herramienta para realizar ejercicios de la asignatura de Cloud Computing 2015 - 2016

module.exports = {

	// Permite el registro de una nueva empresa o institución
	
	crearEmpresa : function(in_db, in_id,in_nombre,in_direc,in_area){
		in_db.run("INSERT INTO EMPRESA(identificador, nombre, direccion, area) VALUES ('"+in_id+"','"+in_nombre+"','"+in_direc+"','"+in_area+"')", function(err){
		
			if(err){
				// Mostrar Error Completo
				console.log("[ERR] Informacion completa del Error:");
				console.log("   [SYS] " + err.message);
				console.log("");
				return false;
			}
		});
		
		return true;
	},

	// Ordenar las empresas registradas según su valoración o calificaciones promedio.
	
	ranking : function(in_db){
	
		console.log("[RES] Ranking de Empresas: ");
		in_db.each("SELECT E.identificador AS identificador, E.nombre AS nombre, E.direccion AS direccion, E.area AS area, AVG(C.valor) media FROM EMPRESA E, CALIFICACION C WHERE E.identificador = C.identificador GROUP BY C.identificador ORDER BY media DESC", function(err,row){
		
			console.log("      [RES] Id: '"+row.identificador+"', Nombre: '"+row.nombre+"', Direccion: '"+row.direccion+"', Area: '"+row.area+"', Media: "+row.media);
			
		});
		console.log("");
	},

	
	listarCalificaciones : function(in_db, in_id){
		in_db.each("SELECT usuario AS usuario, valor AS calificacion FROM CALIFICACION WHERE identificador = '" + in_id +"' ORDER BY usuario", function(err, row){
		
			console.log("[RES] Empresa: '" + in_id);
			console.log("[RES] Usuario: '" + row.usuario + "' - Calificacion: " + row.calificacion);
		
		});
		
		console.log("");
	},

	// Registrar nueva calificacion o valoración de un usuario (estudiante) a una empresa
	
	crearCalificacion : function(in_db, in_id, in_usr, in_valor){
 
		in_db.run("INSERT INTO CALIFICACION(identificador, usuario, valor) VALUES ('"+in_id+"','"+in_usr+"','"+in_valor+"')", function(err) {

			// Verificar si el alumno ya ha dejado calificacion para dicha empresa				
			if(err){
				if(err.message.indexOf("SQLITE_CONSTRAINT: UNIQUE") > -1 &&
				   err.message.indexOf("CALIFICACION.usuario, CALIFICACION.identificador") > -1){
					
					// Mostrar Error Personalizado
					console.log("[ERR] El usuario '"+in_usr+"' ya ha registrado una calificacion para la empresa '"+in_id+"'");
				}
				
				// Mostrar Error Completo
				console.log("[ERR] Informacion completa del Error:");
				console.log("   [SYS] " + err.message);
				console.log("");
				
				return false;
			}
		});
		
		return true;
	},

	// Eliminar calificación particular asociada a una empresa o institución
	
	eliminarCalificacion : function(in_db, in_id, in_usr){
		in_db.run("DELETE FROM CALIFICACION WHERE identificador = '"+ in_id + "' AND usuario = '" + in_usr + "'");
		
		return true;
	}
};
