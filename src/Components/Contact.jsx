import React from 'react'
import styles from "../Css/Contact.module.css";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("xrbpyype");

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
            <li><span>E-mail:</span> <a href="mailto:thiago.thomers@gmail.com">thiago.thomers@gmail.com</a></li>
            <li><span>Github:</span> <a href="https://github.com/thiagothome" target="_blank" rel="noopener noreferrer">github.com/thiagothome</a></li>
            <li><span>LinkedIn:</span> <a href="https://www.linkedin.com/in/thiagothomers" target="_blank" rel="noopener noreferrer">linkedin.com/in/thiagothomers</a></li>
            <li><span>WhatsApp:</span> <a href="https://wa.me/5555996806934" target="_blank" rel="noopener noreferrer">(55) 9 9680-6934</a></li>
          </ul>
        </div>
      </div>

      <section className={styles.formulario}>
        <h2>Mensagem</h2>
        {state.succeeded ? (
          <p className={styles.sucesso}>✅ Mensagem enviada com sucesso! Entrarei em contato em breve.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <label htmlFor="nome">Nome:</label>
            <input type="text" id="nome" name="nome" required />
            <ValidationError prefix="Nome" field="nome" errors={state.errors} />

            <label htmlFor="email">E-mail:</label>
            <input type="email" id="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="mensagem">Mensagem:</label>
            <textarea id="mensagem" name="mensagem" required></textarea>
            <ValidationError prefix="Mensagem" field="mensagem" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "Enviando..." : "Enviar"}
            </button>
          </form>
        )}
      </section>
    </main>
  );
}

export default Contact;
