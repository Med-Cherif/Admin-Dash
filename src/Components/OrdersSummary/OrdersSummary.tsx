import "./OrdersSummary.css"
import MainTitle from "../MainTitle"
import Table from "./Table"
import { data } from "./Table"

const OrdersSummary = () => {
    return (
        <div className="card orders-summary">
            <MainTitle text="Orders Summary" />
            <div className="table-head">
                {Object.keys(data[0]).map((key) => {
                    return <h3 className="table-head-title" key={key}>{key}</h3>
                })}
            </div>
            <Table />
        </div>
    )
}

export default OrdersSummary