import { useState } from 'react'
import Cards from '../Cards'
import styles from './styles.module.css'

export default function CategoryContainer({ categories, videos, setVideos, deletar }) {

    return (
        <section>
            <h3 className={styles.tituloCategoria} style={{ backgroundColor: `${categories.color}` }}>
                {categories.category} </h3>
            <div className={styles.videoCardContainer}>
                {videos.map((video) => <Cards key={video.id} video={video} setVideos={setVideos} 
                categoria={categories}/>)}
            </div>
        </section>
    )
}