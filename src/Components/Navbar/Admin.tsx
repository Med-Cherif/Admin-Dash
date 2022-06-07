import { useRef, useEffect } from 'react';
import { useGlobalState } from '../../Provider/AppProvider';
import { adminData } from '../../data/navbar';

const Admin = () => {
    const itemRef = useRef<HTMLDivElement>(null)
    const { showNavbarSubmenu, navbarSubmenu } = useGlobalState();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (!itemRef.current) return;
        const { right, left } = itemRef.current.getBoundingClientRect();
        const position = (right + left) / 2;
        showNavbarSubmenu(position, 'admin', adminData)
    }


    return (
        <div  
            ref={itemRef}
            onClick={handleClick}
            className={`admin-section${navbarSubmenu.item !== 'admin' ? ' clicked' : ''}`}
            
        >
            <img src={require('../../Assets/profile.jpeg')} alt="" className='avatar' />
            <div className="admin-info">
                <h4 className="admin-name">Mohamed Cherif</h4>
                <h5 className="admin-position">Web developer</h5>
            </div>
        </div>
    )
}

export default Admin