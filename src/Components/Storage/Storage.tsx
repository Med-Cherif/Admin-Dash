import MainTitle from "../MainTitle";
import "./Storage.css";
import StorageItem from "./StorageItem";

const data = [
    { label: 'Documents', size: 150, totalSize: 250 },
    { label: 'Images', size: 350, totalSize: 612 },
    { label: 'Messages', size: 96, totalSize: 150 },
].map((item, i) => ({ ...item, id: i + 1 }));

const Storage = () => {
    return (
        <div className='card storage md-full'>
            <MainTitle text="Storage" />
            <p className="page-views-value">596/1024 GB</p>
            <hr style={{ marginBottom: 20 }} />
            <div className="storage-list">
                {data.map((item) => (
                    <StorageItem key={item.id} {...item} />
                ))}
            </div>
        </div>
    )
}

export default Storage