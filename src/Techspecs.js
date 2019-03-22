import React from 'react';
import Processor from './Processor';
import OperatingSystem from './OperatingSystem';
import VideoCard from './VideoCard';
import Display from './Display';

export default class Techspecs extends React.Component{
  render() {
      return (
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            <Processor 
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
            />
            {/* {this.props.features} */}
            {console.log(this.props.features)}
          )}
            
        </section>
      )
  }
}