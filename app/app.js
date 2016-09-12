import React from 'react';
import $ from 'jquery';
import College from './college';

class School {

    constructor(name, logo, wins, factors, styles) {
        this.name = name;
        this.logo = logo;
        this.factors = factors;
        this.wins = wins;
        this.styles = styles || {};
    }

}

class App extends React.Component {
    
    constructor() {
        super();
        this.state = {
            schools: [
                new School('BYU', 'media/byu.png', 0, {
                        bicep: 8,
                        wrist: 5,
                        savvy: 6
                    }, {
                        marginTop: '15%'
                    }),
                new School('Utah', 'media/utah.png', 0, {
                        bicep: 8,
                        wrist: 5,
                        savvy: 6
                    })
            ]
        }
        this.styles = {
            logos: {
                marginTop: "5%",
                marginBottom: "5%"
            },
            winner: {
                fontSize: "32px",
                textAlign: 'center',
                marginTop: "5%"
            },
            wrestleBtn: {
                textAlign: 'center'
            }
        }
    }

    setWinner(winner) {
        this.state.schools.forEach(function(school) {
            if (school.name == winner) {
                school.wins++;
            }
        });
        this.setState({
            schools: this.state.schools,
            winner: winner
        });
    }

    handleClick() {
        const URL = 'http://localhost:3001/wrestle';

        $.ajax({
            url: URL,
            method: 'POST',
            dataType: 'json',
            data: {
                xSchool: this.state.schools[0],
                ySchool: this.state.schools[1]
            },
            success: (data) => {
                this.setWinner(data.winner);
            }
        });
    }

    render() {
        if (this.state.winner) {
            var winner = <p style={this.styles.winner}>{this.state.winner} Wins!</p>;
        } 

        return <div className="container">
            <div style={this.styles.logos} className="row">
                <div className="col-md-4 col-md-offset-1">
                    <College school={this.state.schools[0]} />
                </div>
                <div className="col-md-4 col-md-offset-2">
                    <College school={this.state.schools[1]} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 col-md-offset-5">
                    <div style={this.styles.wrestleBtn}>
                        <button onClick={this.handleClick.bind(this)} className="btn btn-primary btn-lg">Wrestle</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    {winner}
                </div>
            </div>
        </div>;
    }
}

export default App;

