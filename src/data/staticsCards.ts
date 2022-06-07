import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiDollarSign } from "react-icons/fi";
import { BiGroup } from "react-icons/bi";
import { BsEnvelopeFill } from "react-icons/bs";


export const data = [
    { value: 4682, Icon: AiOutlineShoppingCart, percentage: 60, title: 'Total Orders', increasingPercentage: 4.2 },
    { value: 37952, Icon: FiDollarSign, percentage: 73, title: 'Total Revenue', increasingPercentage: 8.2 },
    { value: 150682, Icon: BiGroup, percentage: 88, title: 'Visitors', increasingPercentage: 16.2 },
    { value: 12062, Icon: BsEnvelopeFill, percentage: 30, title: 'Messages', increasingPercentage: 2.8 },
    
].map((item, i) => ({ ...item, id: i + 1 }));