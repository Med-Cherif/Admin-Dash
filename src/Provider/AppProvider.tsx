import React, { useContext, createContext, useState } from 'react';

const AppContext = createContext({});

interface NavbarSubmenuType {
    visible: boolean
    item: null | string
    position: null | number
    elements: null | any[]
}

const AppProvider = ({ children }: { children: JSX.Element }) => {
    const [sidebarFull, setSidebarFull] = useState(true);
    const [showSidebar, setShowSidebar] = useState(false);

    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => setDarkMode(prev => !prev);

    const [navbarSubmenu, setNavbarSubmenu] = useState<NavbarSubmenuType>({
        item: null,
        visible: false,
        position: null,
        elements: null
    })

    const displaySidebar = () => setShowSidebar(true);
    const hideSidebar = () => setShowSidebar(false);

    const showNavbarSubmenu = (position: number, item: string, elements: any[]) => {
        setNavbarSubmenu({
            visible: true,
            item,
            position,
            elements,
        })
    }

    const hideNavbarSubmenu = () => {
        setNavbarSubmenu({
            visible: false,
            position: null,
            item: null,
            elements: null,
        })
    }

    const toggleSidebar = () => {
        setSidebarFull(prev => !prev);
    }

    return (
        <AppContext.Provider value={{
            navbarSubmenu, showNavbarSubmenu, hideNavbarSubmenu,
            sidebarFull, toggleSidebar,
            showSidebar,
            displaySidebar,
            hideSidebar,
            darkMode,
            toggleDarkMode
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider

interface GlobalState {   
    showSidebar: boolean
    darkMode: boolean
    toggleDarkMode: () => void
    displaySidebar: () => void
    hideSidebar: () => void
    navbarSubmenu: NavbarSubmenuType
    sidebarFull: boolean;
    showNavbarSubmenu: (position: number, item: string, elements: any[]) => void
    hideNavbarSubmenu: () => void;
    toggleSidebar: () => void;
}

export const useGlobalState = () => {
    return useContext(AppContext) as GlobalState;
}