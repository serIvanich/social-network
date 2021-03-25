import React, { FC } from 'react'
import preload from '../../../assets/images/preload.gif'


const Preloader: FC<PropsType> = () => {
    return (
    <div >
        
            <img src={preload} />
        
    </div> )
}
export default Preloader
type PropsType = {
}