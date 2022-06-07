import React from 'react'
import { IconType } from 'react-icons'

interface IProps {
    event: string
    message: string
    createdAt: string
    Icon: IconType
}

const NotificationItem = (props: IProps) => {
    return (
        <li className='notification-item'>
            <div className='notification-data'>
                <div className="notification-icon">
                    <props.Icon />
                </div>
                <div className="notification-info">
                    <p className='notification-event'>{props.event}</p>
                    <span className='notification-message'>{props.message}</span>
                </div>
            </div>
            <p className='notification-created-at'>{props.createdAt}</p>
        </li>
    )
}

export default NotificationItem