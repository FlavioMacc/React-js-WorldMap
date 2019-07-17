import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Cities from './components/cityComponent/city';
import Countries from './components/countryComponent/country';
//import View from 'components/viewComponent/view.js'
import Continents from './components/continentComponent/continent.js';
import Footer from './components/footerComponent/footer.js';




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








/*===============================*/
/*viewContinents();

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
} */

