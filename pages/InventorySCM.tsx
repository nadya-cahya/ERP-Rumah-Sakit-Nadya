import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  ReferenceLine 
} from 'recharts';
import { Package, TrendingUp, AlertOctagon, BrainCircuit } from 'lucide-react';
import { MOCK_INVENTORY } from '../constants';

const InventorySCM: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-slate-900 text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-10">
            <BrainCircuit className="w-64 h-64" />
        </div>
        <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-2">AI Demand Forecasting</h2>
            <p className="text-indigo-200 max-w-2xl mb-6">
                Nadya Cahya AI predicts a 15% surge in respiratory medication demand for next week based on local epidemiological data and admission trends.
            </p>
            <button className="bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-indigo-900/50 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Review Procurement Plan
            </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Inventory List */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
           <div className="p-6 border-b border-slate-100 flex justify-between items-center">
             <h3 className="font-bold text-slate-900 flex items-center gap-2">
               <Package className="w-5 h-5 text-indigo-600" />
               Critical Stock Levels
             </h3>
             <span className="text-xs font-mono text-slate-400">UPDATED: JUST NOW</span>
           </div>
           
           <div className="overflow-x-auto">
             <table className="w-full text-sm text-left">
               <thead className="bg-slate-50 text-slate-500">
                 <tr>
                    <th className="px-6 py-3 font-medium">Item Name</th>
                    <th className="px-6 py-3 font-medium">Category</th>
                    <th className="px-6 py-3 font-medium">Current Stock</th>
                    <th className="px-6 py-3 font-medium">AI Forecast (7d)</th>
                    <th className="px-6 py-3 font-medium text-center">Status</th>
                 </tr>
               </thead>
               <tbody className="divide-y divide-slate-100">
                  {MOCK_INVENTORY.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50">
                        <td className="px-6 py-4 font-medium text-slate-900">
                            {item.name}
                            <div className="text-xs text-slate-400 font-normal">{item.unit}</div>
                        </td>
                        <td className="px-6 py-4 text-slate-600">{item.category}</td>
                        <td className="px-6 py-4 font-mono">
                            <span className={item.stockLevel < item.minThreshold ? 'text-rose-600 font-bold' : 'text-slate-700'}>
                                {item.stockLevel}
                            </span>
                        </td>
                        <td className="px-6 py-4 font-mono text-indigo-600">
                            {item.predictedDemand}
                        </td>
                        <td className="px-6 py-4 text-center">
                            {item.stockLevel < item.minThreshold ? (
                                <span className="inline-flex items-center gap-1 px-2 py-1 rounded bg-rose-100 text-rose-800 text-xs font-bold">
                                    <AlertOctagon className="w-3 h-3" /> Low Stock
                                </span>
                            ) : (
                                <span className="inline-flex px-2 py-1 rounded bg-emerald-100 text-emerald-800 text-xs font-bold">
                                    Adequate
                                </span>
                            )}
                        </td>
                    </tr>
                  ))}
               </tbody>
             </table>
           </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 flex flex-col">
            <h3 className="font-bold text-slate-900 mb-4">Stock vs Forecast</h3>
            <div className="flex-1 min-h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={MOCK_INVENTORY} layout="vertical" margin={{top: 0, right: 30, left: 40, bottom: 0}}>
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                        <XAxis type="number" hide />
                        <YAxis type="category" dataKey="name" width={100} tick={{fontSize: 10}} interval={0} />
                        <Tooltip cursor={{fill: 'transparent'}} />
                        <Bar dataKey="stockLevel" fill="#cbd5e1" radius={[0, 4, 4, 0]} barSize={20} name="Current Stock" />
                        <Bar dataKey="predictedDemand" fill="#6366f1" radius={[0, 4, 4, 0]} barSize={20} name="AI Forecast Needs" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <div className="mt-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-200">
                <p><strong>Note:</strong> Items where "Forecast" exceeds "Stock" will trigger automatic purchase orders via EDI if enabled in Settings.</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default InventorySCM;