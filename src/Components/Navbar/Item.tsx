import { useRef } from "react";
import { IconType } from "react-icons";
import { useGlobalState } from "../../Provider/AppProvider";

interface IProps {
    id: number;
    Icon: IconType;
    item: string;
    badge: number | null;
    elements: any[];
}

const Item = (props: IProps) => {

    const itemRef = useRef<HTMLLIElement>(null);
    const { showNavbarSubmenu, navbarSubmenu } = useGlobalState();

    const handleClick = () => {
        if (!itemRef.current) return;
        const { right } = itemRef.current.getBoundingClientRect();
        showNavbarSubmenu(right, props.item, props.elements);
    }

    return (
        <li 
            ref={itemRef}
            onClick={handleClick}
            className={`navbar-item${navbarSubmenu.item !== props.item ? ' clicked' : ''}`}
        >
            <props.Icon className='navbar-item-icon' />
            {props.badge && (
                <span className="navbar-item-badge">
                    {props.badge}
                </span>
            )}
        </li>
    )
}

export default Item