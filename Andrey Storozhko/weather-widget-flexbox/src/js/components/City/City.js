import React, { Component } from 'react';
import WeatherIcon from 'react-icons-weather';
import List from '../List/List';

import styles from './City.scss';

const API_KEY = '&APPID=dad4f150c54a21c6d1e40df6c6832096';
const API_DAY_URL = `http://api.openweathermap.org/data/2.5/forecast?id=`;

class City extends Component {
    constructor (props) {
        super (props);
        this.state = {
            showDetails: false,
            days: []
        }
    }

    componentDidMount() {
        fetch(API_DAY_URL + this.props.id + API_KEY)
            .then((response) => response.json())
            .then((json) => {
                this.setState({days: json})
            })
            .catch((error) => {
                console.log('Error fetching and parsing data', error);
            });
    }

    handleClick() {
        this.setState({showDetails: !this.state.showDetails})
    }

    render() {
        const { name, temp, code } = this.props;
        let weatherDetails;
        let itemClass = styles.city;
        let iconClass = styles.city__weather;
        let cityNameClass = styles.city__main;
        if (this.state.showDetails) {
            itemClass = styles['city--is-open'];
            iconClass = styles['city__weather--is-open'];
            cityNameClass = styles['city__main--is-hidden'];
            weatherDetails = (
                <List days={this.state.days}/>
            );
        }
        return (
            <React.Fragment>
                <div className={itemClass} onClick={this.handleClick.bind(this)}>
                    <WeatherIcon name="owm" iconId={''+ code} className={iconClass}/>
                    <div className={cityNameClass}>{name} / {temp.toFixed(1)}&deg;</div>
                </div>
                {weatherDetails}
            </React.Fragment>
        );
    }
}

export default City;