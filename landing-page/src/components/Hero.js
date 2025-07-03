import styles from "./Hero.module.css";

function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.heroContent}>
                <h2 className={styles.heroTitle}>Welcome to MySite</h2>
                <p className={styles.heroSubtitle}>Building amazing UIs with React!</p>
            </div>
        </section>
    );
}

export default Hero;
