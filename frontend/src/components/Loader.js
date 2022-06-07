import React from 'react'
import loader from '../images/loading.gif'
import styles from './Loader.module.css'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <img src={loader} alt="loader" style={{width: '100px'}}/>
        </div>
    )
}

export default Loader
