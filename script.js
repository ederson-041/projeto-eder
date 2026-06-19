// Funções de alerta chamadas pelos botões no HTML
function mostrarMensagem() {
    alert("Bem-vindo ao futuro do agronegócio! A sustentabilidade começa com pequenas ações integradas à tecnologia.");
}

function acaoBotao(pratica) {
    alert("Você clicou para saber mais sobre: " + pratica + ". No futuro, você pode criar uma página inteira sobre isso!");
}

// Lógica da Calculadora que roda assim que o site carrega
document.addEventListener('DOMContentLoaded', function() {
    
    const inputHectares = document.getElementById('hectares');
    const btnCalcular = document.getElementById('btn-calcular');
    const textoResultado = document.getElementById('resultado-calculo');

    btnCalcular.addEventListener('click', function() {
        const hectares = parseFloat(inputHectares.value);

        if (isNaN(hectares) || hectares <= 0) {
            textoResultado.textContent = "Por favor, insira um valor válido de hectares.";
            textoResultado.style.color = "red";
            return;
        }

        // Simulação: Economia de 200.000 litros por hectare/ano
        const economiaLitros = hectares * 200000;
        const economiaFormatada = economiaLitros.toLocaleString('pt-BR');

        textoResultado.style.color = "#2E7D32"; 
        textoResultado.textContent = `🌱 Fantástico! Em uma área de ${hectares} hectares, o uso de tecnologias sustentáveis pode economizar aproximadamente ${economiaFormatada} litros de água por ano!`;
    });

});
