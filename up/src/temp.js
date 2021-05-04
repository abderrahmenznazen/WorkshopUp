import React from 'react'
import './temp.css'


class TemperatureInput extends React.Component {
    constructor(props) {
      super(props);
    }

    handleChange = (e) =>{
      this.props.onTemperatureChange(e.target.value);
    }

    render() {
        const scaleNames = {
            c: 'Celsius',
            f: 'Fahrenheit'
          };
      const temperature = this.props.temperature;
      const scale = this.props.scale;
      return (
        <fieldset className='inp'>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  export default TemperatureInput;