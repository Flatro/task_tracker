import React from 'react'

const header = ({title}) => {
    return (
        <div>
            <h1>
                {title}
            </h1>
        </div>
    )
}

header.defaultProps = {
    title: 'Task Tracker'
}

export default header
