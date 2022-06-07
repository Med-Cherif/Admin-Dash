
import { AiOutlineAppstore, AiOutlineTeam, AiOutlineUser, AiOutlineSetting } from 'react-icons/ai';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { FiMessageSquare } from 'react-icons/fi';



export const data = [
    { 
        Icon: AiOutlineAppstore, 
        item: 'apps', 
        badge: null,
        elements: [
            { item: 'Teams', Icon: AiOutlineTeam },
            { item: 'Teams', Icon: AiOutlineTeam },
            { item: 'Teams', Icon: AiOutlineTeam },
            { item: 'Teams', Icon: AiOutlineTeam },
            { item: 'Teams', Icon: AiOutlineTeam },
            { item: 'Teams', Icon: AiOutlineTeam },
        ].map((item, i) => ({ ...item, id: i + 1 }))
    },

    { 
        Icon: MdOutlineNotificationsNone, 
        item: 'notifications', 
        badge: 6,
        elements: [
            { event: 'New Customers', message: '3 new users registered', createdAt: '2 min ago', Icon: AiOutlineTeam },
            { event: 'New Customers', message: '3 new users registered', createdAt: '2 min ago', Icon: AiOutlineTeam },
            { event: 'New Customers', message: '3 new users registered', createdAt: '2 min ago', Icon: AiOutlineTeam },
            { event: 'New Customers', message: '3 new users registered', createdAt: '2 min ago', Icon: AiOutlineTeam },
            { event: 'New Customers', message: '3 new users registered', createdAt: '2 min ago', Icon: AiOutlineTeam },
        ].map((item, i) => ({ ...item, id: i + 1 }))
    },

    { 
        Icon: FiMessageSquare, 
        item: 'messages', 
        badge: 12,
        elements: [
            { name: 'Mohamed Cherif', message: 'Hello Admin, There\'s new report', createdAt: '2 min ago', image: require('../Assets/profile.jpeg') },
            { name: 'Mohamed Cherif', message: 'Hello Admin, There\'s new report', createdAt: '2 min ago', image: require('../Assets/profile.jpeg') },
            { name: 'Mohamed Cherif', message: 'Hello Admin, There\'s new report', createdAt: '2 min ago', image: require('../Assets/profile.jpeg') },
            { name: 'Mohamed Cherif', message: 'Hello Admin, There\'s new report', createdAt: '2 min ago', image: require('../Assets/profile.jpeg') },
            { name: 'Mohamed Cherif', message: 'Hello Admin, There\'s new report', createdAt: '2 min ago', image: require('../Assets/profile.jpeg') },
        ].map((item, i) => ({ ...item, id: i + 1 }))
    },
].map((item, index) => ({ ...item, id: index + 1 }))

export const adminData = [
    { item: 'Profile', Icon: AiOutlineUser },
    { item: 'Setting', Icon: AiOutlineSetting },
    
].map((item, index) => ({ ...item, id: index + 1 }));