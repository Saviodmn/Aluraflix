import axios from 'axios';
import styles from './styles.module.css'
import { BiEditAlt } from "react-icons/bi";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useEffect, useState } from 'react';
import Modal from '../../pages/Modal';


function Cards({ video, videos, setVideos, categoria }) {
    function deleteVideo(video) {
        axios.delete(`http://localhost:3000/videos/${video.id}`)
            .then(() => {
                setVideos(videos.filter((thisvideo) => thisvideo.id !== video.id))
            })
            .catch(() => alert("Houve um problema ao deletar o video. Tente novamente"))
    }

    const [modal, setModal] = useState(false);


    return (
        <section className={styles.card_container}>
            <div className={styles.card} style={{ border: `4px solid ${categoria.color}` }}>
                <a href={video.link} target='blank' rel="noopener noreferrer">
                    <div className={styles.imagem}>
                        <img className={styles.imagemItem} src={video.capa} alt={video.titulo} />
                        <div className={styles.divImg} style={{ color: categoria.color }} />
                    </div>
                </a>
                <div className={styles.options}>
                    <button onClick={() => deleteVideo(video)} className={styles.button}>
                        <RiDeleteBin2Line className={styles.icon} /> Deletar
                    </button>
                    <button onClick={() => setModal(true)} className={styles.button}>
                        <BiEditAlt className={styles.icon} /> Editar
                    </button>
                </div>
            </div>

            <Modal isOpen={modal} isClosed={() => setModal(!modal)}
                theVideo={video} videos={videos} setVideos={setVideos} />
        </section>
    )
}

export default Cards;