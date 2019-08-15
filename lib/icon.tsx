import React from 'react';
import './icon.scss'
import './importIcons.js'

export type SvgName = 'cake' | 'smile';
export interface Props extends React.SVGProps<SVGSVGElement> {
  name: SvgName;
}


const Icon: React.FC<Props> = props => {
  const {name, ...restProps} = props
  
  return (
    <svg className="icon" {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon