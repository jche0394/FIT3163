import { useEffect, useState } from 'react';

export default function UpcomingRaces() {
  const [races, setRaces] = useState([]);

  useEffect(() => {
    fetch('https://ergast.com/api/f1/current.json')
      .then((res) => res.json())
      .then((data) => {
        const all = data.MRData.RaceTable.Races;
        const today = new Date();
        const upcoming = all.filter((r) => new Date(r.date) >= today).slice(0, 5);
        setRaces(upcoming);
      })
      .catch(() => {
        setRaces([]);
      });
  }, []);

  if (!races.length) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <ul className="space-y-1">
      {races.map((race) => (
        <li key={race.round}>
          {race.Circuit.Location.country} GP –{' '}
          {new Date(race.date).toLocaleDateString()}
        </li>
      ))}
    </ul>
  );
}
