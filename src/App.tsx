import Navbar from "./Components/Navbar";
import SubItems from "./Components/Submenu/SubItems";
import Sidebar from "./Components/Sidebar";
import { useGlobalState } from "./Provider/AppProvider";
import Main from "./Components/Main";

function App() {
    const { sidebarFull, darkMode, showSidebar, navbarSubmenu: { visible }, hideNavbarSubmenu, displaySidebar, hideSidebar } = useGlobalState();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!visible) return;

        const elements = [...document.querySelectorAll('.clicked') as NodeListOf<HTMLElement>];
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i] as any;
            if (element === e.target || element.contains(e.target)) {
                return;
            }
        }
        hideNavbarSubmenu();
    }

    return (
        <div 
            className={`App${darkMode ? " dark" : ""}`}
            onClick={handleClick}
        >
            <div className={`app-wrapper${!sidebarFull ? ' hidden-side-bar' : ''}`}>
                <Sidebar />
                <div>
                    <Navbar /> 
                    <Main />
                </div>
            </div>
            <SubItems />
            <button onClick={displaySidebar} className="show-sidebar-btn">Menu</button>
            <div onClick={hideSidebar} className={`overlay${showSidebar ? " show" : ""}`} />
        </div>
    );
}

export default App;
