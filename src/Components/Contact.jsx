import React from 'react'
import styles from "../Css/Contact.module.css";

const Contact = () => {
  return (
    <main className={styles.container}>
      <div className={styles.contentContainer}>
        <h3>Contato</h3>
        <div className={styles.content}>
          <div className={styles.titles}>
            <h2>Vamos trabalhar juntos?</h2>
            <h4>Se você quiser bater um papo sobre tecnologia, projetos ou oportunidades, sinta-se à vontade para me chamar! Respondo o mais rápido possível.</h4>
          </div>
          <ul>
            <li><span>E-mail:</span>thiago.thomers@gmail.com.</li>
            <li><span>Github:</span>https://github.com/thiagothome</li>
            <li><span>Linkedin:</span>https://www.linkedin.com/in/thiagothomers</li>
            <li><span>Whatsapp:</span>(55) 9 9680-6934</li>
          </ul>
        </div>
      </div>
      <section className={styles.formulario}>
        <h2>Mensagem</h2>
        <form>
          <label htmlFor="nome">Nome:</label>
          <input type="text" id="nome" name="nome" required />
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="mensagem">Mensagem:</label>
          <textarea id="mensagem" name="mensagem" required></textarea>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </main>
  )
}

export default Contact