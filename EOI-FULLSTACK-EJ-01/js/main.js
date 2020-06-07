

// Devuelve EL NOMBRE del mayor de los tres
function quienEsMayorDeLosTres(p1, p2, p3){
  let copyP1 = {name: p1.name, age: Number(p1.age)};
  let copyP2 = {name: p2.name, age: Number(p2.age)};
  let copyP3 = {name: p3.name, age: Number(p3.age)};

  if ((copyP1.age > copyP2.age) && (copyP1.age > copyP3.age)) {
    return  copyP1.name;
  }else if ((copyP2.age > copyP1.age) && (copyP2.age > copyP3.age)) {
    return  copyP2.name;
  }else if ((copyP3.age > copyP2.age) && (copyP3.age > copyP1.age)) {
    return  copyP3.name;    
  }else {
    return "ninguno, todos tienen la misma edad";
  }
}

// Devuelve en forma de boolean el resultado
// NOTA: las mayúsculas y minúsculas no se consideran distintas
function hayAlgunCorreoRepetido(p1, p2, p3){
  let emailP1 = p1.email.toLowerCase();
  let emailP2 = p2.email.toLowerCase();
  let emailP3 = p3.email.toLowerCase();
  if ((emailP1 === emailP2) || (emailP1 === emailP3) || (emailP2 === emailP3)){
    return true;
  }
}


// Pregunta al usuario por su edad y devuelve en boolean la respuesta
function elUsuarioEsMayorQueLosTres(p1, p2, p3){
  
  let userAge = prompt("Introduce tu edad");
  let AgeP1 = Number(p1.age);
  let AgeP2 = Number(p2.age);
  let AgeP3 = Number(p3.age);

  if  ((userAge > AgeP1) && (userAge > AgeP2) && (userAge > AgeP3)){
    return  true;
  } else {
    return false;
  }
} 

// Devuelve el número de los que tienen correo acabado en gmail.com
// RESTRICCIÓN: Resuélvelo usando los métodos .indexOf() ó .lastIndexOf()
// RESTRICCIÓN: Resuélvelo usando el método .search()
// RESTRICCIÓN: Resuélvelo usando los métodos .substring() ó substr()
// RESTRICCIÓN: Plantea otra forma de solucionarlo que no use ninguno de los métodos de arriba
// Deja descomentada solo una de las soluciones

function cuantosTienenCorreoDeGmailDotCom(p1, p2, p3){
  let emailList = [p1.email.trim(), p2.email.trim(), p3.email.trim()];
  let gmail = "@gmail.com";
  var numberOfEmails = 0;

  emailList.forEach ( function (email) {

    // Metodo .lastIndexOf()
    /* if ((email.lastIndexOf(gmail) + gmail.length )  ==  email.length){
        ++numberOfEmails;
    } */

    //Metodo .search()
    /* if ( email.search(/@gmail.com$/) !== -1 ){
        ++numberOfEmails;
    } */

    //Metodo .substr()
    /* if (email.substr(email.indexOf('@')) === gmail){
        ++numberOfEmails;
     } */

    //Metodo .slice()
    if (email.slice(-gmail.length) === gmail ){
      ++numberOfEmails;
    }
  });

  return numberOfEmails;
  
}