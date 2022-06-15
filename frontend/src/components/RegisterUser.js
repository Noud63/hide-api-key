import React, {useState} from 'react'
import styles from './RegisterUser.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../actions/registerAction'
import { v4 as uuid } from 'uuid';

const RegisterUser = () => {

    const [ name, setName ] = useState("")
    const [ email, setEmail ] = useState("")
    const [ address, setAddress ] = useState("")
    const [ country, setCountry ] = useState("")
    const [ password, setPassword ] = useState("")
    const [ repeatPassword, setRepeatPassword ] = useState("")

    const [ showMessage, setShowMessage ] = useState(false)

    const dispatch = useDispatch()
    //const users = useSelector( state => state.users)
    //const { loading, userInfo, error} = users

    const onsubmitHandler = (e) => {
     e.preventDefault()
     if(password !== repeatPassword){
         setShowMessage(true)
     }else{
         let user = {
             id: uuid(),
             name: name,
             email: email,
             address: address,
             country: country,
             password: password
          }

         dispatch(register(user))

         setName('')
         setEmail('')
         setAddress('')
         setCountry('')
         setPassword('')
         setRepeatPassword('')

         setShowMessage(false)
        }

       
    }

    
    return (
        <>
        <div className={styles.inputFields}>
                <form  onSubmit={onsubmitHandler}>
                    <input type='text' value={name} placeholder='Name' onChange={(e) => setName(e.target.value)} required/>
                    <input type='text' value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} required/>
                    <input type='text' value={address} placeholder='Address' onChange={(e) => setAddress(e.target.value)} required/>
                    <input type='text' value={country} placeholder='Country' onChange={(e) => setCountry(e.target.value)} required/>
                    <input type='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required/>
                    <input type='password' value={repeatPassword} placeholder='Repeat Password' onChange={(e) => setRepeatPassword(e.target.value)} required/>
                    <button className={styles.btn2} type='submit'>Submit</button>
            </form>
            {showMessage ? <div className={styles.passwordMatch}>Password don't match!</div> : ""}
        </div>
        </>
    )
}

export default RegisterUser
