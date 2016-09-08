import React from 'react';

class College extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div>
            <div>{ this.props.name }</div>
            <img src="{this.props.logo}" />
        </div>;
    }
}

export default College;