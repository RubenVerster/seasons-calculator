import React from 'react';
import './SeasonDisplay.css';

const seasonConfig = {
  summer: {
    text: "Let's hit the beach",
    seasonIcon: 'sun',
  },
  winter: {
    text: `Burrr... It's cold...`,
    seasonIcon: 'snowflake',
  },
};

const getSeason = (latitude, month) => {
  if (month > 2 && month < 9) {
    return latitude > 0 ? 'summer' : 'winter';
  } else {
    return latitude < 0 ? 'winter' : 'summer';
  }
};

//since latitude has been passed as a prop from the App.js side, we can now use the props attribute in our component *****
const SeasonDisplay = (props) => {
  //.getMonth() is a zero index function. eg Jan = 0
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, seasonIcon } = seasonConfig[season];

  //this code is replaced by the seasonConfig operation at the start
  // const seasonText =
  //   season === 'winter' ? `Burr... it's chilly` : `Let's hit the beach`;
  // const seasonIcon = season === 'winter' ? 'snowflake' : 'sun';

  //we've extracted the logic out of our JSX to keep it cleaner
  return (
    <div className={`season-display ${season}`}>
      <i className={`${seasonIcon} massive icon icon-left`} />
      <h3>{text}</h3>
      <i className={`${seasonIcon} massive icon icon-right`} />
    </div>
  );
};

export default SeasonDisplay;
