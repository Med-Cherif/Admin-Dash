import { useGlobalState } from "../../Provider/AppProvider";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";

/**
 * 
 */

const Notifications = () => {
    const { navbarSubmenu } = useGlobalState();

    return (
        <div className="notifications">
            <div className="notifications-header">
                <h3 className="notifications-title">Notifications</h3>
                <button className="mark-as-read-btn">Marks all as read</button>
            </div>

            <ul className="notifications-list">
                {navbarSubmenu.elements?.map((item) => (
                    <NotificationItem key={item.id} {...item} />
                ))}
            </ul>

            <button className="view-all">View all notifications</button>
        </div>
    )
}

export default Notifications