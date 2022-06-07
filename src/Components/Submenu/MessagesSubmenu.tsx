import "./Notifications.css";
import { useGlobalState } from "../../Provider/AppProvider";
import MessageItem from "./MessageItem";

const MessagesSubmenu = () => {
    const { navbarSubmenu } = useGlobalState();

    return (
        <div className="notifications">
            <div className="notifications-header">
                <h3 className="notifications-title">Messages</h3>
                <button className="mark-as-read-btn">Marks all as read</button>
            </div>

            <ul className="notifications-list">
                {navbarSubmenu.elements?.map((item) => (
                    <MessageItem key={item.id} {...item} />
                ))}
            </ul>

            <button className="view-all">View all messages</button>
        </div>
    )
}

export default MessagesSubmenu