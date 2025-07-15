import { Outlet } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton, useUser } from '@clerk/clerk-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { ThemeProvider } from './ui/theme-provider';

const Layout = () => {
  const { user } = useUser();
  const userRole = user?.publicMetadata?.role as string;

  return (
    <ThemeProvider defaultTheme="system" storageKey="ui-theme">
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border bg-card">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link to="/"><img src={logo} alt="Launchpad explorer logo" className="h-8 w-auto" /></Link>
              
              <SignedIn>
                <nav className="flex items-center space-x-6">
                  <Link 
                    to="/launches" 
                    className="text-foreground hover:text-primary transition-colors font-medium"
                  >
                    Launches
                  </Link>
                  
                  {userRole === 'astronaut' && (
                    <Link 
                      to="/astronaut-dashboard" 
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      Dashboard
                    </Link>
                  )}
                  
                  {userRole === 'admin' && (
                    <Link 
                      to="/admin-dashboard" 
                      className="text-foreground hover:text-primary transition-colors font-medium"
                    >
                      Dashboard
                    </Link>
                  )}
                </nav>
              </SignedIn>
            </div>
            
            <div className="flex items-center space-x-4">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors">
                    Sign In
                  </button>
                </SignInButton>
                 <SignUpButton mode="modal">
                <button className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors">
                  Sign Up
                </button>
                </SignUpButton>
              </SignedOut>
              
              <SignedIn>
                <UserButton 
                  afterSignOutUrl="/"
                  appearance={{
                    elements: {
                      avatarBox: "h-8 w-8"
                    }
                  }}
                />
              </SignedIn>

            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <Outlet />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default Layout;
