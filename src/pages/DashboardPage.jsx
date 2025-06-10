import DashboardCard from '../components/DashboardCard';

export default function DashboardPage() {
  return (
    <div className="p-6 font-sans text-gray-800">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
        Dashboard Overview
      </h1>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Elo Rating History */}
        <DashboardCard title="Elo Rating History">
          <div className="flex flex-col h-60 p-4 bg-white rounded shadow-inner">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm">Filter by:</label>
              <select className="border px-2 py-1 text-sm rounded">
                <option>Driver</option>
                <option>Constructor</option>
                <option>Driver-Car Pair</option>
              </select>
            </div>
            <div className="flex-1 bg-gray-100 rounded flex items-center justify-center text-gray-500 text-sm text-center px-4">
              [Line Chart Placeholder]<br />
              Elo trend by event (zoom, pan, filter supported)
            </div>
          </div>
        </DashboardCard>

        {/* Quick Stats Summary */}
        <DashboardCard title="Quick Stats">
          <div className="flex flex-col h-60 p-4 bg-white rounded shadow-inner justify-between">
            <div className="space-y-2 text-gray-700 text-sm">
              <div><strong>Top Elo-ranked drivers:</strong> Verstappen, Norris, Leclerc</div>
              <div><strong>Avg Elo (Grid):</strong> 1512</div>
              <div><strong>Total races:</strong> 23</div>
              <div><strong>Avg Pit Stops per Race:</strong> 2.7</div>
              <div><strong>Most Overtakes:</strong> Alonso (137)</div>
            </div>
            <div className="mt-2 text-xs text-gray-500 text-center">
              Updated after each event. Responsive typography.
            </div>
          </div>
        </DashboardCard>

        {/* Upcoming Races */}
        <DashboardCard title="Upcoming Races">
          <div className="h-60 p-4 bg-white rounded shadow-inner text-sm text-gray-700">
            <ul className="space-y-1">
              <li>🏁 Canada GP – Jun 16</li>
              <li>🇦🇹 Austria GP – Jun 30</li>
              <li>🇬🇧 Silverstone GP – Jul 7</li>
              <li>🇭🇺 Hungary GP – Jul 21</li>
              <li>🇧🇪 Belgium GP – Jul 28</li>
            </ul>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Timings converted to local time. Auto-sync enabled.
            </p>
          </div>
        </DashboardCard>

        {/* Constructor Comparison */}
        <DashboardCard title="Constructor Leaderboard">
          <div className="h-60 p-4 bg-white rounded shadow-inner text-sm">
            <ol className="list-decimal list-inside space-y-1 text-gray-700">
              <li>Red Bull – 520 pts</li>
              <li>Ferrari – 455 pts</li>
              <li>McLaren – 392 pts</li>
              <li>Mercedes – 311 pts</li>
              <li>Aston Martin – 210 pts</li>
            </ol>
            <p className="text-xs text-gray-500 mt-3 text-center">
              Points updated after each race (F3, F5).
            </p>
          </div>
        </DashboardCard>

        {/* Race Incident Summary */}
        <DashboardCard title="Race Incidents & DNFs">
          <div className="h-60 p-4 bg-white rounded shadow-inner text-sm text-gray-700">
            <ul className="space-y-1">
              <li>🇲🇨 Monaco – 3 DNFs (crash, gearbox, power unit)</li>
              <li>🇮🇹 Imola – 2 penalties (unsafe release, track limits)</li>
              <li>🇪🇸 Barcelona – 1 red flag, 5 warnings</li>
            </ul>
            <p className="text-xs text-gray-500 mt-4 text-center">
              Sourced from official FIA event logs (NF1, F6).
            </p>
          </div>
        </DashboardCard>

        {/* Top Speed Highlights */}
        <DashboardCard title="Top Speed Highlights">
          <div className="h-60 p-4 bg-white rounded shadow-inner flex flex-col justify-between text-sm text-gray-700">
            <div>
              <div><strong>Top Speed (2025):</strong> Sainz – 356.4 km/h (Baku)</div>
              <div><strong>Avg Speed Monza:</strong> 251.7 km/h</div>
              <div><strong>Slowest Sector:</strong> Monaco S2 – 94.3 km/h</div>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Based on GPS telemetry data.
            </p>
          </div>
        </DashboardCard>

      </div>

      {/* Footer Sync Info */}
      <div className="mt-6 text-xs text-gray-500 text-right">
        Last synced with official API: <strong>6 minutes ago</strong> (Auto-updates daily, no manual input required)
      </div>
    </div>
  );
}

