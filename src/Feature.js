import React, { Component } from 'react';

export default class Product extends Component {
    render(){
    const key = this.props.featureKey;
    console.log(key)
    const options = this.props.features[key].map((item, index) => {
        const selectedClass = item.name === this.props.selected[key].name ? 'feature__selected' : '';
        const featureClass = 'feature__option ' + selectedClass;
        return <li key={index} className="feature__item">
            <div className={featureClass}
            
            onClick={e => this.props.handleUpdate(key, item)}>
                { item.name }
                ({ new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                .format(item.cost) })
            </div>
        </li>
        });

        return <div className="feature" >
        <div className="feature__name">{this.props.key}</div>
        <ul className="feature__list">
            {options}
        </ul>
      </div>
    }
}