// Banco de dados de dicas sobre sustentabilidade no Agro
const dicasSustentaveis = [
    "Rotação de culturas: Alternar as famílias de plantas cultivadas ajuda a manter o solo rico em nutrientes e quebra o ciclo de pragas.",
    "Uso consciente da água: A adoção de sistemas de irrigação inteligente, como o gotejamento, pode reduzir o desperdício de água em até 50%.",
    "Controle biológico: Utilizar predadores naturais das pragas diminui drasticamente a necessidade de defensivos químicos prejudiciais ao solo.",
    "Integração Lavoura-Pecuária-Floresta (ILPF): Esse sistema combina árvores, pasto e plantio, recuperando áreas degradadas e zerando a emissão de carbono.",
    "Energia limpa no campo: A instalação de painéis solares e biodigestores nas fazendas torna a produção autossuficiente e ecológica.",
    "Plantio Direto: Evitar arar a terra e plantar sobre a palha da colheita anterior protege o solo contra a erosão e retém a umidade.",
    "Preservação de matas ciliares: Manter as florestas no entorno de rios e nascentes é vital para evitar o assoreamento e garantir água para o futuro."
];

// Função que sorteia e exibe a dica
function gerarDicaSustentavel() {
    // Sorteia um número aleatório baseado na quantidade de dicas
    const indiceAleatorio = Math.floor(Math.random() * dicasSustentaveis.length);
    const dicaEscolhida = dicasSustentaveis[indiceAleatorio];

    // Encontra o espaço na tela onde a dica vai aparecer
    const areaMensagem = document.getElementById('mensagem-agro');
    
    // Atualiza o texto na tela
    areaMensagem.innerHTML = `<strong>Prática Sustentável:</strong> ${dicaEscolhida}`;
    
    // Adiciona um estilo visual na mensagem pelo próprio JavaScript
    areaMensagem.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    areaMensagem.style.color = '#228B22'; // Verde escuro
    areaMensagem.style.padding = '15px';
    areaMensagem.style.marginTop = '20px';
    areaMensagem.style.borderRadius = '8px';
    areaMensagem.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
}

// Configura o botão quando a página terminar de carregar
document.addEventListener("DOMContentLoaded", () => {
    const botaoAgro = document.getElementById('botao-interativo');
    
    if (botaoAgro) {
        botaoAgro.addEventListener('click', (evento) => {
            evento.preventDefault(); // Evita que a página pisque/recarregue
            
            // Chama a função que gera a dica
            gerarDicaSustentavel();
            
            // Muda o texto do botão para incentivar o usuário a clicar de novo
            botaoAgro.textContent = "Descobrir Outra Prática 🌱";
        });
    }
});
