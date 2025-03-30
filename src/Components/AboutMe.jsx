import React from 'react'
import styles from "../Css/Aboutme.module.css";
import foto from '../Img/aboutme.png'

const AboutMe = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <h3>Sobre</h3>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2>Transformando minha vida através da tecnologia.</h2>
          </div>
          <p>Olá! Meu nome é Thiago Gomes, sou desenvolvedor Full Stack com experiência em C#, .NET, HTML, CSS, JavaScript, React, entre outras tecnologias. Apaixonado por criar soluções que facilitem a vida de qualquer ser vivo.</p>
        </div>
      </div>
      <div className={styles.img}>
        <img src={foto} alt="thiago s. gomes" />
      </div>
    </main>
  )
}

export default AboutMe