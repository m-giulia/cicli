function creaBlocchi() {
    let contenitorePippo = document.getElementById("pippo");
    let numeroBlocchi = document.getElementById("inputBlocchi").value;
    let numero = 0;

    while (numero < numeroBlocchi) {
        
            let blocco = document.createElement("div");
            blocco.id = "blocco" + (numero + 1);
            blocco.className = "blocco ";
            numero++;
            let ultimoColore = contenitorePippo.lastChild.className;
             switch (ultimoColore) {                    
                case "blocco blocco-yellow":
                    blocco.className += "blocco-rosso";
                    break;
                case "blocco blocco-rosso":
                    blocco.className += "blocco-blu";
                    break;
                default:
                    blocco.className += "blocco-yellow";
                    break;
            }
            
            contenitorePippo.appendChild(blocco);
            /* switch (numero % 3) {
                case 0:
                    blocco.className += "blocco-blu";
                    break;
                case 1:
                    blocco.className += "blocco-rosso";
                    break;
                default :
                    blocco.className += "blocco-verde";
                    break;
            } */
            
            /* if (numero %3 == 0) {
                blocco.className += "blocco-verde";
            }
            else if (numero %2 == 0) {
                blocco.className += "blocco-rosso";
            }
            else {
                blocco.className += "blocco-blu";
            } */
        
    }
}