import Launchpads from "./launchpads/page";
import { ThemeProvider } from "./components/ui/theme-provider";
import { ToastContainer } from "react-toastify";
import { useUser } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const { user, isLoaded } = useUser();
  const userRole = user?.publicMetadata?.role as string;

  if (isLoaded && user) {
    if (userRole === 'astronaut') {
      return <Navigate to="/astronaut-dashboard" replace />;
    }
    if (userRole === 'admin') {
      return <Navigate to="/dashboard" replace />;
    }
  }

  return (
    <>
      <ThemeProvider defaultTheme="system" storageKey="ui-theme">
        <div className="space-y-8 p-8">
          
          {(userRole !== 'astronaut') && <Launchpads />}
      
          <ToastContainer />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
