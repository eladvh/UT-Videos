import React from 'react';

const seasonConfig = {
  summer: {
    text: "Baby, it's hot outside!",
    iconName: "fa fa-thermometer",
    iconColor: "red"
  },
  winter: {
    text: "Baby, it's cold outside!",
    iconName: "fa fa-thermometer-empty",
    iconColor: "blue"
  }
}

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat > 0 ? 'winter' : 'summer';
  }
}

const SeasonDisplay = props => {
  const season = getSeason(props.lat, new Date().getMonth());
  //const text = season === 'winter' ? 'Baby, it\'s cold outside' : 'Baby, It\'s Hot Outside';
  //const iconName = season === 'winter' ? 'fa fa-thermometer-empty' : 'fa fa-thermometer';
  //const iconColor = season === 'winter' ? 'blue' : 'red';
  const { text, iconName, iconColor } = seasonConfig[season];

  return (
  <div>
    <div style={{textAlign: "center"}}>
      <h1>{text}&nbsp;
        <i className={`${iconName}`} style={{color: `${iconColor}`}}></i>
      </h1>
    </div>
  </div>
  )
}

export default SeasonDisplay;