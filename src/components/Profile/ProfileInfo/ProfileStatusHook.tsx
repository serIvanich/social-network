import React, {useState, useEffect, ChangeEvent} from 'react'
import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks: React.FC<ProfileStatusType>= ({status, updateStatus}) => {
    let [editMode, setEditMode] = useState(false)
    let [newStatus, setStatus] = useState(status)
    
    useEffect ( () => {
        setStatus(status)
    }, [status])
    let activeEditMode = () => {
        setEditMode(true)
    }
    let deactiveEditMode = () => {
        setEditMode(false)
        updateStatus(newStatus)
    }
    let changeStatus = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    
    return (
        <div>
            {!editMode &&
                <div className={s.status}><b>my status: </b>
                    <span onDoubleClick={activeEditMode}>{status || '-----'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input autoFocus={true} 
                    onBlur={deactiveEditMode} 
                    onChange={changeStatus} 
                    value={status} />
                </div>
            }    
        </div>
    ) 
}
export default ProfileStatusWithHooks

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}