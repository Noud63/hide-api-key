import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import fetchData from './fetchDataApi'
import Loader from './Loader'
import styles from './GetCat.module.css'

const GetCat = () => {

    const [show, setShow ] = React.useState(true)

    const cats = useSelector( state => state.cat)
    const { cat, loading, error } = cats
  
    const dispatch = useDispatch()

    const getNextCat = () => {
        dispatch(fetchData())
        if (cat) {
            setShow(false)
        }
    }

    return (
        <div>
            <div className={styles.container}>
                {show ? <div className={styles.getKitty}><span>Click button</span><span>Get your kitties</span></div> : ""}
                {loading && <Loader />}
                {!loading && cat.map((cat, index) => {
                    const { url } = cat
                    return (
                        <div key={index} style={{ width: '90%', height: '90%', marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                            <img src={url} alt="kitty" style={{ width: 'auto', height: '100%', objectFit: 'contain' }} />
                        </div>
                    )
                })}
                <button className={styles.btn} onClick={getNextCat}>Next Kitty</button>
                <div>{!error && <div>{error}</div>}</div>
            </div>

        </div>
    )
}

export default GetCat
