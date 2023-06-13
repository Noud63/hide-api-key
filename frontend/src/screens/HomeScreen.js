import React, { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import styles from './HomeScreen.module.css'
import { useDispatch, useSelector } from 'react-redux'
import getCats from '../actions/getCatAction'

const HomeScreen = () => {

    const [show, setShow] = useState(true)

    const dispatch = useDispatch()
    const cats = useSelector(state => state.cats)
    const { loading, cat, error } = cats

    //Dispatch action
    const fetchData = () => {
        setShow(false)
        dispatch(getCats())
    }

    //Persist state
    useEffect(() => {
        if (!loading && cat.length > 0) {
            setShow(false)
        }
    }, [cat, loading])

    

    return (
        <>
            <div className={styles.container}>
                {show ? <div className={styles.getKitty}><span>Click button</span><span>Get your kitties</span></div> : ""}
                {loading ? <Loader /> : error ? <div>{error}</div> : ""}
                {cat && cat.map((kittypic, index) => {
                    const { url } = kittypic
                    return (
                        <div key={index} style={{ width: '90%', height: '90%', marginBottom: '20px', display: 'flex', justifyContent: 'center', overflow: "hidden" }}>
                            <img src={url} alt="kitty" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
                        </div>
                    )
                })}
                <button className={styles.btn} onClick={fetchData}>Next Kitty</button>
            </div>

        </>
    )
}

export default HomeScreen
