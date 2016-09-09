import React from 'react';

class College extends React.Component {

    constructor() {
        super();
        
    }

    render() {
        const school = this.props.school;

        return <div>
            <div className="row">
                <div className="col-md-12">
                    <h2>{school.name}</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p>Wins: {school.wins}</p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <img width="100%" src={school.logo} />
                </div>
            </div>
        </div>;
    }
}

export default College;