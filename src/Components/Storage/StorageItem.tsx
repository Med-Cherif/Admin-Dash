
interface IProps {
    id: number;
    label: string;
    size: number;
    totalSize: number;
}

const colors = [
    "#17a00e",
    "#1495ff",
    "#f41127",
]

const StorageItem = ({ id, label, size, totalSize }: IProps) => {
    
    const percentage = size * 100 / totalSize
    return (
        <div className='storage-item'>
            <span className='storage-item-label'>{label} {size}GB</span>
            <div className='storage-progress'>
                <span className="storage-progress-span" style={{ width: `${percentage}%`, backgroundColor: colors[(id - 1) % colors.length] }} />
            </div>

        </div>
    )
}

export default StorageItem