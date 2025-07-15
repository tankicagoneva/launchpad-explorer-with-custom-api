import { useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import { Rocket, Calendar, MapPin, Star, Clock, Users } from 'lucide-react';

const AstronautDashboard = () => {
  const { user } = useUser();

  // Mock data for astronaut missions
  //TODO: Replace with real API calls to fetch astronaut missions
  const upcomingMissions = [
    {
      id: 1,
      name: "ISS Expedition 71",
      launchDate: "2025-08-15",
      launchpad: "Kennedy Space Center LC-39A",
      duration: "6 months",
      crew: 4
    },
    {
      id: 2,
      name: "Lunar Gateway Assembly",
      launchDate: "2025-12-02",
      launchpad: "Kennedy Space Center LC-39B",
      duration: "14 days",
      crew: 6
    }
  ];

  const pastMissions = [
    {
      id: 1,
      name: "ISS Expedition 70",
      completedDate: "2025-02-28",
      duration: "5 months",
      status: "Completed Successfully"
    },
    {
      id: 2,
      name: "Commercial Crew Demo",
      completedDate: "2024-11-15",
      duration: "7 days",
      status: "Completed Successfully"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Rocket className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">
              Welcome back, {user?.firstName || 'Commander'}! 🚀
            </h1>
            <p className="text-blue-100 mt-2">
              Ready for your next mission to the stars?
            </p>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-green-100 p-2 rounded-full">
              <Rocket className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Flights</p>
              <p className="text-2xl font-bold">{pastMissions.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-blue-100 p-2 rounded-full">
              <Calendar className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming Missions</p>
              <p className="text-2xl font-bold">{upcomingMissions.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Clock className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Days in Space</p>
              <p className="text-2xl font-bold">152</p>
            </div>
          </div>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex items-center space-x-3">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Star className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Mission Rating</p>
              <p className="text-2xl font-bold">4.9</p>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Missions */}
      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Calendar className="h-6 w-6 mr-2 text-blue-600" />
          Upcoming Missions
        </h2>
        <div className="space-y-4">
          {upcomingMissions.map((mission) => (
            <div key={mission.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{mission.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(mission.launchDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {mission.launchpad}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {mission.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      {mission.crew} crew
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link 
                    to={`/mission/${mission.id}`}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-sm"
                  >
                    View Details
                  </Link>
                  <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors text-sm">
                    Prepare
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-card border border-border rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <Star className="h-6 w-6 mr-2 text-yellow-600" />
          Mission History
        </h2>
        <div className="space-y-4">
          {pastMissions.map((mission) => (
            <div key={mission.id} className="border border-border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{mission.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      Completed: {new Date(mission.completedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      Duration: {mission.duration}
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                    {mission.status}
                  </span>
                  <button className="px-4 py-2 bg-muted text-muted-foreground rounded-md hover:bg-muted/80 transition-colors text-sm">
                    View Report
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AstronautDashboard;
