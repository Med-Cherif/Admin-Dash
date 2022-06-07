import React from 'react'

interface IProps {
    text: string
}

const MainTitle = ({ text }: IProps) => {
    return (
        <h3 className="main-title">{text}</h3>
    )
}

export default MainTitle