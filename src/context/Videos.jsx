import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const VideosApiUrl = 'http://localhost:3000/videos';
export const VideosContext = createContext();
VideosContext.displayName = 'Videos';


export default function VideosProvider({ children }) {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get(VideosApiUrl).then(response => {
            setVideos(response.data);
        })
    }, [])

    const [selectedVideo, setSelectedVideo] = useState(null);

    return (
        <VideosContext.Provider value={{ videos, setVideos, selectedVideo, setSelectedVideo }}>
            {children}
        </VideosContext.Provider>
    )
}

export function useVideosContext() {
    const { videos, setVideos } = useContext(VideosContext);
    const { selectedVideo, setSelectedVideo } = useContext(VideosContext);
    const { } = useContext(VideosContext);

    function editCard(video) {
        setSelectedVideo(video);
    }

    function addVideo(video) {
        axios.post(VideosApiUrl, {
            "titulo": video.titulo,
            "categoria": video.categoria,
            "capa": video.capa,
            "link": video.link,
            "descricao": video.descricao,
        })
            .then((response) => {
                setVideos([...videos, response.data])
                alert("video adicionado com sucesso!")
            })
            .catch(() => alert("houve um erro, tente novamente."))
    }

    function updateVideo(video) {
        axios
            .put(`${VideosApiUrl}/${video.id}`, {
                "titulo": video.titulo,
                "categoria": video.categoria,
                "capa": video.capa,
                "link": video.link,
                "descricao": video.descricao,
            })
            .then(() => {
                setVideos(videos.map(thisVideo => thisVideo.id === video.id ? video : thisVideo))
                alert("Jogo editado com sucesso!")
            })
            .catch(() => alert("Houve um erro ao editar o jogo. Tente novamente"))
    }










}

