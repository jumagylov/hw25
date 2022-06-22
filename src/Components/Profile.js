import React from 'react'
import { useDispatch } from 'react-redux'
import { Exist } from '../store/reducers/uiSlice' 


function Profile() {
    const dispatch = useDispatch()
        const ExistHandler = () => {
            dispatch(Exist())
        }
   
  return (
    <div>
        <button onClick={ExistHandler}>Exit</button>
    </div>
  )
}

export default Profile