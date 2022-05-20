const OpcionesTotales = 20;
let numeroASaltear = 0;

for (let i = 1; i <= OpcionesTotales; i++) {
        document.querySelector("#checkboxes").innerHTML +=
                `
        <label for="${i}"><input type="checkbox" name="" id="${i}">${i}</label>
        <br>
        `
}





function saltear() {

        numeroASaltear = document.querySelector("#numeroASaltar")

        for (let i = 0; i <= OpcionesTotales; i++) {

                if ((i % numeroASaltear) == 0) {
                        
                }
        }
}