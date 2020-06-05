

////////////////////////////////////////
/////////// Zona ejercicio 1 ///////////
////////////////////////////////////////


function ejercicio01(email){
    email.trim();
    if (email == "yunior.developer@hotmail.com" || email == "miguel@mrbug.es" || email =="imanol@mercadona.com"){
        return true;
    } else {
        return false;
    }
    
}



////////////////////////////////////////
//////// Final zona ejercicio 1 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 2 ///////////
////////////////////////////////////////


function ejercicio02(email){
    var matchesOfM = email.match(/m/gi);
    var mResult;

    if (matchesOfM !== null ){
        mResult = `Además contiene ${matchesOfM.length} letras M`;

    } else {

        mResult = "Además no contiene ninguna letra M"

    }
    
    return `El correo ${email} tiene ${email.length} caracteres y en mayúsculas se quedaría así ${email.toUpperCase()}. ${mResult}`
}



////////////////////////////////////////
//////// Final zona ejercicio 2 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 3 ///////////
////////////////////////////////////////


function ejercicio03(email){

    let startDomain = email.indexOf('@');

    if (startDomain !== -1 ){
        let domain = email.substring( startDomain + 1);
        let emailLength = email.length - domain.length - 1;
        let matchesOfNumbers = email.match(/[0-9]/g);
        let numbersStament; 
        if (matchesOfNumbers !== null){
            numbersStament = `Además, el correo contiene ${matchesOfNumbers.length} números`
        } else {
            numbersStament = "Además, el correo no contiene ningún número"
        }
        return `El correo ${email} pertenece al dominio ${domain} y tiene ${emailLength} caracteres sin contar el dominio ni el @. ${numbersStament}`;
    } 
    return "No se trata de un correo electronico";

}



////////////////////////////////////////
//////// Final zona ejercicio 3 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 4 ///////////
////////////////////////////////////////


function ejercicio04(user){
    var emailCreationMessage = "";
    var over18 = "";
    console.log(Number(user.edad))
    if (Number(user.edad) >= 18) {
        emailCreationMessage = `Por lo tanto, le he creado un usuario con el correo ${user.correo}`;
    } else {
        over18 = "no ";
    }

    return `El usuario ${user.nombre} ${over18}es mayor de edad ${emailCreationMessage}`;
}



////////////////////////////////////////
//////// Final zona ejercicio 4 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 5 ///////////
////////////////////////////////////////


function ejercicio05(user){
   
}



////////////////////////////////////////
//////// Final zona ejercicio 5 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 6 ///////////
////////////////////////////////////////


function ejercicio06(user){
    console.log(user);
}



////////////////////////////////////////
//////// Final zona ejercicio 6 ////////
////////////////////////////////////////

////////////////////////////////////////
/////////// Zona ejercicio 7 ///////////
////////////////////////////////////////


function ejercicio07(users){
    console.log(users);
}



////////////////////////////////////////
//////// Final zona ejercicio 7 ////////
////////////////////////////////////////
