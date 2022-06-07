import { IoLogOutOutline } from 'react-icons/io5';
import { useGlobalState } from "../../Provider/AppProvider";
import "./AdminSubmenu.css";

const AdminSubmenu = () => {
    const { navbarSubmenu } = useGlobalState();

    const elements = navbarSubmenu.elements!;

    return (
        <ul className="admin-submenu-list">
            {elements.map((element, i) => (
                <li key={i} className="admin-submenu-item">
                    <element.Icon />
                    <span className="admin-submenu-text">{element.item}</span>
                </li>
            ))}

            <hr style={{ margin: '4px 0' }} />
            

            <li className="admin-submenu-item">
                <IoLogOutOutline />
                <span className="admin-submenu-text">Logout</span>
            </li>


            
        </ul>
    )
}

export default AdminSubmenu