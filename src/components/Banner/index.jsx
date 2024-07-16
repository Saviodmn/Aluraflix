import styles from './styles.module.css'

function Banner(){
    return(
        <section className={styles.banner_container}>
            <div className={styles.fundo} style={{
                backgroundImage:`linear-gradient(to bottom, rgba(0,0,0,0.56),
                    rgba(0,0,0, 0.56)), url('./banner-youtube.png')`,
                backgroundRepeat: 'no-repeat', backgroundSize: "100%",
                width: "100%", maxHeight: "auto",
            }}>
                <div className={styles.item}>
                    <div>
                        <h1>Front-End</h1>
                        <h2>SEO com React</h2>
                        <p>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"!</p>
                    </div>
                    <div className={styles.miniBanner}>
                        <img className={styles.imagem} alt="SEO com React" src='./banner-youtube.png'/>
                        <div className={styles.divImg}/>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Banner;