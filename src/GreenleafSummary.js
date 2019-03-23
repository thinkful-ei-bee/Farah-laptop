import React, { Component } from 'react';
import ItemPrice from './ItemPrice';

export default class GreenleafSummary extends Component {
    render() {
        const summary = Object.keys(this.props.selected)
          .map(key => {
            return (
             <ItemPrice key={key} itemKey={key} selected={this.props.selected} ></ItemPrice>
              )
          })

    const total = Object.keys(this.props.selected)
    .reduce((acc, curr) => acc + this.props.selected[curr].cost, 0);  

    return(
        <>
        <h3>NEW GREENLEAF 2018</h3>
            {summary}  
            {total}
        </>
    )
    }
}