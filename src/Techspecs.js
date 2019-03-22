import React from 'react';
import FeaturesList from './FeaturesList';

class Techspecs extends React.Component{
  render() {
    



      return (
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
          {console.log(this.props.selected)}
          {this.props.selected.map(feature => 
            <FeaturesList 
               name={feature.name}
               cost={feature.cost}
            /> 
          )}
            
        </section>
      )
  }
}

export default Techspecs;