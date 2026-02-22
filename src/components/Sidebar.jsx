import {LayoutDashboard,DollarSign,Settings} from 'lucide-react';

const Sidebar = ({activeTab,onTabChange}) => {
    
    const menuItems = [
        { id: 'dashboard', label: 'خانه', icon: LayoutDashboard,activeBg: 'bg-gray-200'},
        { id: 'finances', label: 'پول من', icon: DollarSign, activeBg: 'bg-gray-200'},
        { id: 'settings', label: 'تنظیمات', icon: Settings,activeBg: 'bg-gray-200'}
    ];
    
    return (
        <div className="w-72 h-screen bg-white border-l border-gray-200 p-6" dir="rtl"> 
            <nav className="space-y-3">
                {menuItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                
                return (
                    <button
                    key={item.id}
                    onClick={() => onTabChange(item.id)}
                    className={`w-full flex items-center  rounded-xl transition-all duration-200 ${
                        isActive ? item.activeBg : 'hover:bg-gray-50'
                    }`}
                    >
                        <div className={`${item.bgColor} p-3 rounded-l`}>
                            <Icon className={`text-l ${item.iconColor}`} />
                        </div>

                        <span className={`text-lg font-medium ${
                            isActive ? 'text-gray-900' : 'text-gray-600'
                        }`}>
                            {item.label}
                        </span>
                    </button>
                );
                })}
            </nav>
        </div>
    );
};

export default Sidebar;