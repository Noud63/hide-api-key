import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './UserScreen.module.css'
import { useSelector } from 'react-redux'

const UserScreen = () => {

    
    const users = useSelector(state => state.users.users)
    console.log(users)
    // const { users } = users
    
    // const getUsersFromStorage = useCallback(() => {
    //     if (localStorage.getItem('USERS')) {
    //         const data = JSON.parse(localStorage.getItem('USERS'))
    //         setUser(data)
    //     }else{
    //         alert('No users!')
    //         navigate('/')
    //     }
    
    // }, [navigate])

    // useEffect(() => {
    //     getUsersFromStorage()
    // }, [getUsersFromStorage])

    const deleteUser = (id) => {
       
        console.log(id)
        // if(id){
        //     user = users.filter(u => {
        //         return u.id !== id
        //     })
        //     setUser(user)
        // }
        //localStorage.setItem('USERS', JSON.stringify(user))
    }
    // React.useEffect(() => {
    //     console.log(users);
    // }, [users]);


    return (
        <div className={styles.wrapper}>
            <div className={styles.usersHeader}>
                <div className={styles.user2}>Name</div>
                <div className={styles.user2}>Address</div>
                <div className={styles.user2}>Country</div>
                <div className={styles.user2}>Email</div>
                <div className={styles.user2 + ' ' + styles.trash}>Del</div>
            </div>
            {users.map((user, index) => {
                return (
                    <div key={user.id} className={styles.userInfo}>
                        <div className={styles.user + ' ' + styles.name}>{user.name}</div>
                        <div className={styles.user}>{user.address}</div>
                        <div className={styles.user}>{user.country}</div>
                        <div className={styles.user}>{user.email}</div>
                        <div className={styles.user + ' ' + styles.trash} onClick={() => deleteUser(user.id)}>X</div>
                    </div>
                )
            })}
        </div>
    )
}

export default UserScreen
