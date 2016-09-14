import React from 'react';

class College extends React.Component {

    constructor() {
        super();
        this.styles = {
            schoolName: {
                fontSize: '32px'
            },
            wins: {
                fontSize: '24px'
            }
        }
        
    }

    render() {
        const school = this.props.school;

        return <div>
            <div className="row">
                <div style={school.styles} className="col-md-12">
                    <img width="100%" src={school.logo} />
                </div>
            </div>
        </div>;
    }
}

export default College;