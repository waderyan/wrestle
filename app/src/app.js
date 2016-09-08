import React from 'react';
import College from './college';

class App extends React.Component {
    
    constructor() {
        super();
        this.styles = {
            backgroundColor: '#000'
        };
    }

    render() {
        return <div className="row">
            <div className="col-md-6">
                <College name="byu" logo="byu.png"/>
            </div>
            <div className="col-md-6">
                <College name="utah" logo="utah.png"/>
            </div>
        </div>;
    }
}

export default App;

