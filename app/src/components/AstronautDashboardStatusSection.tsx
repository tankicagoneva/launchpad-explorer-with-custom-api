import { Calendar, Clock, Rocket, Star } from 'lucide-react';

const  AstronautDashboardStatusSection= ({pastMissions, upcomingMissions} : {pastMissions: any[], upcomingMissions: any[]}) => {


  return (
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
   
  );
};

export default AstronautDashboardStatusSection;
