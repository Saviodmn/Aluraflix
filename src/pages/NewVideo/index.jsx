import { useState } from 'react';
import styles from './styles.module.css'
import axios from 'axios';

function NewVideo() {

    const [video, setVideo] = useState({
        titulo: "",
        categoria: "",
        capa: "",
        link: "",
        descricao: ""
    },[])

    const handleInput = (e) => {
        e.preventDefault();
        setVideo({ ...video, [e.target.name]: e.target.value })
    }

    const saveVideo = (e) => {
        e.preventDefault();
        const data = {
            titulo: video.titulo,
            categoria: video.categoria,
            capa: video.capa,
            link: video.link,
            descricao: video.descricao,
        }
        axios.post(`http://localhost:3000/videos`, data).then(res => {
            alert("criou");
        });
        
    }

    return (
        <section className={styles.container}>
            <div className={styles.titulo}>
                <h1>NOVO VÍDEO</h1>
                <h2>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO.</h2>
            </div>
            <form onSubmit={saveVideo} className={styles.formulario}>
                <hr className={styles.barra} />
                <h1>Criar Card</h1>
                <hr className={styles.barra} />

                <div className={styles.primeiro_campo}>
                    <div className={styles.campo_texto}>
                        <p>Título</p>
                        <input type='text' name="titulo" value={video.titulo} onChange={handleInput} required placeholder='digite o título' />
                    </div>
                    <div className={styles.lista}>
                        <p>categoria</p>
                        <select className={styles.select} name="categoria" value={video.categoria} onChange={handleInput} required>
                            <option value="-">Selecione uma categoria</option>
                            <option value="Front-End">Front-End</option>
                            <option value="Back-End">Back-End</option>
                            <option value="Mobile">Mobile</option>
                        </select>
                    </div>
                </div>

                <div className={styles.primeiro_campo}>
                    <div className={styles.campo_texto}>
                        <p>Imagem</p>
                        <input type='text' name="capa" value={video.capa} onChange={handleInput} required placeholder='o link é obrigatório' />
                    </div>
                    <div className={styles.campo_texto}>
                        <p>Video</p>
                        <input type='text' name="link" value={video.link} onChange={handleInput} required placeholder='digite o link do vídeo' />
                    </div>
                </div>

                <div className={styles.primeiro_campo}>
                    <div className={styles.campo_texto}>
                        <p>Descrição</p>
                        <textarea name="descricao" value={video.descricao} onChange={handleInput} className={styles.textarea} placeholder='Sobre o que é esse vídeo?' required />
                    </div>
                </div>

                <div className={styles.primeiro_campo}>
                    <button className={styles.btn} type='submit' value='Guardar'>Guardar</button>
                    <button className={styles.btn} type='reset' value='Limpar'>Limpar</button>
                </div>

            </form>
        </section>
    )
}

export default NewVideo;