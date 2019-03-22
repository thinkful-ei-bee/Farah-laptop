import React from 'react';

class Techspecs extends React.Component{
  render() {
      return (
        <section className="main__form">
          <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
            {this.props.techFeatures}
        </section>
      )
  }
}

export default Techspecs;