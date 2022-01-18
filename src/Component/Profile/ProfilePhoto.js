import React from 'react'
import myPhoto from './IMG_20181214_100813.jpg'
const ProfilePhoto = () => {
    return (
        <div>
            <img className='imgProfile'
            src={myPhoto} 
            alt='myPhoto'/>
        </div>
    )
}

export default ProfilePhoto
