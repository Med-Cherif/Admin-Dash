import "./Navbar.css";
import Admin from "./Admin";
import InputSearch from "./InputSearch";
import { data } from "../../data/navbar";
import Item from "./Item";

const Navbar = () => {
    return (
        <nav>
            <InputSearch />
            <div className="navbar-right">
                <ul className="navbar-right-list">
                    {data.map((item) => (
                        <Item key={item.id} {...item} />
                    ))}
                </ul>
                <span className="vertical-line" />
                <Admin />
            </div>
        </nav>
    )
}

export default Navbar