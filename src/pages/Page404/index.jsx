import styles from './styles.module.css'

export default function Page404() {
    return (
        <section className={styles.container_404}>
            
            <div className={styles.textos}>
            <h2 className={styles.titulo2}>Algo de errado não está certo!</h2>
                <span className={styles.texto_grande}>404</span>
                <strong className={styles.texto_azul}>Página não localizada!</strong>
            </div>
        </section>
    )
}