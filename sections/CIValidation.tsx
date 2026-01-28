import React from 'react';
import { JBCCard } from '../react/Card';
import { JBCBadge } from '../react/Badge';
import { JBCIcon } from '../react/Icon';
import { JBCStepper } from '../react/Stepper';

const CIValidation: React.FC<{ theme?: 'light' | 'dark' }> = ({ theme = 'dark' }) => {
  const steps = [
    { id: 1, label: 'Token Lint', description: 'Schema & Key check' },
    { id: 2, label: 'Platform Build', description: 'Swift/XML generation' },
    { id: 3, label: 'Parity Audit', description: 'Adaptive variant check' },
    { id: 4, label: 'Release Sign', description: 'ZIP manifest binding' }
  ];

  return (
    <div className="space-y-16 animate-in fade-in duration-700">
      <JBCCard elevation="low" className="p-8 border-l-4 border-jbc-success bg-jbc-success/5">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
          <i className="ri-shield-check-line text-jbc-success"></i> Governance / CI Validation
        </h3>
        <p className="text-sm opacity-70 leading-relaxed max-w-3xl">
          Automated validation guards the integrity of the JBC Design System. Every SDK export is parsed by the CI Validator to ensure native platforms receive optimized, theme-aware primitives without logical regressions.
        </p>
      </JBCCard>

      {/* Validation Pipeline Preview */}
      <div className="space-y-8">
        <h4 className="text-[10px] font-mono uppercase tracking-widest opacity-60">Automated Audit Pipeline</h4>
        <div className="p-10 rounded-3xl bg-black/5 dark:bg-white/5 border border-white/5">
           <JBCStepper steps={steps} currentStep={2} orientation="horizontal" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Checklist */}
        <div className="space-y-8">
          <h4 className="text-lg font-bold">Critical Integrity Checks</h4>
          <div className="space-y-4">
            {[
              { 
                title: 'Token Integrity', 
                rules: ['semantic-entities.json contains { dark, light }', 'No flattened hex values permitted'],
                status: 'pass'
              },
              { 
                title: 'iOS Parity', 
                rules: ['Color(light:dark:) initializer enforced', 'UIColor trait-collection bridge exists'],
                status: 'pass'
              },
              { 
                title: 'Android Parity', 
                rules: ['values/ and values-night/ resources split', 'Zero orphan color references'],
                status: 'pass'
              },
              { 
                title: 'Web Regression', 
                rules: ['No hardcoded hex in React components', 'Tailwind config matches design source'],
                status: 'pass'
              }
            ].map((check, idx) => (
              <div key={idx} className={`p-5 rounded-2xl border ${theme === 'dark' ? 'bg-[#161B22] border-[#30363D]' : 'bg-white border-black/10'}`}>
                <div className="flex justify-between items-center mb-4">
                   <h5 className="text-sm font-bold uppercase tracking-wider">{check.title}</h5>
                   <JBCBadge variant="success">READY</JBCBadge>
                </div>
                <ul className="space-y-2">
                   {check.rules.map((rule, rIdx) => (
                     <li key={rIdx} className="text-xs flex gap-2 opacity-60">
                        <i className="ri-checkbox-circle-fill text-jbc-success"></i>
                        {rule}
                     </li>
                   ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Failure Scenarios */}
        <div className="space-y-8">
           <h4 className="text-lg font-bold">Build Failure Logic</h4>
           <div className={`p-8 rounded-3xl border border-dashed ${theme === 'dark' ? 'border-jbc-error/30 bg-jbc-error/5' : 'border-jbc-error/20 bg-jbc-error/5'}`}>
              <div className="flex items-center gap-3 mb-6 text-jbc-error">
                 <i className="ri-error-warning-line text-2xl"></i>
                 <span className="font-bold uppercase tracking-widest text-xs">Failure Conditions</span>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                   <span className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Condition 01</span>
                   <p className="text-xs leading-relaxed opacity-70"><strong>Resource Symmetry:</strong> Build fails if <code className="jbc-keep-token">values-night/colors.xml</code> is missing keys present in <code className="jbc-keep-token">values/colors.xml</code>.</p>
                </div>
                <div className="space-y-2">
                   <span className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Condition 02</span>
                   <p className="text-xs leading-relaxed opacity-70"><strong>Token Flattening:</strong> Build fails if <code className="jbc-keep-token">semantic-entities.json</code> provides a single hex instead of the <code className="jbc-keep-token">{ "{" } dark, light { "}" }</code> object structure.</p>
                </div>
                <div className="space-y-2">
                   <span className="text-[10px] font-bold opacity-40 uppercase tracking-tighter">Condition 03</span>
                   <p className="text-xs leading-relaxed opacity-70"><strong>Web Drift:</strong> Build fails if new hex literals are detected in <code className="jbc-keep-token">/react/</code> components during linting.</p>
                </div>
              </div>
           </div>

           <div className="p-8 rounded-3xl bg-[#0D1117] border border-white/10 font-mono text-[11px] leading-relaxed group">
              <div className="flex justify-between mb-4">
                 <span className="text-jbc-cyan">// CI_AUDIT_LOG_2026_02.txt</span>
                 <span className="animate-pulse text-jbc-success">RUNNING...</span>
              </div>
              <div className="space-y-1 opacity-60 group-hover:opacity-100 transition-opacity">
                 <div>[CHECK] ios/Colors.swift... <span className="text-jbc-success">OK</span></div>
                 <div>[CHECK] android/values-night/... <span className="text-jbc-success">OK</span></div>
                 <div>[CHECK] tokens/entities.json... <span className="text-jbc-success">OK</span></div>
                 <div className="pt-2 text-jbc-gold">Export integrity validated. Proceeding to ZIP creation.</div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default CIValidation;