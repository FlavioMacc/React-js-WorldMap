import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

class ViewContinents extends React.Component{
    render(){
        return(
            <div>
                <div className="title">
                    <p> CONTINENTI TERRESTRI </p>
                </div>
                <div className="list">
                <Continents />
                </div>
                <br/><br/>
                <Footer curPage = {"index"} bkPage={null} show={"hideFooter"}
                />
            </div>
        );
    }
}

class ViewCountries extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <div className="title">
                    <p> NAZIONI DEL CONTINENTE </p>
                </div>
                <div className="list">
                <Countries continent = {this.props.continent}/>
                </div>
                <br/><br/>
                <Footer curPage = {this.props.continent} bkPage={"index"} show={"showFooter"}
                />
            </div>
        );
    }
}

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
                <Footer curPage = {this.props.coutryCode} bkPage={this.props.continent} show={"showFooter"}
                />
            </div>
        );
    }
}

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
               this.state.continents.map(continents => <a key={continents} onClick={ () => this.handleClick(continents) }> {continents}<br/></a>)
          )
    }
}

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
        viewCities(continent,country);
    }

    render(){
        return (
            this.state.countries.map(countries => <a key={countries.name} onClick={ () => this.handleClick(countries.code) }> {countries.name}<br/></a>)
          ) 
    }
}

class Cities extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cities: []
        }
    }

    componentDidMount(){

        axios.get(`http://localhost:8080/cityJdbc?nation=`+this.props.coutryCode+`&order=A-z`)
        .then(res => {
            const cities = res.data;
            this.setState({ cities });
        })
    }

    render(){
        return (
            <table>
                <tr>
                    <td>
                        <b className="headTable">NOME CITTA<button>A-z</button></b>
                    </td>
                    </tr>
                    {this.state.cities.map(cities => <tr>
                        <td className="firstColunm">
                            {cities.name}
                        </td>
                        <td className="colunm">
                            DELETE
                        </td>
                        <td className="colunm">
                            MODIFY 
                        </td>
                    </tr>)}    
            </table>
        )
    }
}

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            infoBackPage : this.props.bkPage,
            infoCurrentPage : this.props.curPage,
        }
    }

    handleClick(backPage){
        
        switch (backPage) {
            case "index":
                viewContinents();
                break;
        
            default:
                break;
        }

    }

    render(){
        return (
            <div className={this.props.show}>
		        <button type="button" id="backButton" onClick={() => this.handleClick(this.state.infoBackPage)}>TORNA INDIETRO</button>
            </div>    
        )
    }
}

/*===============================*/
viewContinents();

function viewContinents(){
    ReactDOM.render(
        <ViewContinents />,
        document.getElementById('root')
      );    
}


function viewCountries(continent)
{
    ReactDOM.render(
        <ViewCountries  continent = {continent} />,
        document.getElementById('root')
    );
}

function viewCities(continent,coutryCode)
{
    ReactDOM.render(
        <ViewCities  continent = {continent}  coutryCode = {coutryCode} />,
        document.getElementById('root')
    );
} 

