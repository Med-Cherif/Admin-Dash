import './SubItems.css';
import { useGlobalState } from '../../Provider/AppProvider';
import AppsSubmenu from './AppsSubmenu';
import Notifications from './Notifications';
import AdminSubmenu from './AdminSubmenu';
import MessagesSubmenu from './MessagesSubmenu';

const SubItems = () => {
    const { navbarSubmenu } = useGlobalState();
    return (
        <div 
            style={{
                left: navbarSubmenu.visible ? navbarSubmenu.position! : 'auto',
                visibility: navbarSubmenu.visible ? 'visible' : 'hidden',
                opacity: navbarSubmenu.visible ? 1 : 0,
            }}
            className='paper clicked'
        >
            {
                navbarSubmenu.visible && (
                    navbarSubmenu.item === 'apps' ? <AppsSubmenu /> : 
                    navbarSubmenu.item === 'notifications' ? <Notifications /> : 
                    navbarSubmenu.item === 'admin' ? <AdminSubmenu /> :
                    navbarSubmenu.item === 'messages' ? <MessagesSubmenu /> : null
                )
            }
        </div>
    )
}

export default SubItems