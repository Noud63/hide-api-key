import React from 'react'
import styles from '../screens/UserScreen.module.css'
import { useDispatch } from 'react-redux'
import { register } from '../actions/registerAction'

const DeleteUser = ({userId}) => {

    const dispatch = useDispatch()

    const deleteUser = (e, id) => {

        const element = e.target
        element.parentNode.removeChild(element)

        const usersList = JSON.parse(localStorage.getItem('users'))

        const filteredList = usersList.filter(u => {
            return u.id !== id
        })
        
        dispatch(register(filteredList))
        localStorage.setItem('users', JSON.stringify(filteredList))
    }

  return (
      <div className={styles.user + ' ' + styles.trash} onClick={(e) => deleteUser(e, userId)}>Delete</div>
  )
}

export default DeleteUser
