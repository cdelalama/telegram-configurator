import { Button } from "@/components/ui/button";
import { MessageSquare, Settings, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
  currentPage: string;
}

const DashboardLayout = ({ children, currentPage }: DashboardLayoutProps) => {
  const menuItems = [
    { icon: MessageSquare, label: "Bot Status", path: "/" },
    { icon: Settings, label: "Variables", path: "/variables" },
    { icon: Activity, label: "Logs", path: "/logs" },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-telegram-blue">TeleAdmin</h1>
          <p className="text-sm text-gray-500">Bot Administration Panel</p>
        </div>
        
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.path}
                variant="ghost"
                className={cn(
                  "w-full justify-start gap-2",
                  currentPage === item.path && "bg-telegram-blue text-white hover:bg-telegram-blue/90"
                )}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;