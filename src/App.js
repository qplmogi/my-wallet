import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardTab from './components/DashboardTab';
import FinancesTab from './components/FinancesTab';
import SettingTab from './components/SettingTab';

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderCurrentTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'finances':
        return <FinancesTab />;
      case 'settings':
        return <SettingTab />;
      default:
        return <DashboardTab />;
    }
  };

  return (
    <div className="App">
      <Header />
      
      <div style={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <Sidebar 
          activeTab={activeTab} 
          onTabChange={setActiveTab} 
        />
        
        <main style={{ flex: 1 }}>
          {renderCurrentTab()}
        </main>
      </div>
    </div>
  );
}

export default App;