import React from 'react';
import axios from 'axios';
import './continent.css';

class Continents extends React.Component{
    state = {
        continents: []
    }

    componentDidMount(){

        axios.get(`http://localhost:8080/continent`)
        .then(res => {
            const continents = res.data;
            this.setState({ continents });
        })
    }

    handleClick(continent){
       //viewCountries(continent);
    }
 
    render(){
        return (
               this.state.continents.map(continent => <a key={continent} onClick={ () => this.handleClick(continent) }> {continent}<br/></a>)
          )
    }
}

export default Continents;