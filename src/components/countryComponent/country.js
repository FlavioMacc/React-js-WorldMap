import React from 'react';
import axios from 'axios';
import './country.css';

class Countries extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            countries: []
        }
    }

    componentDidMount(){

        axios.get(`http://localhost:8080/nationjdbc?continent=`+this.props.continent)
        .then(res => {
            const countries = res.data;
            this.setState({ countries });
        })
    }

    handleClick(country){
        var continent = this.props.continent;
       //viewCities(continent,country);
    }

    render(){
        return (
            this.state.countries.map(countries => <a key={countries.name} onClick={ () => this.handleClick(countries.code) }> {countries.name}<br/></a>)
          ) 
    }
}

export default Countries;