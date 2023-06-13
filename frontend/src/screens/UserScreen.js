import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './UserScreen.module.css'
import { useSelector } from 'react-redux'
import useMediaQuery from '../hooks/useMediaQuery'

const UserScreen = () => {

    const users = useSelector(state => state.users.users)

    const layoutBreak = useMediaQuery('(max-width: 1020px)')

    const deleteUser = (id, e) => {

        const element = e.target.parentNode
        element.parentNode.removeChild(element)

        const usersList = JSON.parse(localStorage.getItem('users'))
        
        const filteredList = usersList.filter( u => {
                 return u.id !== id
        })
            localStorage.setItem('users', JSON.stringify(filteredList))
        }

    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.usersTitle}>Users</div> */}
            {!layoutBreak ? (<div className={styles.usersHeader}>
                <div className={styles.user2}>Name</div>
                <div className={styles.user2}>Address</div>
                <div className={styles.user2}>Country</div>
                <div className={styles.user2}>Email</div>
                <div className={styles.user2 + ' ' + styles.trash2}></div>
            </div>) : ("")
            }
            {users.map((user, index) => {
                return (
                    
                    <div className={styles.labelAndUserInfo} key={index}>
                    {layoutBreak ? <div className = {styles.usersHeader } >
                            <div className={styles.user2}>Name</div>
                            <div className={styles.user2}>Address</div>
                            <div className={styles.user2}>Country</div>
                            <div className={styles.user2}>Email</div>
                            <div className={styles.user2 + ' ' + styles.trash2}></div>
                        </div> : ""
}
                    <div key={user.id} className={styles.userInfo}>
                        
                        <div className={styles.user + ' ' + styles.name}>{user.name}</div>
                        <div className={styles.user}>{user.address}</div>
                        <div className={styles.user}>{user.country}</div>
                        <div className={styles.user}>{user.email}</div>
                        <div className={styles.user + ' ' + styles.trash} onClick={(e) => deleteUser(user.id, e)}>Delete</div>
                    </div>
                        </div>
                )
            })}
        </div>
    )
}

export default UserScreen
