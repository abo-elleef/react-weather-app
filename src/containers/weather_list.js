import React, {Component} from 'react';
import Chart from './../components/chart'
import {connect} from 'react-redux';
import GoogleMap from './../components/google_map'

class WeatherList extends Component {
    renderWeather(city) {
        console.log(city);
        const name = city.city.name
        const temps = city.list.map(weather => weather.main.temp);
        const humiditys = city.list.map(weather => weather.main.humidity);
        const pressures = city.list.map(weather => weather.main.pressure);
        const {lon, lat} = city.city.coord;
        console.log(humiditys)
        return (
            <tr key={name}>
                <td>
                    <GoogleMap lng={lon} lat={lat} />
                    {name}
                </td>
                <td><Chart data={temps} color='red' unit='K'/></td>
                <td><Chart data={pressures} color='yellow' unit='Hpa'/></td>
                <td><Chart data={humiditys} color='orange' unit='%'/></td>
            </tr>
        )
    }

    render() {
        console.log(this.props.weather)
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>city</th>
                    <th>Temperature</th>
                    <th>pressure</th>
                    <th>Humidity</th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather}
}

export default connect(mapStateToProps)(WeatherList)