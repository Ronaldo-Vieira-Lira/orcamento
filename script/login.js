document.getElementById("usuario").addEventListener("blur", (e) => {
    window.vLogin = e.target.value
    console.log(window.vLogin)
})
document.getElementById("senha").addEventListener("blur", (e) => {
    window.vPsw = e.target.value
    console.log(window.vPsw)
})

var mocadoUs = "bss"
var mocadoPss = "123"

document.getElementById("btn").addEventListener("click", () => {
    if(window.vLogin === mocadoUs && window.vPsw === mocadoPss) {
    }
    window.location.href = "../router/principal.html"
    
})

