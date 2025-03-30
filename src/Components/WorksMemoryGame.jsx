import React from 'react'
import video from '../Videos/work.mp4'
import styles from "../Css/WorksMemoryGame.module.css";

const WorksMemoryGame = () => {
  return (
    <main className={styles.container}>
      <video width="1000" autoPlay controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  )
}

export default WorksMemoryGame