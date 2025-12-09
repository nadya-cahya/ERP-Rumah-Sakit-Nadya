import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';
import { ArrowUpRight, ArrowDownRight, TrendingUp, AlertTriangle } from 'lucide-react';
import { FinancialMetric } from '../types';
import { MOCK_FINANCIALS, REVENUE_DATA } from '../constants';

const DashboardCFO: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Financial Overview</h2>
          <p className="text-slate-500 text-sm">Real-time Revenue Cycle Management (RCM) Analysis</p>
        </div>
        <div className="flex gap-2">
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                System Healthy
            </span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-semibold">
                Fiscal Period: Q4 2023
            </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {MOCK_FINANCIALS.map((metric: FinancialMetric) => (
          <div key={metric.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <span className="text-slate-500 text-sm font-medium">{metric.label}</span>
              <div className={`p-1.5 rounded-lg ${metric.trend >= 0 ? 'bg-emerald-50' : 'bg-rose-50'}`}>
                 {metric.trend >= 0 ? (
                   <ArrowUpRight className={`w-4 h-4 ${metric.status === 'positive' ? 'text-emerald-600' : 'text-rose-600'}`} />
                 ) : (
                   <ArrowDownRight className={`w-4 h-4 ${metric.status === 'positive' ? 'text-emerald-600' : 'text-rose-600'}`} />
                 )}
              </div>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-slate-900">
                {metric.prefix}{metric.value.toLocaleString()}{metric.suffix}
              </span>
            </div>
            <div className="mt-2 text-xs">
              <span className={`${metric.trend > 0 ? 'text-emerald-600' : 'text-rose-600'} font-medium`}>
                {metric.trend > 0 ? '+' : ''}{metric.trend}%
              </span>
              <span className="text-slate-400 ml-1">vs last month</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Main Chart: Revenue vs Expense */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="flex items-center justify-between mb-6">
             <h3 className="font-semibold text-slate-900 flex items-center gap-2">
               <TrendingUp className="w-5 h-5 text-indigo-600" />
               Revenue vs Expenses Trend
             </h3>
             <select className="text-sm border-slate-200 border rounded-lg px-2 py-1 bg-slate-50 text-slate-600 outline-none">
                 <option>Last 30 Days</option>
                 <option>Last Quarter</option>
             </select>
          </div>
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={REVENUE_DATA} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpense" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} tickFormatter={(val) => `$${val/1000}k`} />
                <CartesianGrid vertical={false} stroke="#e2e8f0" strokeDasharray="3 3" />
                <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    formatter={(value: number) => [`$${value.toLocaleString()}`, '']}
                />
                <Area type="monotone" dataKey="revenue" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorRevenue)" name="Revenue" />
                <Area type="monotone" dataKey="expenses" stroke="#94a3b8" strokeWidth={2} fillOpacity={1} fill="url(#colorExpense)" name="Expenses" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Action Items / Alerts */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <h3 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            Compliance & Audits
          </h3>
          <div className="space-y-4">
             <div className="p-4 bg-amber-50 rounded-lg border border-amber-100">
                <div className="flex justify-between items-start">
                    <h4 className="text-sm font-semibold text-amber-900">Unreconciled AR</h4>
                    <span className="text-xs bg-amber-200 text-amber-800 px-2 py-0.5 rounded-full">High</span>
                </div>
                <p className="text-xs text-amber-700 mt-1 leading-relaxed">
                    $125k in claims from 'Provider X' showing discrepancy. Requires GL adjustment or manual review.
                </p>
                <button className="mt-3 text-xs font-semibold text-amber-700 hover:text-amber-900 underline">Review Batch #9921</button>
             </div>

             <div className="p-4 bg-slate-50 rounded-lg border border-slate-100">
                <div className="flex justify-between items-start">
                    <h4 className="text-sm font-semibold text-slate-900">Coding Audit</h4>
                    <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded-full">Normal</span>
                </div>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    Routine random sampling of 50 cardiac charts for ICD-10 accuracy pending approval.
                </p>
                <button className="mt-3 text-xs font-semibold text-indigo-600 hover:text-indigo-800 underline">Approve Audit</button>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DashboardCFO;