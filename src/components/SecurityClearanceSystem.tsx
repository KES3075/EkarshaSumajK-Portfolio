import { useState, useEffect } from 'react';
import { Shield, Lock, Unlock, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

export const SecurityClearanceSystem = () => {
  const [clearanceLevel, setClearanceLevel] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [accessGranted, setAccessGranted] = useState(false);

  const clearanceLevels = [
    { level: 0, name: "UNAUTHORIZED", color: "text-red-500", icon: Lock },
    { level: 1, name: "CONFIDENTIAL", color: "text-yellow-500", icon: Shield },
    { level: 2, name: "SECRET", color: "text-orange-500", icon: Shield },
    { level: 3, name: "TOP SECRET", color: "text-red-500", icon: Shield },
    { level: 4, name: "ALPHA-7", color: "text-green-500", icon: Unlock }
  ];

  const initiateSecurityScan = () => {
    setIsScanning(true);
    setScanProgress(0);

    const scanInterval = setInterval(() => {
      setScanProgress(prev => {
        if (prev >= 100) {
          clearInterval(scanInterval);
          setIsScanning(false);
          setAccessGranted(true);
          setClearanceLevel(4); // Grant ALPHA-7 clearance
          return 100;
        }
        return prev + Math.random() * 15 + 5; // Random progress
      });
    }, 200);
  };

  const currentLevel = clearanceLevels[clearanceLevel];
  const CurrentIcon = currentLevel.icon;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="border-accent/30 hover:border-accent/60 transition-colors duration-200 px-2 sm:px-3 h-8 sm:h-9"
        >
          <CurrentIcon size={14} className={`mr-1 sm:mr-2 ${currentLevel.color}`} />
          <span className="hidden sm:inline">{currentLevel.name}</span>
          <span className="sm:hidden text-xs">{currentLevel.name.charAt(0)}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield size={20} />
            Security Clearance System
          </DialogTitle>
          <DialogDescription>
            Neural scan and biometric verification required for enhanced access.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Current Clearance Status */}
          <div className="text-center p-4 border border-border rounded-lg">
            <CurrentIcon size={32} className={`mx-auto mb-2 ${currentLevel.color}`} />
            <h3 className="font-bold text-lg">{currentLevel.name}</h3>
            <p className="text-sm text-muted-foreground">
              {clearanceLevel === 0 && "Access restricted. Security scan required."}
              {clearanceLevel === 4 && "Full access granted. All systems operational."}
            </p>
          </div>

          {/* Security Scan Interface */}
          {!accessGranted && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Neural Scan Progress</span>
                <span className="text-sm text-muted-foreground">{Math.round(scanProgress)}%</span>
              </div>

              <div className="relative">
                <Progress value={scanProgress} className="h-2" />
                {isScanning && (
                  <div className="absolute inset-0 bg-accent/20 animate-pulse rounded-full" />
                )}
              </div>

              {isScanning && (
                <div className="text-center text-sm text-muted-foreground animate-pulse">
                  🔍 Scanning neural patterns...
                </div>
              )}
            </div>
          )}

          {/* Clearance Levels */}
          <div className="grid grid-cols-2 gap-2">
            {clearanceLevels.map((level) => {
              const LevelIcon = level.icon;
              const isActive = clearanceLevel >= level.level;
              return (
                <div
                  key={level.level}
                  className={`p-2 border rounded text-center text-xs ${
                    isActive
                      ? 'border-primary bg-primary/10'
                      : 'border-border bg-muted/50'
                  }`}
                >
                  <LevelIcon size={14} className={`mx-auto mb-1 ${level.color}`} />
                  {level.name}
                </div>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="flex gap-2">
            {!accessGranted ? (
              <Button
                onClick={initiateSecurityScan}
                disabled={isScanning}
                className="flex-1"
              >
                {isScanning ? (
                  <>
                    <AlertTriangle size={16} className="mr-2 animate-spin" />
                    Scanning...
                  </>
                ) : (
                  <>
                    <Shield size={16} className="mr-2" />
                    Initiate Neural Scan
                  </>
                )}
              </Button>
            ) : (
              <div className="flex-1 text-center p-2 bg-green-500/10 border border-green-500/30 rounded">
                <Unlock size={16} className="mx-auto mb-1 text-green-500" />
                <span className="text-sm font-medium text-green-600">Access Granted</span>
              </div>
            )}
          </div>

          {/* Security Warnings */}
          <div className="text-xs text-muted-foreground space-y-1">
            <p>⚠️ All access attempts are logged and monitored.</p>
            <p>🔐 Unauthorized access attempts will be reported.</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
