export enum AppView {
  DASHBOARD_CFO = 'DASHBOARD_CFO',
  PATIENT_INTAKE = 'PATIENT_INTAKE',
  INVENTORY_SCM = 'INVENTORY_SCM',
}

export interface FinancialMetric {
  id: string;
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  trend: number; // percentage
  status: 'positive' | 'negative' | 'neutral';
}

export interface Patient {
  id: string;
  name: string;
  dob: string;
  insuranceProvider: string;
  policyNumber: string;
  status: 'Waiting' | 'Triaged' | 'Admitted' | 'Discharged';
  condition: string;
  admitTime: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  category: 'Pharmaceutical' | 'Surgical' | 'Consumable';
  stockLevel: number;
  minThreshold: number;
  unit: string;
  lastRestock: string;
  predictedDemand: number; // AI Forecast
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}