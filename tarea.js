let numeroIf = 0
if(numeroIf > 0 || numeroIf<0 || numeroIf==0){
    console.log("Es correcto")
}
let numeroWhile = 0
while (numeroWhile < 3 ) {
    numeroWhile = numeroWhile + 1
    console.log(numeroWhile)
}
numeroWhile2 = 0
do{
    numeroWhile2 = numeroWhile + 3
    console.log(numeroWhile)
} while(numeroWhile < 3)

for(let numeroFor = 0; numeroFor<=3; numeroFor++){
    console.log(numeroFor)
}
let estacion = "verano"
switch (estacion) {
    case "verano":
        console.log("La estacion es verano")
        break;
    case "invierno":
        console.log("La estacion es invierno")
        break
    case "otoño":
        console.log("La estacion es otoño")
        break
    case "Primavera":
        console.log("La estacion es primavera")
        break
    default: console.log(estacion)
        break;
}