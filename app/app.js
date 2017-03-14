import React from 'react';
import $ from 'jquery';
import Franchise from './franchise';
import lodash from 'lodash';



class FranchiseData {

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
            franchises: [
                new FranchiseData('Star Wars', 'media/star_wars.png', 'media/star_wars_wins.gif', 0, {
                        bicep: 8,
                        wrist: 5,
                        savvy: 6
                    }, {
                        marginTop: '15%',
                        marginBottom: '15%'
                    }),
                new FranchiseData('Star Trek', 'media/star_trek.jpg', 'media/star_trek_wins.gif', 0, {
                        bicep: 8,
                        wrist: 5,
                        savvy: 6
                    }, {
                        marginTop: '15%',
                        marginBottom: '15%'
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
            franchises: this.state.franchises,
            wrestling: false,
            winner: winner
        });
    }

    /**
     * Starts the wrestling animation. 
     * 
     * @param {string} winningFranchise - franchise that won. 
     */
    wrestle(winningFranchise) {
        let winner;

        for(var i = 0; i < this.state.franchises.length; i++) {
            var franchise = this.state.franchises[i];
            if (winningFranchise == franchise.name) {
                winner = franchise;
            }
        }

        // lodash.forEach(this.state.franchises, (franchise) => {
        //     if (winningFranchise == franchise.name) {
        //         winner = franchise;
        //     }
        // });

        this.setState({
            franchises: this.state.franchises,
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
                franchises: this.state.franchises
            },
            success: (data) => {
                this.wrestle(data.winner);
            }
        });
    }

    render() {
        var x;
        let s = this.state;

        if (s.winner) {
            if (s.wrestling) {
                var wrestling = <img width="100%" src={this.state.winner.animation + '?' + new Date().getTime()} />;
            }
            if (!s.wrestling) {
                var winner = <p style={this.styles.winner}>{this.state.winner.name} Wins!</p>;
            } 
        }

        return <div className="container">
            <div style={this.styles.logos} className="row">
                <div className="col-md-4 col-md-offset-1">
                    <Franchise franchise={this.state.franchises[1]} />
                </div>
                <div className="col-md-4 col-md-offset-2">
                    <Franchise franchise={this.state.franchises[0]} />
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

export default App;

