import React from 'react';

export default function FeaturesList(props){
  return (
    <div className="feature">
        <div className="feature__name">{props.name}</div>
        <ul className="feature__list">{props.options}</ul>
      </div>
  )
}
