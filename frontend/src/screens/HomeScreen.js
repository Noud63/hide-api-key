import React, { useState } from 'react'
//import axios from 'axios'
import Loader from '../components/Loader'
import styles from './HomeScreen.module.css'
import { useDispatch, useSelector } from 'react-redux'
import getCats from '../actions/getCatAction'

const HomeScreen = () => {

    const [show, setShow] = useState(true)

    const dispatch = useDispatch()
    const getCat = useSelector(state => state.getCat)
    const { loading, cat, error } = getCat
    console.log(getCat)

    const fetchData = () => {
        setShow(false)
        dispatch(getCats())
    }

    return (
        <>
            <div className={styles.container}>

                {show ? <div className={styles.getKitty}><span>Click button</span><span>Get your kitties</span></div> : ""}
                {loading ? <Loader /> : error ? <div>{error}</div> : ""}
                {cat && cat.map((kittypic, index) => {
                    const { url } = kittypic
                    return (
                        <div key={index} style={{ width: '90%', height: '90%', marginBottom: '20px' }}>
                            <img src={url} alt="kitty" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                        </div>
                    )
                })}
                <button className={styles.btn} onClick={fetchData}>Next Kitty</button>
            </div>
        </>
    )
}

export default HomeScreen
