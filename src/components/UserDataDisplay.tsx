import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { UserData } from '@/hooks/useUserData';
import { Eye, EyeOff, Globe, Monitor, Shield, Clock, MapPin } from 'lucide-react';

interface UserDataDisplayProps {
  userData: UserData | null;
}

const UserDataDisplay: React.FC<UserDataDisplayProps> = ({ userData }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (!userData) return null;

  return (
    <Card className="document-page mb-8">
      <CardHeader className="border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Shield className="text-primary" size={20} />
            <CardTitle className="font-mono text-primary">
              ACCESS LOG - SESSION DATA
            </CardTitle>
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsVisible(!isVisible)}
            className="gap-2"
          >
            {isVisible ? <EyeOff size={16} /> : <Eye size={16} />}
            {isVisible ? 'Hide' : 'Show'} Data
          </Button>
        </div>
      </CardHeader>

      {isVisible && (
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* IP Information */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-blue-500" />
                <span className="font-mono text-sm font-semibold">Network</span>
              </div>
              <div className="bg-muted/50 p-3 rounded border">
                <p className="text-sm font-mono">IP: {userData.ip}</p>
                <p className="text-xs text-muted-foreground">
                  ISP: {userData.connection.isp}
                </p>
              </div>
            </div>

            {/* Location Information */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-green-500" />
                <span className="font-mono text-sm font-semibold">Location</span>
              </div>
              <div className="bg-muted/50 p-3 rounded border">
                <p className="text-sm font-mono">
                  {userData.location.city}, {userData.location.region}
                </p>
                <p className="text-xs text-muted-foreground">
                  {userData.location.country}
                </p>
                <Badge variant="outline" className="mt-1 text-xs">
                  {userData.location.timezone}
                </Badge>
              </div>
            </div>

            {/* Device Information */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Monitor size={16} className="text-purple-500" />
                <span className="font-mono text-sm font-semibold">Device</span>
              </div>
              <div className="bg-muted/50 p-3 rounded border">
                <p className="text-sm font-mono">
                  {userData.device.browser} on {userData.device.os}
                </p>
                <div className="flex gap-1 mt-1">
                  <Badge variant={userData.device.mobile ? "default" : "secondary"} className="text-xs">
                    {userData.device.device}
                  </Badge>
                </div>
              </div>
            </div>

            {/* Session Information */}
            <div className="space-y-2 md:col-span-2 lg:col-span-3">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-orange-500" />
                <span className="font-mono text-sm font-semibold">Session</span>
              </div>
              <div className="bg-muted/50 p-3 rounded border">
                <p className="text-sm font-mono">
                  Access Time: {new Date(userData.timestamp).toLocaleString()}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  User Agent: {userData.userAgent}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-accent/10 border border-accent/30 rounded">
            <div className="flex items-center gap-2 mb-2">
              <Shield size={14} className="text-accent" />
              <span className="text-sm font-mono font-semibold text-accent">
                SECURITY NOTICE
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              This information is collected for security and analytics purposes only. 
              All data is processed securely and not shared with third parties.
            </p>
          </div>
        </CardContent>
      )}
    </Card>
  );
};

export default UserDataDisplay;
