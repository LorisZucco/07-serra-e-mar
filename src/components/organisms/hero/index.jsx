import styles from "./hero.module.css"


export default function Hero() {
  return (
    <section className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1 className={styles.title}>Serra ou mar? Escolha seu próximo passeio</h1>
            <p className={styles.subtitle}>Passeios guiados pelos cantos mais bonitos de Santa Catarina</p>
           </div>
            <img className={styles.image} src="/images/serra-e-mar.svg" alt="Montanhas, com neve no topo, mar abaixo em um dia ensolarado" />
        </div>
    </section>
  )
}

