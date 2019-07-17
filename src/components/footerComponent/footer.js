import React from 'react';
import './footer.css';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);  
    }

    handleClick(){
        switch (this.props.route) {
            case "continents":
                //viewContinents();
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
            <div className={this.props.cssFooter}>
                <button type="button" id="backButton" onClick={this.handleClick}>TORNA INDIETRO</button>
            </div>
		            
        )
    }
}

export default Footer;