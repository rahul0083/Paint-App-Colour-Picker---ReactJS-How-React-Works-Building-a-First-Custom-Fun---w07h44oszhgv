import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background,label} = config;
  return (
    <button className='colorselecter' onClick={() => selectNextBackground({background: background})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
