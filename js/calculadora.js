document.getElementById("btnCalcular").addEventListener("click", function(event){
    event.preventDefault(); // Evita que el formulario se envíe

    let peso = document.getElementById("textPeso").value;
    let altura = document.getElementById("textAltura").value;
    let imc = peso / (altura * altura);
    let porcentaje = (imc / 40) * 100; // Asume un IMC máximo de 40 para llenar la barra
    porcentaje = porcentaje > 100 ? 100 : porcentaje; // Limita al 100%

    // Actualiza el ancho de la barra, su color y muestra el IMC dentro de ella
    let progressBar = document.getElementById("progressBar");
    progressBar.style.width = porcentaje + "%";
    progressBar.style.backgroundColor = getColorForIMC(imc);
    progressBar.innerText = "IMC: " + imc.toFixed(2); // Muestra el texto dentro de la barra
});

function getColorForIMC(imc) {
    if(imc < 18.5) return "blue"; // Bajo peso
    if(imc >= 18.5 && imc < 25) return "green"; // Normal
    if(imc >= 25 && imc < 30) return "orange"; // Sobrepeso
    if(imc >= 30 && imc < 35) return "red"; // Obesidad grado 1
    if(imc >= 35 && imc < 40) return "pink"; // Obesidad grado 2
    return "purple"; // Obesidad grado 3 o mayor
}
