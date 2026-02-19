import React, { useEffect, useState } from "react";

function Ok() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  const dayName = days[time.getDay()];
  const day = time.getDate();
  const year = time.getFullYear();

  const hours = String(time.getHours()).padStart(2, "0");
  const minutes = String(time.getMinutes()).padStart(2, "0");

  return (
    <div>
     {day} {dayName}  {year} {hours}:{minutes}
    </div>
  );
}

export default Ok;

