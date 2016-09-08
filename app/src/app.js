import React from 'react';
import College from './college';
import WrestleBtn from './wrestle-btn';

let logos = {
    marginTop: "5%",
    marginBottom: "5%"
}

class App extends React.Component {
    
    constructor() {
        super();
    }

    render() {
        return <div className="container">
            <div style={logos} className="row">
                <div className="col-md-2"></div>
                <div className="col-md-3">
                    <College name="BYU" logo="media/byu.png"/>
                </div>
                <div className="col-md-2"></div>
                <div className="col-md-3">
                    <College name="Utah" logo="media/utah.png"/>
                </div>
                <div className="col-md-2"></div>
            </div>
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-2">
                    <WrestleBtn />
                </div>
                <div className="col-md-5"></div>
            </div>
        </div>;
    }
}

export default App;

