import { useState } from "react";

export function Portfolio() {
    const [count, setCount] = useState(0);
    return (
    <>
        <h1>Portfólio</h1>
        <p>Este é o meu portfólio, onde apresento meus projetos e trabalhos realizados ao longo da minha trajetória acadêmica e profissional.</p>

        <h2>Projetos Acadêmicos</h2>

        <div className="lista-projetos">
        {/* CARD PACIP */}
        <div className="card-projeto">
            <h3>PacIP</h3>
            <img src="imgComum.png" alt="PacIP" className="img-projeto" />
            <p>Projeto desenvolvido para a disciplina de Introdução à Programação (2026.1). O PacIP é uma releitura do clássico jogo Pac-Man, construído inteiramente em Python utilizando a biblioteca Pygame.</p>
            <p><strong>Tecnologias:</strong> Python, Pygame</p>
            <a href="https://github.com/ericsalmeida/projetoIP" target="_blank" rel="noopener noreferrer">Repositório GitHub</a>
        </div>

        {/* CARD SPOT */}
        <div className="card-projeto">
            <h3>SPOT</h3>
            <img src="Spot.png" alt="SPOT" className="img-projeto" />
            <p>Projeto desenvolvido para a disciplina de Concepção de Artefatos Digitais (2026.1). O SPOT é um sistema voltado para o monitoramento de empresas ativas e inativas, atuando como uma ferramenta facilitadora para a abertura de novos negócios e empreendimentos na cidade do Recife.</p>
            
            <p>Tem o obejtivo de facilitar a análise de empresas ativas e inativas e auxiliar
            na identificação de oportunidades para abertura de novos
            negócios e empreendimentos em Recife.
            </p>
            <p><strong>Tecnologias:</strong> Python, Análise de Dados, Vercel</p>
        </div>
        </div>
    </>
    )
}