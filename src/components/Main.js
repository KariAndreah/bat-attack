import React, { Component } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import PlayerCard from './PlayerCard';
import StatsBox from './StatsBox';
import './Main.css';
import mlblogo from '../images/mlblogo.jpg';
import LineGraph from './LineGraph';



class Main extends Component {
    /**
     * Constructor that gets all 3 batters basic info and 
     * then over data for each batter and puts it into an 
     * object that I can use
     **/
    constructor() {
        super();
        this.state = {
            batters: [],
            batter_one: [],
            batter_two: [],
            batter_three: [],
            batter_prop_passed: [],
            batter_one_image: '',
            batter_two_image: '',
            batter_three_image: '',
            batter_image_passed: '',
            batter_one_stats: [],
            batter_two_stats: [],
            batter_three_stats: [],
            batter_stats_passed: [],
        }
        this.handleBatterOneClick = this.handleBatterOneClick.bind(this)
        this.handleBatterTwoClick = this.handleBatterTwoClick.bind(this)
        this.handleBatterThreeClick = this.handleBatterThreeClick.bind(this)
    }

    /**
     * Function gets the temporary token, and stores it into Cookies 
     * with expiration in 1 day
     * So you don't have to call for tempToken each load
     * 
     */
    async getTempToken() {
        axios.get('https://project.trumedianetworks.com/api/token', {
            headers: {
                'apiKey': `199b9b1a-1973-4aa9-9f7c-f22b9a9b4cbe`
            }
        })
            .then(response => response.data)
            .then((data) => {
                this.setState({ tempToken: data['token'] })
                Cookies.set('tempToken', data['token'], { expires: 1 })
            })
            .catch((e) => {
                console.error(e);
            })
    }


    /**
     * Function gets all the basic batter data, and stores it an object
     * Also gets the batter Id state to use in next api call
     */
    async getAllBatters() {
        let tempToken = Cookies.get('tempToken')
        axios.get('https://project.trumedianetworks.com/api/mlb/players', {
            headers: {
                'tempToken': tempToken
            }
        })
            .then(response => response.data)
            //Setting state with Batter data 
            .then((data) => {
                // Changing state for passing into child components
                this.setState({ batter_one: data[0] })
                //console.log(this.state.batter_one)
                this.setState({ batter_two: data[1] })
                this.setState({ batter_three: data[2] })

                //Saving batter id cookies for next api call 
                Cookies.set('batter_one_id', this.state.batter_one['playerId'])
                Cookies.set('batter_two_id', this.state.batter_two['playerId'])
                Cookies.set('batter_three_id', this.state.batter_three['playerId'])

                //Fixing Image url for batter one 
                let batter_one_image = this.state.batter_one['playerImage']
                let new_batter_one_image = batter_one_image.slice(0, 8) + batter_one_image.slice(12)
                this.setState({ batter_one_image: new_batter_one_image })
                //console.log(this.state.batter_one_image)

                //Fixing Image url for batter two 
                let batter_two_image = this.state.batter_two['playerImage']
                let new_batter_two_image = batter_two_image.slice(0, 8) + batter_two_image.slice(12)
                this.setState({ batter_two_image: new_batter_two_image })
                //console.log(this.state.batter_two_image)

                //Fixing Image url for batter three 
                let batter_three_image = this.state.batter_three['playerImage']
                let new_batter_three_image = batter_three_image.slice(0, 8) + batter_three_image.slice(12)
                this.setState({ batter_three_image: new_batter_three_image })
                //console.log(this.state.batter_three_image)
            })
            .catch((e) => {
                console.error(e);
            })
    }


    //
    async getAllBattersStats() {
        let tempToken = Cookies.get('tempToken')
        let batter_one_id = Cookies.get('batter_one_id')
        let batter_two_id = Cookies.get('batter_two_id')
        let batter_three_id = Cookies.get('batter_three_id')

        //Getting Batter one stats over time 
        axios.get(`https://project.trumedianetworks.com/api/mlb/player/${batter_one_id}`, {
            headers: {
                'tempToken': tempToken
            }
        })
            .then(response => response.data)
            //Setting state with Batter data 
            .then((data) => {
                this.setState({ batter_one_stats: data })
                this.setState({ batter_prop_passed: this.state.batter_one })
                this.setState({ batter_image_passed: this.state.batter_one_image })
                this.setState({ batter_stats_passed: this.state.batter_one_stats })
                //console.log(this.state.batter_one_stats)
            })
            .catch((e) => {
                console.error(e);
            })

        //Getting Batter two stats over time 
        axios.get(`https://project.trumedianetworks.com/api/mlb/player/${batter_two_id}`, {
            headers: {
                'tempToken': tempToken
            }
        })
            .then(response => response.data)
            //Setting state with Batter data 
            .then((data) => {
                this.setState({ batter_two_stats: data })
                //console.log(this.state.batter_two_stats)
            })
            .catch((e) => {
                console.error(e);
            })

        //Getting Batter three stats over time 
        this.getAllBatters()
        axios.get(`https://project.trumedianetworks.com/api/mlb/player/${batter_three_id}`, {
            headers: {
                'tempToken': tempToken
            }
        })
            .then(response => response.data)
            //Setting state with Batter data 
            .then((data) => {
                this.setState({ batter_three_stats: data })
                //console.log(this.state.batter_three_stats)
            })
            .catch((e) => {
                console.error(e);
            })
    }


    /**
     * When component mounts all api calls occur
     */
    componentDidMount() {
        this.getTempToken()
        this.getAllBatters()
        this.getAllBattersStats()

    }


    // Handle when batter one is selected 
    handleBatterOneClick() {
        this.setState({ batter_prop_passed: this.state.batter_one })
        this.setState({ batter_image_passed: this.state.batter_one_image })
        this.setState({ batter_stats_passed: this.state.batter_one_stats })
    }

    // Handle when batter two is selected 
    handleBatterTwoClick() {
        this.setState({ batter_prop_passed: this.state.batter_two })
        this.setState({ batter_image_passed: this.state.batter_two_image })
        this.setState({ batter_stats_passed: this.state.batter_two_stats })
    }

    // Handle when batter three is selected 
    handleBatterThreeClick() {
        this.setState({ batter_prop_passed: this.state.batter_three })
        this.setState({ batter_image_passed: this.state.batter_three_image })
        this.setState({ batter_stats_passed: this.state.batter_three_stats })
    }


    render() {
        //Props being passed to children
        const { batter_prop_passed, batter_image_passed, batter_stats_passed, batter_one, batter_one_image, batter_one_stats, batter_two_image, batter_three_image, batter_three, batter_two } = this.state;
        return <div className='main_page'>
            <div className="top_header_container">
                <div className="logo_name_container">
                    <img className='logo' src={mlblogo} alt='MLB Logo' />
                    <h2 className="project_name">Bat Attack</h2>
                </div>
                <h2 className="batter_selector">Choose your batter:</h2>
                <div>
                    <button className="selector_button" onClick={this.handleBatterOneClick}>
                        <img className="button_image" src={batter_one_image} alt="Batter One Image" onClick={this.myfunction} />
                        <h3 className="button_name">{batter_one['fullName']}</h3>
                    </button>
                </div>
                <div>
                    <button className="selector_button" onClick={this.handleBatterTwoClick}>
                        <img className="button_image" src={batter_two_image} alt="Batter Two Image" onClick={this.myfunction} />
                        <h3 className="button_name">{batter_two['fullName']}</h3>
                    </button>
                </div>
                <div>
                    <button className="selector_button" onClick={this.handleBatterThreeClick}>
                        <img className="button_image" src={batter_three_image} alt="Batter Three Image" onClick={this.myfunction} />
                        <h3 className="button_name">{batter_three['fullName']}</h3>
                    </button>
                </div>
            </div>
            <div className="pic_stats">
                <PlayerCard batter_one={batter_prop_passed}
                    batter_one_image={batter_image_passed} />
                <StatsBox batter_one={batter_prop_passed}
                    batter_one_stats={batter_stats_passed} />
            </div>
            <div className='line_chart_container'>
                <LineGraph batter_one_stats={batter_stats_passed} />
            </div>
            <div className='glossary_container'>
                <table className='glossary_table'>
                    <thead>
                        <tr>
                            <th className='glossary_header' colSpan="3">Glossary</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='stats'>AB: At Bat</td>
                            <td className='stats'>H: Hits</td>
                            <td className='stats'>HR: Home Runs</td>
                        </tr>
                        <tr>
                            <td className='stats'>RBI: Runs Batted In</td>
                            <td className='stats'>AVG: Batting Average</td>
                            <td className='stats'>OBP: Total On Base Percentage</td>
                        </tr>
                        <tr>
                            <td className='stats'>SLG: Slugging</td>
                            <td className='stats'>OPS: On Base Percentage Plus Slugging</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    }
}




export default Main;
