import { useState } from "react";

export function Home() {
    const [count, setCount] = useState(0);

    return (
        <>
            <img src="Eu.svg" alt="" />
            <h1>Thiago Silva França</h1>
            <p>Sistemas de Informação — 2º Período (CIn/UFPE). Sempre em busca de aprender coisas novas, encarar desafios em projetos do centro e me engajar em monitorias e atividades acadêmicas.</p>

            <h2>Interesses</h2>
            <ul>
                <li>Engenharia de Software</li>
                <li>Cibersegurança</li>
                <li>Engenharia de Dados</li>
            </ul>

            <h3>Contatos</h3>
            <p>Email: tsf3@cin.ufpe.br</p>
            <p>GitHub: <a href="https://github.com/MrTicos" target="_blank" rel="noopener noreferrer">https://github.com/MrTicos</a></p>

        </>
    )
}