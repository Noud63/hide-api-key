import React, { useState } from 'react'
import styles from './RegisterUser.module.css'
import { useDispatch } from 'react-redux'
import { register } from '../actions/registerAction'
import { v4 as uuid } from 'uuid'

const RegisterUser = () => {

    const [userData, setUserData] = useState({
        name:'',
        email:'',
        address:'',
        city:'',
        country:'',
        password:'',
        password2:''
    })

    const { name, email, address, city, country, password, password2 } = userData

    const [showMessage, setShowMessage] = useState(false)

    const dispatch = useDispatch()

    const onChange = (e) => {
        setUserData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }))
    }

    const onsubmitHandler = (e) => {
        e.preventDefault()
        e.target.reset()

        if (password !== password2) {
            setShowMessage(true)
        }else{
            const user = {
                id: uuid(),
                name,
                email,
                address,
                city,
                country,
                password
            }
            dispatch(register(user))
            setShowMessage(false)
            setUserData({name: '',
                email: '',
                address: '',
                city: '',
                country: '',
                password: '',
                password2: ''
            })
            let usersExisting = JSON.parse(localStorage.getItem('users')) || []
            localStorage.setItem('users', JSON.stringify([...usersExisting, user]))
           } 
        }

    return (
        <>
            <div className={styles.inputFields}>
                <form onSubmit={onsubmitHandler}>
                    <input type='text' name='name' defaultValue={name} placeholder='Name' onChange={onChange} required />
                    <input type='text' name='email' defaultValue={email} placeholder='Email' onChange={onChange} required />
                    <input type='text' name='address' defaultValue={address} placeholder='Address' onChange={onChange} required />
                    <input type='text' name='country' defaultValue={country} placeholder='Country' onChange={onChange} required />
                    <input type='password' name='password' defaultValue={password} placeholder='Password' onChange={onChange} required />
                    <input type='password' name='password2' defaultValue={password2} placeholder='Repeat Password' onChange={onChange} required />
                    <button className={styles.btn2} type='submit'>Submit</button>
                </form>
                {showMessage ? <div className={styles.passwordMatch}>Passwords don't match!</div> : ""}

            </div>
        </>
    )
}

export default RegisterUser
