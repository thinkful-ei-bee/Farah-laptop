import React from 'react';
import Feature from './Feature';

export default class Techspecs extends React.Component{
  render() {
    console.log(this.props.selected.Processor)
    console.log(this.props.features)
    const features = Object.keys(this.props.features)
    .map(key => {

      return (
        <Feature key={key} features={this.props.features} featureKey={key} selected={this.props.selected}  >
        </Feature>
      )

    });      

      return (
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}
        </section>
      )
  }
}