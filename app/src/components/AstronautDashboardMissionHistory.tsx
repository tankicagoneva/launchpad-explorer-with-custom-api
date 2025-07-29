import { Calendar, Clock, Star } from 'lucide-react';

const  AstronautDashboardMissionHistory= ({pastMissions } : {pastMissions: any[]}) => {

  return (
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

   
  );
};

export default AstronautDashboardMissionHistory;
