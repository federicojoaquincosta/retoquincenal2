const OPC_TOTALES = 20;
let numeroASaltear = 0;

for (let i = 1; i <= OPC_TOTALES; i++) {
        document.querySelector("#checkboxes").innerHTML +=
                `
        <div id="checkbox_${i}"><input type = "checkbox" value="${i}" >Opción ${i}</div>
        <br>
        ` ;
}


function saltear() {
        document.querySelector("#mensaje_error").innerHTML = ``;
        numeroASaltear = Number(document.querySelector("#numeroASaltear").value);


        for (let i = 1; i <= OPC_TOTALES; i++) {
                document.querySelector(`#checkbox_${i}`).innerHTML = `
             
            <input type = "checkbox" value="1" >Opción ${i}
        `;

        }

        if (numeroASaltear > 0 && numeroASaltear < 21) {
                for (i = numeroASaltear; i < 21; i += numeroASaltear) {


                        if (i >= 1 || i < 20) {
                                document.querySelector(`#checkbox_${i}`).innerHTML = `
                        <input type = "checkbox" value="1" checked >Opción ${i}
                        `;
                        }

                }
        }
        else {
                document.querySelector("#mensaje_error").innerHTML = `Ingresá un número del 1 al 20`;


        }
}


