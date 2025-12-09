import React, { useState } from 'react';
import { UserPlus, Calendar, CreditCard, Activity, CheckCircle, Clock } from 'lucide-react';
import { MOCK_PATIENTS } from '../constants';

const PatientIntake: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'register' | 'list'>('register');

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
        <button 
          onClick={() => setActiveTab('register')}
          className={`pb-4 px-4 font-medium text-sm transition-all relative ${activeTab === 'register' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
        >
          New Admission
          {activeTab === 'register' && <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-indigo-600"></span>}
        </button>
        <button 
          onClick={() => setActiveTab('list')}
          className={`pb-4 px-4 font-medium text-sm transition-all relative ${activeTab === 'list' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-700'}`}
        >
          Active Waiting List
          {activeTab === 'list' && <span className="absolute bottom-[-1px] left-0 w-full h-0.5 bg-indigo-600"></span>}
        </button>
      </div>

      {activeTab === 'register' ? (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8 border-b border-slate-100 bg-slate-50/50">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <UserPlus className="w-5 h-5 text-indigo-600" />
              Patient Registration
            </h2>
            <p className="text-sm text-slate-500 mt-1">Enter patient demographics and insurance details. All fields encrypted (AES-256).</p>
          </div>
          
          <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Demographics</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Full Name</label>
                <input type="text" className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm transition-shadow" placeholder="e.g. John Doe" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    Date of Birth
                  </label>
                  <input type="date" className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Gender</label>
                  <select className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm bg-white">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Address</label>
                <textarea className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm h-24 resize-none" placeholder="Residential Address"></textarea>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Financial & Clinical</h3>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-slate-400" />
                  Insurance Provider
                </label>
                <select className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm bg-white">
                  <option>Select Provider...</option>
                  <option>BlueCross BlueShield</option>
                  <option>Aetna</option>
                  <option>Medicare</option>
                  <option>Self-Pay</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Policy Number</label>
                <input type="text" className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-sm" placeholder="XX-0000-0000" />
              </div>

              <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-100 space-y-3">
                 <div className="flex items-center gap-2 text-indigo-900 font-semibold text-sm">
                    <Activity className="w-4 h-4" />
                    Initial Triage
                 </div>
                 <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="triage" className="text-indigo-600 focus:ring-indigo-500" />
                        <span className="text-sm text-slate-700">Routine</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="triage" className="text-amber-600 focus:ring-amber-500" />
                        <span className="text-sm text-slate-700">Urgent</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="triage" className="text-red-600 focus:ring-red-500" />
                        <span className="text-sm text-slate-700">Emergent</span>
                    </label>
                 </div>
              </div>

              <div className="pt-4 flex justify-end gap-3">
                 <button type="button" className="px-5 py-2.5 text-slate-600 font-medium hover:bg-slate-100 rounded-lg text-sm">Cancel</button>
                 <button type="button" className="px-5 py-2.5 bg-indigo-600 text-white font-medium hover:bg-indigo-700 rounded-lg text-sm shadow-lg shadow-indigo-200 transition-all">Submit Admission</button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 font-medium border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Patient ID</th>
                <th className="px-6 py-4">Name</th>
                <th className="px-6 py-4">Admit Time</th>
                <th className="px-6 py-4">Condition</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {MOCK_PATIENTS.map((p) => (
                <tr key={p.id} className="hover:bg-slate-50 transition-colors">
                  <td className="px-6 py-4 font-mono text-slate-500">{p.id}</td>
                  <td className="px-6 py-4 font-medium text-slate-900">{p.name}</td>
                  <td className="px-6 py-4 text-slate-500 flex items-center gap-2">
                    <Clock className="w-3 h-3" /> {p.admitTime}
                  </td>
                  <td className="px-6 py-4 text-slate-700">{p.condition}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                      ${p.status === 'Admitted' ? 'bg-green-100 text-green-800' : 
                        p.status === 'Triaged' ? 'bg-amber-100 text-amber-800' : 'bg-slate-100 text-slate-800'}`}>
                      {p.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-indigo-600 hover:text-indigo-900 font-medium text-xs">View Chart</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PatientIntake;