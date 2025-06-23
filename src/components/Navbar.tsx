
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { User, Hotel, Search, Heart, Menu, X, LogOut } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/context/AuthContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const { isAuthenticated, logout, getUserName } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2">
          <Hotel className="h-8 w-8 text-primary" />
          <span className="font-poppins font-semibold text-xl text-primary">LodgingLounge</span>
        </Link>

        {isMobile ? (
          <>
            <Button 
              variant="ghost" 
              className="p-2" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </Button>
            
            {mobileMenuOpen && (
              <div className="fixed inset-0 top-16 bg-white z-40 animate-fade-in">
                <nav className="flex flex-col p-4 gap-4">
                  <Link 
                    to="/search" 
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Search className="h-5 w-5" />
                    <span>Search</span>
                  </Link>
                  <Link 
                    to="/favorites" 
                    className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <Heart className="h-5 w-5" />
                    <span>Favorites</span>
                  </Link>
                  <div className="mt-4 flex flex-col gap-2">
                    {isAuthenticated ? (
                      <>
                        <div className="p-2 flex items-center gap-2">
                          <User className="h-5 w-5" />
                          <span>{getUserName()}</span>
                        </div>
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2"
                          onClick={() => {
                            logout();
                            setMobileMenuOpen(false);
                          }}
                        >
                          <LogOut className="h-4 w-4" />
                          Log Out
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button 
                          variant="outline" 
                          asChild
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Link to="/login">Log In</Link>
                        </Button>
                        <Button 
                          asChild
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Link to="/register">Sign Up</Link>
                        </Button>
                      </>
                    )}
                  </div>
                </nav>
              </div>
            )}
          </>
        ) : (
          <>
            <nav className="flex items-center gap-6">
              <Link to="/search" className="flex items-center gap-1 text-gray-600 hover:text-primary transition">
                <Search className="h-4 w-4" />
                <span>Search</span>
              </Link>
              <Link to="/favorites" className="flex items-center gap-1 text-gray-600 hover:text-primary transition">
                <Heart className="h-4 w-4" />
                <span>Favorites</span>
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {getUserName()}
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/favorites" className="cursor-pointer">
                        Favorites
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/bookings" className="cursor-pointer">
                        My Bookings
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="cursor-pointer">
                      <LogOut className="h-4 w-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <>
                  <Button variant="outline" asChild>
                    <Link to="/login">Log In</Link>
                  </Button>
                  <Button asChild>
                    <Link to="/register">Sign Up</Link>
                  </Button>
                </>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
