import React from 'react';
import $ from 'jquery';


class WrestleBtn extends React.Component {

    constructor() {
        super();
    }

    handleClick() {
        $.ajax({
            url: 'http://localhost:3001/results',
        
        });
    }

    render() {
        return <div>
            <button onClick={this.handleClick} className="btn btn-primary btn-lg">Wrestle</button>
        </div>;
    }
}

export default WrestleBtn;