import React, { useState, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, Shield, Eye, Globe, Monitor, Clock } from 'lucide-react';

interface UserData {
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

interface LoadingPageProps {
  onComplete: (userData: UserData) => void;
}

const LoadingPage: React.FC<LoadingPageProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState('Initializing...');
  const [userData, setUserData] = useState<Partial<UserData>>({});
  const [isComplete, setIsComplete] = useState(false);

  const steps = [
    'Establishing secure connection...',
    'Analyzing user agent...',
    'Geolocating IP address...',
    'Collecting device information...',
    'Performing security checks...',
    'Finalizing access credentials...',
    'Access granted - Loading portfolio...'
  ];

  // Parse user agent to extract browser and OS info
  const parseUserAgent = (userAgent: string) => {
    const browserRegex = /(Chrome|Firefox|Safari|Edge|Opera)\/[\d.]+/;
    const osRegex = /(Windows|Mac|Linux|Android|iOS)/;
    const mobileRegex = /Mobile|Android|iPhone|iPad/;

    const browserMatch = userAgent.match(browserRegex);
    const osMatch = userAgent.match(osRegex);
    const isMobile = mobileRegex.test(userAgent);

    return {
      browser: browserMatch ? browserMatch[1] : 'Unknown',
      os: osMatch ? osMatch[1] : 'Unknown',
      device: isMobile ? 'Mobile' : 'Desktop',
      mobile: isMobile
    };
  };

  // Fetch IP address and location data
  const fetchIPData = async () => {
    try {
      // Using a free IP geolocation service
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      return {
        ip: data.ip || 'Unknown',
        location: {
          country: data.country_name || 'Unknown',
          region: data.region || 'Unknown',
          city: data.city || 'Unknown',
          timezone: data.timezone || 'Unknown'
        },
        connection: {
          isp: data.org || 'Unknown ISP',
          org: data.org || 'Unknown Organization'
        }
      };
    } catch (error) {
      console.error('Failed to fetch IP data:', error);
      return {
        ip: 'Unable to detect',
        location: {
          country: 'Unknown',
          region: 'Unknown',
          city: 'Unknown',
          timezone: 'Unknown'
        },
        connection: {
          isp: 'Unknown ISP',
          org: 'Unknown Organization'
        }
      };
    }
  };

  useEffect(() => {
    const loadUserData = async () => {
      const userAgent = navigator.userAgent;
      const deviceInfo = parseUserAgent(userAgent);
      const timestamp = new Date().toISOString();

      // Simulate progressive loading
      for (let i = 0; i < steps.length; i++) {
        setCurrentStep(steps[i]);
        setProgress((i + 1) * (100 / steps.length));

        // Collect different data at different steps
        if (i === 1) {
          setUserData(prev => ({
            ...prev,
            userAgent,
            device: deviceInfo,
            timestamp
          }));
        }

        if (i === 2) {
          const ipData = await fetchIPData();
          setUserData(prev => ({
            ...prev,
            ...ipData
          }));
        }

        // Simulate processing time
        await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
      }

      setIsComplete(true);
      
      // Complete user data
      const finalUserData: UserData = {
        ip: userData.ip || 'Unknown',
        userAgent,
        location: userData.location || {
          country: 'Unknown',
          region: 'Unknown',
          city: 'Unknown',
          timezone: 'Unknown'
        },
        device: deviceInfo,
        connection: userData.connection || {
          isp: 'Unknown ISP',
          org: 'Unknown Organization'
        },
        timestamp
      };

      // Wait a moment before completing
      setTimeout(() => {
        onComplete(finalUserData);
      }, 1500);
    };

    loadUserData();
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-6">
        {/* CIA Header */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <Shield className="text-red-500" size={24} />
            <h1 className="text-2xl font-bold text-white font-mono">
              CENTRAL INTELLIGENCE AGENCY
            </h1>
            <Shield className="text-red-500" size={24} />
          </div>
          <div className="flex items-center justify-center gap-2 mb-6">
            <AlertTriangle size={16} className="text-yellow-500" />
            <span className="text-yellow-500 font-bold text-sm tracking-widest">
              CLASSIFIED ACCESS SYSTEM
            </span>
            <AlertTriangle size={16} className="text-yellow-500" />
          </div>
        </div>

        {/* Main Loading Card */}
        <Card className="bg-gray-900 border-red-900 p-6">
          <div className="space-y-4">
            {/* Status */}
            <div className="text-center">
              <Badge variant="destructive" className="mb-2">
                <Eye size={12} className="mr-1" />
                ACCESS IN PROGRESS
              </Badge>
              <p className="text-green-400 font-mono text-sm">{currentStep}</p>
            </div>

            {/* Progress Bar */}
            <Progress value={progress} className="h-2" />
            <p className="text-right text-xs text-gray-400 font-mono">
              {progress.toFixed(0)}% Complete
            </p>

            {/* Data Collection Display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {userData.ip && (
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe size={14} className="text-blue-400" />
                    <span className="text-blue-400 font-mono text-xs">IP ADDRESS</span>
                  </div>
                  <p className="text-white font-mono text-sm">{userData.ip}</p>
                  {userData.location && (
                    <p className="text-gray-400 text-xs mt-1">
                      {userData.location.city}, {userData.location.region}, {userData.location.country}
                    </p>
                  )}
                </div>
              )}

              {userData.device && (
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Monitor size={14} className="text-green-400" />
                    <span className="text-green-400 font-mono text-xs">DEVICE INFO</span>
                  </div>
                  <p className="text-white font-mono text-sm">
                    {userData.device.browser} on {userData.device.os}
                  </p>
                  <p className="text-gray-400 text-xs mt-1">
                    {userData.device.device} Device
                  </p>
                </div>
              )}

              {userData.connection && (
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={14} className="text-purple-400" />
                    <span className="text-purple-400 font-mono text-xs">CONNECTION</span>
                  </div>
                  <p className="text-white font-mono text-sm">{userData.connection.isp}</p>
                </div>
              )}

              {userData.timestamp && (
                <div className="bg-gray-800 p-3 rounded border border-gray-700">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock size={14} className="text-yellow-400" />
                    <span className="text-yellow-400 font-mono text-xs">TIMESTAMP</span>
                  </div>
                  <p className="text-white font-mono text-sm">
                    {new Date(userData.timestamp).toLocaleString()}
                  </p>
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* Security Notice */}
        <Card className="bg-red-950 border-red-900 p-4">
          <div className="text-center">
            <AlertTriangle className="text-red-400 mx-auto mb-2" size={20} />
            <p className="text-red-300 text-xs font-mono">
              NOTICE: All access attempts are logged and monitored for security purposes.
              Unauthorized access is prohibited and may result in prosecution.
            </p>
          </div>
        </Card>

        {isComplete && (
          <div className="text-center">
            <Badge variant="outline" className="border-green-500 text-green-400">
              <Shield size={12} className="mr-1" />
              ACCESS GRANTED
            </Badge>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingPage;
