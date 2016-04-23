import React from 'react'
import { connect } from 'react-redux'

import Chart from '../components/chart'
import GoogleMap from '../components/google_map'

class WeatherList extends React.Component {
  renderWeather(cityData) {
    const cityName = cityData.city.name
    const temps = cityData.list.map( (weather) => { return weather.main.temp } )
    const pressures = cityData.list.map( (weather) => { return weather.main.pressure } )
    const humidities = cityData.list.map( (weather) => { return weather.main.humidity } )
    const lon = cityData.city.coord.lon
    const lat = cityData.city.coord.lat

    return (
      <tr key={cityName}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color="orange" units="K" /></td>
        <td><Chart data={pressures} color="green" units="hPa" /></td>
        <td><Chart data={humidities} color="blue" units="%" /></td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <td>City</td>
            <td>Temperature (K)</td>
            <td>Pressure (hPa)</td>
            <td>Humidity (%)</td>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return {
    weather: state.weather
  }
}

export default connect(mapStateToProps)(WeatherList)
