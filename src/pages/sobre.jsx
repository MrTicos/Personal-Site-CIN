import { useState } from "react";

export function Sobre() {
    const [count, setCount] = useState(0);
    return (
        <>  
            <h1>Sobre Mim</h1>
            <p>Este é o meu perfil, onde apresento minha trajetória acadêmica e profissional.</p>

            <h2>Trajetória Acadêmica</h2>
            <p>Cursei o Ensino Médio na Escola de Referência em Ensino Médio Professor Ântonio Farias. Atualmente, estou cursando o ensino superior no curso de Sistemas de Informação no Centro de Informática da UFPE (CIn/UFPE).</p>

            <h2>Interesses Tecnológicos</h2>
            <p>Foco no aprendizado do ciclo completo de desenvolvimento de software, arquitetura de sistemas de informação, segurança de dados e engenharia de dados em grande escala.</p>

            <h2>Objetivos Profissionais</h2>
            <p>Busco uma oportunidade de trabalho que me permita aplicar meu conhecimento em desenvolvimento de software e contribuir para a criação de soluções inovadoras e eficientes.Atualmemnte meu objetivo principal é trabalhar na àrea de cibersegurança, com foco em segurança de dados e engenharia de dados em grande escala.</p>

            <h2>Habilidades Técnicas</h2>
            <ul>
                <li>Programação em Python, C++ e JavaScript</li>
                <li>Tecnologia Web: HTML, CSS, React</li>
                <li>Ferramentas e blibliotecas: Pygame, Git, GitHub, Vite </li>
            </ul>
        </>
    )
}