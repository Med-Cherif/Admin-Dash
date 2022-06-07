import { useEffect, useRef } from 'react'
import { IconType } from 'react-icons'
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from 'react-icons/md'

interface Element {
    id: number,
    name: string
}

interface IProps {
    text: string
    Icon: IconType
    elements?: Element[]
    activeItem: string;
    subItems: string;
    handleClick: (item: string) => void;
}

const SidebarItem = ({ text, activeItem, subItems, elements, Icon, handleClick }: IProps) => {
    const listRef = useRef<HTMLUListElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!elements) return;
        if (subItems === text) {
            const { height } = listRef.current!.getBoundingClientRect()
            wrapperRef.current!.style.height = `${height}px`
        } else {
            wrapperRef.current!.style.height = '0'
        }
    }, [subItems]);

    useEffect(() => {

    }, [])

    return (
        <li className={`sidebar-item`}>
            <a 
                href='#' 
                className={`sidebar-item-link${text === activeItem ? " active" : ""}`}
                onClick={() => handleClick(text)}
            >
                <Icon className='sidebar-item-icon' />
                <span className="sidebar-item-text">{text}</span>
                {elements && <MdOutlineKeyboardArrowLeft className="arrow-icon" /> }
            </a>

            {
                elements && (
                    <div ref={wrapperRef} className='sidebar-subitems-wrapper'>
                        <ul ref={listRef} className='sidebar-subitems-list'>
                            {elements.map(element => (
                                <li key={element.id} className="sidebar-subitem-item">
                                    <MdOutlineKeyboardArrowRight />
                                    <span>{element.name}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) 
            }

        </li>
    )
}

export default SidebarItem