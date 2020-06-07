/*
  Ejercicio 1
  En la base de datos de nuestra empresa hay usuarios con correos acabados en "gmail.com". 
  Encuéntralos y descártalos, son un problema.
 */


let usuarios = [
  {usuario: 'JoseElMaquina', email: 'jose.el.maquina@gmail.com'},
  {usuario: 'PepeElCorrecto', email: 'pepe@corecto.com'},
  {usuario: 'JoseLuisDaBest', email: 'joseluis@dabest.com.eu'},
  {usuario: 'EsteEstaBien', email: 'este@bien.com'},
  {usuario: 'Elcarterista', email: 'elcarterista20@gmail.com'}
];

let resultado = usuarios.filter(usuario => usuario.email.search(/@gmail.com$/) == -1 );
console.log(resultado);


/*
  Ejercicio 2 
  Una empresa de robótica tiene diferentes modelos de procesadores y quiere mostrarlos en su web. Cada procesador tiene un atributo que indica la cantidad de operaciones por segundo y otro que indica la tasa de fallos en tanto por ciento. Elimina los que tengan un porcentaje de fallos mayor al 50% y obtén un array solo con los nombres de los modelos que sobrevivan 
*/

let procesadores = [
  {modelo: 'pentiumII', operacionesPorSegundo: 10500, tasaDeFallos: 15},
  {modelo: 'i7', operacionesPorSegundo: 20000, tasaDeFallos: 60},
  {modelo: '8086', operacionesPorSegundo: 30, tasaDeFallos: 26.3},
  {modelo: 'i3', operacionesPorSegundo: 11389, tasaDeFallos: 58.4},
  {modelo: 'i5', operacionesPorSegundo: 15000, tasaDeFallos: 10},
  {modelo: 'celeron', operacionesPorSegundo: 200, tasaDeFallos: 80}
]

resultado = procesadores.filter(procesador => procesador.tasaDeFallos <= 50)
console.log(resultado);
/* 
  Ejercicio 3
  En nuestra página de alojamientos, los usuarios valoran el sitio donde se han quedado dándole una puntuación del 1 al 10. El problema es que no sabemos la media de valoración de cada alojamiento. Crea un atributo "media" para cada alojamiento e incluye su valor. 
*/

let alojamientos = [
  {
      nombre: 'Bahía Feliz',
      comentarios: [
          {
              usuario: 'Franz Kartofen',
              comentario: 'Gut',
              valoracion: 6
          },
          {
              usuario: 'Ferdinando',
              comentario: 'Muy bueno',
              valoracion: 9
          },
          {
              usuario: 'Roberthino',
              comentario: 'Molto malo',
              valoracion: 3
          },    
      ]
  },
  {
      nombre: 'Nacho Sol',
      comentarios: [
          {
              usuario: 'Manolín',
              comentario: 'Estuvo chido',
              valoracion: 10
          },
          {
              usuario: 'Solete',
              comentario: 'Muy sucio',
              valoracion: 2
          }    
      ]
  }
  
]
function media (comentarios) {
  let sumaValoracion = 0;
  comentarios.forEach(comentario => sumaValoracion += Number(comentario.valoracion));
  return sumaValoracion / comentarios.length;
}

resultado = alojamientos.map ( alojamiento =>  {return {
                                                  nombre : alojamiento.nombre, 
                                                  comentarios : alojamiento.comentarios, 
                                                  media : media(alojamiento.comentarios)
                                                }});
