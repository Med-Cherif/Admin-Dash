import { AiOutlineHome, AiOutlineAppstore } from 'react-icons/ai'
import { MdOutlineSpaceDashboard, MdErrorOutline } from 'react-icons/md'

export const data = [
    { Icon: AiOutlineHome, text: 'Home' },
    { Icon: MdOutlineSpaceDashboard, text: 'Dashboard' },
    { 
        Icon: AiOutlineAppstore, 
        text: 'Application',
        elements: [
            { id: 1, name: 'eCommerce' },
            { id: 2, name: 'Social Media' },
            { id: 3, name: 'Todos App' },
        ]
    },
    {
        Icon: MdErrorOutline,
        text: 'Errors',
    },
].map((item, index) => ({ ...item, id: index + 1 }));