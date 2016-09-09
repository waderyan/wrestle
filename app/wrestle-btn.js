import React from 'react';
import $ from 'jquery';


class WrestleBtn extends React.Component {

    constructor() {
        super();
    }

    handleClick() {
        console.log('handleClick');
        $.ajax({
            url: 'http://localhost:3001/results',
            method: 'GET',
            dataType: 'json',
            success: () => {
                console.log('success');
            },
            error: () => {
                console.log('error');
            }
        });
    }

    render() {
        return <div>
            <button onClick={this.handleClick} className="btn btn-primary btn-lg">Wrestle</button>
        </div>;
    }
}

export default WrestleBtn;