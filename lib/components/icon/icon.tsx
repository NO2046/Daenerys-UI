import React from 'react';
import './icon.scss'
import './importIcons.js'
import { formatClasses } from '../../utils'

export type SvgName = 'cake' | 'smile';
export interface Props extends React.SVGProps<SVGSVGElement> {
  name: SvgName;
}


const Icon: React.FC<Props> = props => {
  const {name, className,  ...restProps} = props
  
  return (
    <svg 
      {...restProps}
      className={ formatClasses('icon',className) } 
    >
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}

export default Icon