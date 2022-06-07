import "./AppsSubmenu.css";
import { useGlobalState } from '../../Provider/AppProvider'

const AppsSubmenu = () => {
    const { navbarSubmenu } = useGlobalState();
    const apps = navbarSubmenu.elements!;

    return (
        <ul className='apps-submenu-list'>
            {apps.map((app) => (
                <li key={app.id} className='apps-submenu-item'>
                    <div className="apps-submenu-icon">
                        <app.Icon />
                    </div>
                    <span className="apps-submenu-text">{app.item}</span>
                </li>
            ))}
        </ul>
    )
}

export default AppsSubmenu