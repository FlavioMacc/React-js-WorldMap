import React from 'react';
import './view.css';

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

export default View;