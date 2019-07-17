import React from 'react';
import './city.css';
import axios from 'axios';



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
                        <p className="headTable"><b>NOME CITTA<button>A-z</button></b></p>
                    </td>
                    </tr>
                    {this.state.cities.map(cities => <tr>
                        <td className="firstColunm">
                            <p>{cities.name}</p>
                        </td>
                        <td className="colunm">
                            <button>DELETE</button>
                        </td>
                        <td className="colunm">
                            <button>MODIFY</button> 
                        </td>
                    </tr>)}    
            </table>
        )
    }
}

export default Cities;