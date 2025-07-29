import { useUser } from '@clerk/clerk-react';
import { Rocket } from 'lucide-react';

const  AstronautDashboardWelcomeSection= () => {
  const { user } = useUser();


  return (
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

   
  );
};

export default AstronautDashboardWelcomeSection;
