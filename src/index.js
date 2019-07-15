import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';

function showContry(props){
    alert (props.name);
}

class View extends React.Component{
    render(){
        return(
            <div>
                <div className="title">
                    <p> CONTINENTI TERRESTRI </p>
                </div>
                <div className="list">
                 <Continent
                 />
                </div>
                <br/><br/>
                <Footer
                />
            </div>
        );
    }
}

class Continent extends React.Component{
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
        
        <showContry name = {continent}  />;
        return "prova";
    }
 
    render(){
        return (
               this.state.continents.map(continents => <a key={continents} onClick={()=>this.handleClick(continents)}> {continents}<br/></a>)
          )
    }
}

class Country extends React.Component{

    myClick(){
        alert(this.props.continent);
    }

    render(){
        return ""; 
    }
}

class Footer extends React.Component{
    render(){
        return (
            <div className="footer">
		        <button type="button" id="backButton" value="">TORNA INDIETRO</button>
		        <input type="hidden" id="infoBackPage" value="" />
		        <input type="hidden" id="infoCurrentPage" value="" />
            </div>    
        )
    }
}

/*===============================*/
ReactDOM.render(
    <View />,
    document.getElementById('root')
  );

