import AstronautDashboardWelcomeSection from './AstronautDashboardWelcomeSection';
import AstronautDashboardStatusSection from './AstronautDashboardStatusSection';
import AstronautDashboardUpcomingMissions from './AstronautDashboardUpcomingMissions';
import AstronautDashboardMissionHistory from './AstronautDashboardMissionHistory';

const AstronautDashboard = () => {

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
      <AstronautDashboardWelcomeSection />

      <AstronautDashboardStatusSection pastMissions={pastMissions} upcomingMissions={upcomingMissions} />

      <AstronautDashboardUpcomingMissions upcomingMissions={upcomingMissions} />

      <AstronautDashboardMissionHistory pastMissions={pastMissions} />
    </div>
  );
};

export default AstronautDashboard;
