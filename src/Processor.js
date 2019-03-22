import React, { Component } from 'react';

export default class Processor extends Component {
    render(){
        const processors = this.props.processors.map((processor, index) => {
        const selectedClass = processor.name === this.props.processor.name ? 'feature__selected' : '';

        const featureClass = 'feature__option ' + selectedClass;
        return(
            <li key={index} className="feature__item">
             <div className={featureClass}
                  
                onClick={e => this.updateFeature(Processor, processor)}>
                { processor.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                    .format(processor.cost) })
            </div>
        </li> 
        )
    });

        return(
            <div className="feature" >
              <div className="feature__name"></div>
              <ul className="feature__list">
                { processors }
              </ul>
            </div>
        )
    }
    
}




    