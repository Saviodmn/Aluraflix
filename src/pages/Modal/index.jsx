import { useEffect, useState } from 'react';
import styles from './styles.module.css'
import { GiCancel } from "react-icons/gi";
import axios from 'axios';

function Modal({ isOpen, isClosed, theVideo, videos, setVideos }) {

    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [capa, setCapa] = useState("");
    const [link, setLink] = useState("");
    const [descricao, setDescricao] = useState("");

    useEffect(() => {
        if (theVideo) {
            setTitulo(theVideo.titulo)
            setCategoria(theVideo.categoria)
            setCapa(theVideo.capa)
            setLink(theVideo.link)
            setDescricao(theVideo.descricao)
        }
    }, ([]))

    const atualizar = (videoAtualizado) =>{
        setVideos(videos.map(video =>{
            if(video.id === videoAtualizado.id){
                return videoAtualizado
            }
            return video
        }))
    }

    const updateVideo = (theVideo) => {
        axios.put(`http://localhost:3000/videos/${theVideo.id}`,{
            "titulo": theVideo.titulo,
            "categoria": theVideo.categoria,
            "capa": theVideo.capa,
            "link": theVideo.link,
            "descricao": theVideo.descricao,
        })
        .then(()=>{
            setVideos(videos?.map(thisVideo => thisVideo.id === theVideo.id ? theVideo : thisVideo))
            alert("editado")
        })
        
    }


    const handleSubmit = (e) => {
        // e.preventDefault();
        const newVideo = {
            "titulo": titulo,
            "categoria": categoria,
            "capa": capa,
            "link": link,
            "descricao": descricao,
        }
        if(theVideo){
            newVideo.id = theVideo.id;
            updateVideo(newVideo);

        }
    }




    // const updateVideos = (id, updatedVideos) =>{
    //     setVideos(videos.map((video)=> video.id === id ? updatedVideos : video))
    // }

    // const updatedVideos = {titulo,categoria,capa,link,descricao};

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     updateVideos(id,updatedVideos);
    // }

    if (isOpen) {
        return (
            <>
                <div className={styles.container}>
                    <div className={styles.modal}>
                        <button className={styles.btnExit} onClick={isClosed}> <GiCancel /> </button>
                        <div className={styles.modalContent}>
                            <h1>EDITAR CARD</h1>
                            <form onSubmit={handleSubmit} >
                                <div>
                                    <p>Título</p>
                                    <input type='text' required placeholder='digite o título'
                                        name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
                                </div>
                                <div className={styles.lista}>
                                    <p>categoria</p>
                                    <select className={styles.select} value={categoria} onChange={(e) => setCategoria(e.target.value)} name="categoria" required>
                                        <option value="-">Selecione uma categoria</option>
                                        <option value="Front-End">Front-End</option>
                                        <option value="Back-End">Back-End</option>
                                        <option value="Mobile">Mobile</option>
                                    </select>
                                </div>
                                <div>
                                    <p>Imagem</p>
                                    <input type='text' value={capa} onChange={(e) => setCapa(e.target.value)} name="imagem" required placeholder='o link é obrigatório' />
                                </div>
                                <div>
                                    <p>Video</p>
                                    <input type='text' name="filme" value={link} onChange={(e) => setLink(e.target.value)} required placeholder='digite o link do vídeo' />
                                </div>
                                <div >
                                    <p>Descrição</p>
                                    <textarea className={styles.textarea} name="descricao"
                                        value={descricao} onChange={(e) => setDescricao(e.target.value)} placeholder='Sobre o que é esse vídeo?' required />
                                </div>
                                <div className={styles.bottons}>
                                    <button className={styles.btn} type='submit' value='Guardar'>Guardar</button>
                                    <button className={styles.btn} type='reset' value='Limpar'>Limpar</button>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </>
        )
    }
    return null;
}

export default Modal;