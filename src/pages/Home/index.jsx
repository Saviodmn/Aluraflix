import styles from './styles.module.css'
import Banner from '../../components/Banner'
import { useEffect, useRef, useState } from 'react';
import Cards from '../../components/Cards';
import axios from 'axios';
import CategoryContainer from '../../components/CategoryContainer';

function Home() {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/videos').then(response => {
            setVideos(response.data);
        })
    }, [])

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/categories")
            .then(response => {
                setCategories(response.data)
            })
    }, [])

    const firstRenderRef= useRef(true);

    useEffect(()=>{
        if(firstRenderRef.current){
            firstRenderRef.current = false;
            // console.log(videos);
            return;
        }
        if(videos.length<1){
            console.log("zerado")
        }else{
            console.log(videos);
        }
        
    })

    return (
        <section className={styles.home}>
            <Banner />
            
            <div className={styles.container}>
                {categories.map((category) => (
                    <CategoryContainer key={category.category}
                        categories={category}
                        videos={videos.filter(video => video.categoria === category.category)} 
                        setVideos={setVideos}
                        />)
                )}
            </div>

        </section>
    )
}

export default Home;


