import { useState, useEffect } from 'react';

export interface UserData {
  ip: string;
  userAgent: string;
  location: {
    country: string;
    region: string;
    city: string;
    timezone: string;
  };
  device: {
    browser: string;
    os: string;
    device: string;
    mobile: boolean;
  };
  connection: {
    isp: string;
    org: string;
  };
  timestamp: string;
}

export const useUserData = () => {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = (data: UserData) => {
    setUserData(data);
    setIsLoading(false);
    
    // Log the collected data for analytics (optional)
    console.log('User Data Collected:', data);
    
    // Store in sessionStorage for persistence during the session
    sessionStorage.setItem('userData', JSON.stringify(data));
  };

  useEffect(() => {
    // Check if we already have user data in session storage
    const existingData = sessionStorage.getItem('userData');
    if (existingData) {
      try {
        const parsedData = JSON.parse(existingData);
        setUserData(parsedData);
        setIsLoading(false);
      } catch (error) {
        console.error('Failed to parse stored user data:', error);
        // Continue with loading process
      }
    }
  }, []);

  return {
    userData,
    isLoading,
    handleLoadingComplete
  };
};

export default useUserData;
