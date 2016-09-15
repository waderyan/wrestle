import React from 'react';
import $ from 'jquery';
import College from './college';
import lodash from 'lodash';



class School {

    constructor(name, logo, animation, wins, factors, styles) {
        this.name = name;
        this.logo = logo;
        this.animation = animation;
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
                new School('byu', 'media/byu.png', 'media/wrestling_byu_wins.gif', 0, {
                        bicep: 8,
                        wrist: 5,
                        savvy: 6
                    }, {
                        marginTop: '15%'
                    }),
                new School('utah', 'media/utah.png', 'media/wrestling_utah_wins.gif', 0, {
                        bicep: 7,
                        wrist: 4,
                        savvy: 8
                    })
            ]
        }
        this.styles = {
            logos: {
                marginTop: "2%",
                marginBottom: "2%"
            },
            winner: {
                fontSize: "32px",
                textAlign: 'center',
                marginTop: "5%"
            },
            wrestleBtn: {
                textAlign: 'center'
            },
            wrestling: {
                marginTop: '5%'
            }
        }
    }

    /**
     * Updates the win record for the winning school. 
     * 
     * @param {string} winningSchool - school that won. 
     */
    updateWinRecord(winner) {
        winner.wins++;

        this.setState({
            schools: this.state.schools,
            wrestling: false,
            winner: winner
        });
    }

    /**
     * Starts the wrestling animation. 
     * 
     * @param {string} winningSchool - school that won. 
     */
    startWrestling(winningSchool) {
        let winner;

        for (let i = 0; i < this.state.schools.length; i++) {
            let school = this.state.schools[i];
            if (winningSchool === school.name) {
                winner = school;
            }
        }

        this.setState({
            schools: this.state.schools,
            wrestling: true,
            winner: winner
        });

        setTimeout(() => {
            this.updateWinRecord(winner);
        }, 3000);
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
                this.startWrestling(data.winner);
            }
        });
    }

    render() {
        let s = this.state;

        if (s.winner) {
            if (s.wrestling) {
                var wrestling = <img width="100%" src={this.state.winner.animation + '?' + new Date().getTime()} />;
            }
            if (!s.wrestling) {
                var winner = <p style={this.styles.winner}>{capitalize(this.state.winner.name)} Wins!</p>;
            } 
        }

        return <div className="container">
            <div style={this.styles.logos} className="row">
                <div className="col-md-4 col-md-offset-1">
                    <College school={this.state.schools[1]} />
                </div>
                <div className="col-md-4 col-md-offset-2">
                    <College school={this.state.schools[0]} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-2 col-md-offset-5">
                    <div style={this.styles.wrestleBtn}>
                        <button onClick={this.handleClick.bind(this)} className="btn btn-primary btn-lg">Arm Wrestle</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div style={this.styles.wrestling} className="col-md-6 col-md-offset-3">
                    {wrestling}
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


function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

export default App;

