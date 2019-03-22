import React, { Component } from 'react';

export default class Display extends Component {
    render(){
        const display = this.props.Display.map((displays, index) => {
        const selectedClass = displays.name === this.props.displays.name ? 'feature__selected' : '';

        const featureClass = 'feature__option ' + selectedClass;
        return(
            <li key={index} className="feature__item">
             <div className={featureClass}
                  
                onClick={e => this.updateFeature(Display, displays)}>
                { displays.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(displays.cost) })
            </div>
        </li> 
        )
    });

        return(
            <div className="feature" >
              <div className="feature__name"></div>
              <ul className="feature__list">
                { display }
              </ul>
            </div>
        )
    }
}