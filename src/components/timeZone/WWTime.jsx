import React, { useState, useEffect } from 'react';


export default function WWTime() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getTimeInTimeZone = (timeZone) => {
    const timeOptions = {
      timeZone: timeZone,
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    return new Intl.DateTimeFormat('en-US', timeOptions).format(currentTime);
  };
  return (
    <div>
      <h2>World Clock</h2>
      <div>
        <p>New York: {getTimeInTimeZone('America/New_York')}</p>
        <p>London: {getTimeInTimeZone('Europe/London')}</p>
        <p>Tokyo: {getTimeInTimeZone('Asia/Tokyo')}</p>
        {/* Add more time zones as needed */}
      </div>
    </div>
  )
}

