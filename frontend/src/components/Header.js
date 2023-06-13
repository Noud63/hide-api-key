import React from 'react'
import styles from './Header.module.css'
import '../index.css'
import { Link } from 'react-router-dom'
import { HiMenu } from "react-icons/hi";

const Header = () => {

const [ view, setView] = React.useState(false)

const show = ()=>{
    setView(true)
}

const hide = () => {
        setView(false)
    }

    return (
        <div className={styles.header}>
            <div className={styles.menuBtn} onMouseEnter={show}><HiMenu color='white' size='40px' /></div>
            <div className={view ? 'menu show' : 'menu'} onMouseLeave={hide} >
                <div className={styles.submenu} >
                    <Link to='/' className={styles.link}>
                        <button className={styles.btn}>Get Cat</button>
                    </Link>

                    <Link to='/registeruser'className={styles.link}>
                        <button className={styles.btn}>Register User</button>
                    </Link>

                    <Link to='/users'className={styles.link}>
                        <button className={styles.btn}>Get users</button>
                    </Link>
                 </div>
             </div>
            
        </div>
    )
}

export default Header
