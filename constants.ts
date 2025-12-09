import { FinancialMetric, InventoryItem, Patient } from "./types";

export const MOCK_FINANCIALS: FinancialMetric[] = [
  { id: '1', label: 'Total Revenue (MTD)', value: 4250000, prefix: '$', trend: 12.5, status: 'positive' },
  { id: '2', label: 'Days Sales Outstanding (DSO)', value: 42, suffix: ' Days', trend: -5.2, status: 'positive' }, // Lower is better
  { id: '3', label: 'Cash on Hand', value: 1850000, prefix: '$', trend: -2.1, status: 'negative' },
  { id: '4', label: 'Claims Denial Rate', value: 3.8, suffix: '%', trend: 0.5, status: 'negative' }, // Lower is better
];

export const MOCK_PATIENTS: Patient[] = [
  { id: 'P-1024', name: 'Sarah Jenkins', dob: '1985-04-12', insuranceProvider: 'BlueCross', policyNumber: 'BC-99281', status: 'Admitted', condition: 'Acute Appendicitis', admitTime: '08:15 AM' },
  { id: 'P-1025', name: 'Michael Chen', dob: '1954-09-22', insuranceProvider: 'Aetna', policyNumber: 'AE-11234', status: 'Triaged', condition: 'Chest Pain', admitTime: '08:45 AM' },
  { id: 'P-1026', name: 'David Ross', dob: '1990-11-05', insuranceProvider: 'Medicare', policyNumber: 'MC-55122', status: 'Waiting', condition: 'Fractured Radius', admitTime: '09:10 AM' },
];

export const MOCK_INVENTORY: InventoryItem[] = [
  { id: 'INV-001', name: 'Propofol 10mg/ml', category: 'Pharmaceutical', stockLevel: 45, minThreshold: 100, unit: 'Vials', lastRestock: '2023-10-01', predictedDemand: 120 },
  { id: 'INV-002', name: 'Surgical Gloves (L)', category: 'Consumable', stockLevel: 2500, minThreshold: 500, unit: 'Pairs', lastRestock: '2023-10-15', predictedDemand: 800 },
  { id: 'INV-003', name: 'Insulin Glargine', category: 'Pharmaceutical', stockLevel: 20, minThreshold: 30, unit: 'Pens', lastRestock: '2023-09-28', predictedDemand: 45 },
  { id: 'INV-004', name: 'IV Saline 1000ml', category: 'Consumable', stockLevel: 150, minThreshold: 200, unit: 'Bags', lastRestock: '2023-10-10', predictedDemand: 300 },
];

export const REVENUE_DATA = [
  { name: 'Week 1', revenue: 850000, expenses: 620000 },
  { name: 'Week 2', revenue: 920000, expenses: 640000 },
  { name: 'Week 3', revenue: 1100000, expenses: 700000 },
  { name: 'Week 4', revenue: 1380000, expenses: 750000 },
];