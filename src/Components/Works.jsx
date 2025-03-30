import React from 'react'
import foto from '../Img/work.png'
import styles from "../Css/Works.module.css";
import { Link } from 'react-router-dom';

const Works = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <h3>Trabalhos</h3>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2>Jogo da memória</h2>
          </div>
        </div>
        <ul>
          <li><span>Tecnologias utilizadas:</span> HTML, CSS e JS.</li>
          <li><span>Descrição:</span> A memória é uma das habilidades mais incríveis do nosso cérebro, essencial para o aprendizado, a resolução de problemas e até mesmo para nossas interações diárias. Exercitar a memória não só melhora o, mas também ajuda na concentração e no desenvolvimento cognitivo.</li>
          <li><span>Funcionamento:</span> O jogador insere seu nome na tela de login, que é armazenado no localStorage. Esse nome é recuperado na tela do jogo para personalizar o placar, proporcionando uma experiência mais imersiva. <Link to='/works/worksmemorygame'>Assita aqui</Link>.</li>
        </ul>
      </div>
      <div className={styles.img}>
        <img src={foto} alt="memory game" />
      </div>
    </main>
  )
}

export default Works