import { useEffect, useState } from 'react';

export default function DriverStandings() {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/current/driverStandings.json')
      .then((res) => res.json())
      .then((data) => {
        const standings =
          data.MRData.StandingsTable.StandingsLists[0].DriverStandings;
        setDrivers(standings.slice(0, 5));
      })
      .catch(() => {
        setDrivers([]);
      });
  }, []);

  if (!drivers.length) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <ol className="list-decimal list-inside space-y-1">
      {drivers.map((driver) => (
        <li key={driver.Driver.driverId}>
          {driver.Driver.familyName} – {driver.points} pts
        </li>
      ))}
    </ol>
  );
}
