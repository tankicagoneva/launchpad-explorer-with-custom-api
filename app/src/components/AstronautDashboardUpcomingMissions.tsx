import { Calendar, Clock,  MapPin, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const  AstronautDashboardUpcomingMissions= ({ upcomingMissions} : { upcomingMissions: any[]}) => {
  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Calendar className="h-6 w-6 mr-2 text-blue-600" />
        Upcoming Missions
      </h2>
      <div className="space-y-4">
        {upcomingMissions.map((mission) => {
          const date = new Date(mission.launchDate).toLocaleDateString();
          return (
            <div key={mission.id} className="border border-border rounded-lg p-4 hover:bg-muted/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{mission.name}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {date}
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
          );
        })}
      </div>
    </div>
  );
}


export default AstronautDashboardUpcomingMissions;
