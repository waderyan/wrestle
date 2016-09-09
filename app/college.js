import React from 'react';

class College extends React.Component {

    constructor() {
        super();
    }

    render() {
        return <div className="row">
            <div className="col-md-12">
                <img width="100%" src={this.props.logo} />
            </div>
        </div>;
    }
}

export default College;