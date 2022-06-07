import { AiOutlineSearch } from "react-icons/ai";

const InputSearch = () => {
    return (
        <div className="input-search">
            <input placeholder='Type to search...' />
            <AiOutlineSearch className="search-icon" />
        </div>
    )
}

export default InputSearch