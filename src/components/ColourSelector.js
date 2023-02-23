import React,{useState} from 'react';


const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const [backgroundbox,setbackgroundbox]=useState();

  const { background,label} = config;
  return (
    <button className='colorselecter' style={{"background":backgroundbox}}onClick={() => {selectNextBackground({background: background});setbackgroundbox(background)}}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
