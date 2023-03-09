let mensajeCosto = ""
const mensajeInicial = "Ingresa el número del producto a consultar"



function cotizarPrecios() {
    let seleccion = prompt(mensajeInicial)

    if (seleccion !== "1" && seleccion !== "2" && seleccion !== "3" && seleccion !== "4" && seleccion !== "5" && seleccion !== "6" && seleccion !== "7" && seleccion !== "8" && seleccion !== "9" && seleccion !== "10" && seleccion !== "11" && seleccion !== "12" )  {
        alert("🚫Debees ingresar un código válido, porfavor.🚫")
        return
    }  else {
        switch(seleccion) {
            case "1":
                mensajeCosto = "El collar vale $7300"
                break
            case "2":
                mensajeCosto = "El bolso vale $22550"
                break
            case "3":
                mensajeCosto = "Las perlas valen $5420"
                break
            case "4":
                mensajeCosto = "El collar vale $2320"
                break
            case "5":
                mensajeCosto = "Los zapatos valen $17300"
                break
            case "6":
                mensajeCosto = "El bolso vale $10200"
                break
            case "7":
                mensajeCosto = "Los zapatos valen $21600"
                break
            case "8":
                mensajeCosto = "El collar vale $6900"
                break
            case "9":
                mensajeCosto = "El collar vale $1300"
                break
            case "10":
                mensajeCosto = "La pulsera vale $3300"
                break
            case "11":
                mensajeCosto = "El collar vale $4100"
                break
            case "12":
                mensajeCosto = "El billuterí vale $8900"
                break
            default:
        }
        alert(mensajeCosto)
    }
    
    const respuesta = confirm("¿Desea conocer otro precio?")

    while(respuesta) {
        cotizarPrecios()
    }
}