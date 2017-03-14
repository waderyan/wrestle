import React from 'react';

class Franchise extends React.Component {

    constructor() {
        super();
        this.styles = {
            name: {
                fontSize: '32px'
            },
            wins: {
                fontSize: '24px'
            }
        }

    }

    render() {
        const franchise = this.props.franchise;

        return <div>
            <div className="row">
                <div className="col-md-12">
                </div>
            </div>
            <div className="row">
                <div style={franchise.styles} className="col-md-12">
                    <img width="100%" src={franchise.logo} />
                </div>
            </div>
        </div>;
    }
}

export default Franchise;

// <p style={this.styles.wins}>Wins: {franchise.wins}</p>