import React, { useState } from 'react';
import DashboardCard from '../components/DashboardCard';

export default function PredictionsPage() {
  const [qualifyingPredictions] = useState([
    { position: 1, driver: 'Max Verstappen', probability: '38%' },
    { position: 2, driver: 'Lando Norris', probability: '22%' },
    { position: 3, driver: 'Charles Leclerc', probability: '15%' },
  ]);

  const [racePredictions] = useState([
    { position: 1, driver: 'Max Verstappen', probability: '35%' },
    { position: 2, driver: 'Lando Norris', probability: '20%' },
    { position: 3, driver: 'Charles Leclerc', probability: '12%' },
  ]);

  return (
    <div className="p-6 font-sans text-gray-800 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-center md:text-left">Predictions</h1>

      <DashboardCard title="Q3 Qualifying Prediction">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Pos</th>
                <th className="pb-2">Driver</th>
                <th className="pb-2">Probability</th>
              </tr>
            </thead>
            <tbody>
              {qualifyingPredictions.map((row) => (
                <tr key={row.position} className="border-t">
                  <td className="py-1 pr-4">{row.position}</td>
                  <td className="py-1 pr-4">{row.driver}</td>
                  <td className="py-1">{row.probability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">Automatically generated from practice, Q1 and Q2 data (F2).</p>
      </DashboardCard>

      <DashboardCard title="Race Outcome Prediction">
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Pos</th>
                <th className="pb-2">Driver</th>
                <th className="pb-2">Probability</th>
              </tr>
            </thead>
            <tbody>
              {racePredictions.map((row) => (
                <tr key={row.position} className="border-t">
                  <td className="py-1 pr-4">{row.position}</td>
                  <td className="py-1 pr-4">{row.driver}</td>
                  <td className="py-1">{row.probability}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">Based on start position and practice race pace (F3).</p>
      </DashboardCard>
    </div>
  );
}
