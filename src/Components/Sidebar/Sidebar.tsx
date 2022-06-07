import "./Sidebar.css";
import { useState } from "react";
import { data } from "../../data/sidebar"
import { BiArrowFromRight } from "react-icons/bi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import SidebarItem from "./SidebarItem";
import { useGlobalState } from "../../Provider/AppProvider";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = () => {
    const { sidebarFull, showSidebar, darkMode, toggleDarkMode, toggleSidebar, hideSidebar } = useGlobalState()
    const [activeItem, setActiveItem] = useState('');
    const [subItems, setSubItems] = useState('');

    const toggleElementsVisible = (item: string) => {
        setSubItems(prev => {
            if (prev === item) return '';
            return item
        })
    }

    const handleClick = (item: string) => {
        toggleElementsVisible(item);
        setActiveItem(item);
    }

    return (
        <div className={`sidebar${!sidebarFull ? " active" : ""}${showSidebar ? " show" : ""}`}>
            
            <div className="sidebar-header">
                <h1 className="title">Bibo</h1>
                <div className={`sidebar-title-icon`}>
                    <AiOutlineClose onClick={hideSidebar} className="close-icon" />
                    <BiArrowFromRight className="toggle-icon" onClick={toggleSidebar} />
                </div>
            </div>
            <ul className="sidebar-list">
                <li className="switch-mode">
                    <button className="switch-mode-btn" onClick={toggleDarkMode}>
                        { darkMode ? <MdDarkMode /> : <MdLightMode /> }
                    </button>
                </li>
                {data.map(item => (
                    <SidebarItem 
                        subItems={subItems}
                        activeItem={activeItem} 
                        handleClick={handleClick} 
                        key={item.id} 
                        {...item} 
                    />
                ))}
            </ul>
        </div>
    )
}

export default Sidebar