import React, { useState } from 'react';
import Layout from './components/Layout';
import DashboardCFO from './pages/DashboardCFO';
import PatientIntake from './pages/PatientIntake';
import InventorySCM from './pages/InventorySCM';
import AiAssistant from './components/AiAssistant';
import { AppView } from './types';
import { MOCK_FINANCIALS, MOCK_INVENTORY, MOCK_PATIENTS } from './constants';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>(AppView.DASHBOARD_CFO);

  const renderView = () => {
    switch (currentView) {
      case AppView.DASHBOARD_CFO:
        return <DashboardCFO />;
      case AppView.PATIENT_INTAKE:
        return <PatientIntake />;
      case AppView.INVENTORY_SCM:
        return <InventorySCM />;
      default:
        return <DashboardCFO />;
    }
  };

  // Construct context data for the AI based on the current view
  const getContextData = () => {
    switch(currentView) {
      case AppView.DASHBOARD_CFO:
        return { view: 'Financial Dashboard', data: MOCK_FINANCIALS };
      case AppView.PATIENT_INTAKE:
        return { view: 'Patient Intake', activeList: MOCK_PATIENTS };
      case AppView.INVENTORY_SCM:
        return { view: 'Supply Chain', inventory: MOCK_INVENTORY };
      default:
        return {};
    }
  };

  return (
    <Layout currentView={currentView} setCurrentView={setCurrentView}>
      {renderView()}
      <AiAssistant contextData={getContextData()} />
    </Layout>
  );
};

export default App;