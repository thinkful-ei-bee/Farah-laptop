import React from 'react';
import Processor from './Processor';
import OperatingSystem from './OperatingSystem';
import VideoCard from './VideoCard';
import Display from './Display';
import Feature from './Feature';

export default class Techspecs extends React.Component{
  render() {
    console.log(this.props.selected.Processor)
    console.log(this.props.features)
    const features = Object.keys(this.props.features)
    .map(key => {
      // const options = this.props.features[key].map((item, index) => {
      //   const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
      //   const featureClass = 'feature__option ' + selectedClass;
      //   return <li key={index} className="feature__item">
      //     <div className={featureClass}
            
      //       onClick={e => this.updateFeature(key, item)}>
      //         { item.name }
      //         ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
      //           .format(item.cost) })
      //     </div>
      //   </li>
      // });

      return (
        <Feature key={key} features={this.props.features} featureKey={key} selected={this.props.selected}  >
        </Feature>
          
        
      )

    });      

      return (
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {features}

            {/* <Processor 
              processors={this.props.features.Processor}
              selected={this.props.selected.Processor}
            />
              
            <OperatingSystem 
              operatingSytems={this.props.features.OperatingSystem}
            />

            <VideoCard 
              videoCard={this.props.features.VideoCard}
            />

            <Display 
              display={this.props.features.Display}
            /> */}
            {/* {this.props.features} */}
          
            
        </section>
      )
  }
}