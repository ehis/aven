import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Aven</title>
        <meta name="description" content="Aven equity backed credit card" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>

        <Image src="/aven.svg" alt="Aven Logo" width={71} height={27} />

        <nav>
          <a>Card</a>
          <a>App</a>
          <a>Resources</a>
        </nav>

        <nav>
          <a>Sign In</a>
          <button className={styles.headerBtn}>Check Offers</button>
        </nav>
      </header>

      <main className={styles.main}>

        <div className={styles.education}>
          Education
        </div>

        <h1 className={styles.title}>
          Become an Expert
        </h1>

        <p className={styles.description}>
          Grow your knowledge with our educational articles written by our team of experts
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Image src="/education-01.png" alt="2 people staring at screen" width={496} height={376} />
            <h2>Home Equity Line of Credit (HELOC) Card: What is it?</h2>
            <p>Are you looking to free up some cash? If so, you have probably thought about getting a second mortgage in...</p>
          </div>

          <div className={styles.card}>
            <Image src="/education-02.png" alt="Picture of a home" width={496} height={376} />
            <h2>Home Equity Line of Credit (HELOC) Card: How it Works</h2>
            <p>Now that you understand what a HELOC Card is, let’s dive into how it works. This article also explains...</p>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <Image src="/aven.svg" alt="Aven Logo" width={72} height={24} />
      </footer>
    </div>
  )
}
