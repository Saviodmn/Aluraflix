import styles from './styles.module.css'
import {  NavLink } from 'react-router-dom';

function Header(){
    return(
        <header className={styles.header}>
            <img src='/aluraflix.png' alt='aluraflix logo'/>
            <nav className={styles.nav}>
                <NavLink className={styles.btn} to='/'>Home</NavLink>
                <NavLink  className={styles.btn} to='novoVideo'>Novo Vídeo</NavLink>
            </nav>
        </header>
    )
}

export default Header;