const select = document.getElementById("filtro");
const busqueda = document.getElementById("busqueda");
const casas = document.getElementsByClassName("casa");
const terrenos = document.getElementsByClassName("terreno");
const departamentos = document.getElementsByClassName("departamento");
const campos = document.getElementsByClassName("campo");
const cartas = document.getElementsByClassName("carta");
const locales = document.getElementsByClassName("local");




select.addEventListener("change", function () {
    switch (select.value) {
        case "casa":
            for (const iterator of cartas) {
                if (!iterator.classList.contains("casa"))
                    iterator.classList.add("ocultar")
                else
                    iterator.classList.remove("ocultar")
            }
            break;
        case "terreno":
            for (const iterator of cartas) {
                if (!iterator.classList.contains("terreno"))
                    iterator.classList.add("ocultar")
                else
                    iterator.classList.remove("ocultar")
            }
            break;
        case "departamento":
            for (const iterator of cartas) {
                if (!iterator.classList.contains("departamento"))
                    iterator.classList.add("ocultar")
                else
                    iterator.classList.remove("ocultar")
            }
            break;
        case "campo":
            for (const iterator of cartas) {
                if (!iterator.classList.contains("campo"))
                    iterator.classList.add("ocultar")
                else
                    iterator.classList.remove("ocultar")
            }
            break;
        case "local":
            for (const iterator of cartas) {
                if (!iterator.classList.contains("local"))
                    iterator.classList.add("ocultar")
                else
                    iterator.classList.remove("ocultar")
            }
            break;
        case "todos":
            for (const iterator of cartas) {
                iterator.classList.remove("ocultar")
            }

    }

})