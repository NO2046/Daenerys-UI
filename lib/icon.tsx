import React from 'react';
import './icon.scss'
import './importIcons.js'


interface IconProps {
  name: string
}

const Icon: React.FunctionComponent<IconProps> = (props) => {
  return (
    <svg className="icon">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}

export default Icon