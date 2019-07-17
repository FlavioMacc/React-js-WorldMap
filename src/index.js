import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './index.css';
import Cities from './components/cityComponent/city';
import Countries from './components/countryComponent/country';

//=====================================================================//

class View extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div className="title">
                    <p>{this.props.titlePage}</p>
                </div>
                <div className="list">
                    {this.props.callBackComponent}
                </div><br />
                <div className={this.props.cssFooter}>
                    <Footer
                        curPage = {this.props.curPage} 
                        bkPage={this.props.bkPage} 
                        route={this.props.route} 
                    />
                </div>
            </div>
        )
    }
}

//=====================================================================//

/*

class ViewCities extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="title">
                    <p> CITTA DELLA NAZIONE </p>
                </div>
                <div className="list">
                <Cities coutryCode = {this.props.coutryCode}/>
                </div>
                <br/><br/>
                <Footer curPage = {this.props.coutryCode} bkPage={this.props.continent} route={"countries"} show={"showFooter"}
                />
            </div>
        );
    }
}*/

//=====================================================================//

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
        viewCountries(continent);
    }
 
    render(){
        return (
               this.state.continents.map(continent => <a key={continent} onClick={ () => this.handleClick(continent) }> {continent}<br/></a>)
          )
    }
}

//===================================================================//

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);  
    }

    handleClick(){
        switch (this.props.route) {
            case "continents":
                viewContinents();
                break;

            case "countries":
                //viewCountries(this.props.bkPage);
            break;    
        
            default:
                break;
        }
    }

    render(){
        return (
		        <button type="button" id="backButton" onClick={this.handleClick}>TORNA INDIETRO</button>    
        )
    }
}

/*===============================*/
viewContinents();

function viewContinents(){
    ReactDOM.render(
        <View   
            titlePage={"CONTINENTI TERRESTRI"} 
            callBackComponent={<Continents />}
            cssFooter={"hideFooter"}

            curPage = {"index"} 
            bkPage={null} 
            route={null}
        />,
        document.getElementById('root')
      );    
}


function viewCountries(continent)
{
    ReactDOM.render(
        <View
            titlePage={"NAZIONI DEL CONTINENTE"} 
            callBackComponent={<Countries continent = {continent} />}
            cssFooter={"showFooter"}

            curPage = {continent} 
            bkPage={null} 
            route={"continents"}
        />,
        document.getElementById('root')
    );
}

function viewCities(continent,coutryCode)
{
    ReactDOM.render(
        <View   
            titlePage={"NAZIONI DEL CONTINENTE"} 
            callBackComponent={<Cities continent = {continent}  coutryCode = {coutryCode} />}
            cssFooter={"showFooter"}

            curPage = {continent} 
            bkPage={null} 
            route={"continents"}
        />,
        document.getElementById('root')
    );
} 

