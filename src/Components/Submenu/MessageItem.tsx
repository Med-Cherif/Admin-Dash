interface IProps {
    name: string
    message: string
    createdAt: string
    image: string
}

const MessageItem = (props: IProps) => {
    return (
        <li className='notification-item'>
            <div className='notification-data'>
                <div className="notification-icon">
                    <img src={props.image} alt="" className="avatar" />
                </div>
                <div className="notification-info">
                    <p className='notification-event'>{props.name}</p>
                    <span className='notification-message'>{props.message}</span>
                </div>
            </div>
            <p className='notification-created-at'>{props.createdAt}</p>
        </li>
    )
}

export default MessageItem