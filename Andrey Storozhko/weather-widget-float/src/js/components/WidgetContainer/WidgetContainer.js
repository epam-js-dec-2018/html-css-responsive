import React, { Component } from 'react';
import Widget from '../Widget/Widget';
import 'whatwg-fetch';

const citiesIdList = {
    "moscow": 524901,
    "saint_petersburg": 498817,
    "london": 2643743,
    "new_york": 5128638,
    "shanghai": 1796236,
    "washington": 5815135
};
const API_KEY = '&APPID=dad4f150c54a21c6d1e40df6c6832096';
const API_CITY_URL = `http://api.openweathermap.org/data/2.5/group?id=${Object.values(citiesIdList).join(',')}&units=metric${API_KEY}`;

class WidgetContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            cities: []
        }
    }

    componentDidMount() {
        fetch(API_CITY_URL)
            .then((response) => response.json())
            .then((json) => {
                this.setState({cities: json.list})
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }

    render() {
        return <Widget cities={this.state.cities}/>
    }
}

export default WidgetContainer;