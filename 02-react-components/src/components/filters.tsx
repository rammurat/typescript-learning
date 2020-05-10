import React from 'react'
import ReactDOM from 'react-dom'

interface FiltersProps{
    order: 'string',
    theme: object
}

class Filters extends React.Component<FiltersProps, {}> {
    render() {
        return (
            <div className="t-filters">
                <p>Current theme: {this.props.theme}</p>
            </div>
        )
    }
}

export default Filters