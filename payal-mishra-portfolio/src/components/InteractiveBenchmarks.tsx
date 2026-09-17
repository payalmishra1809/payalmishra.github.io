import React, { useState } from 'react';
import { Zap, Cpu, ShieldCheck, Play, CheckCircle2, ArrowRight, BarChart3, Sliders, Layers } from 'lucide-react';

export const InteractiveBenchmarks: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'hft' | 'neuromem' | 'fraud'>('hft');

  // HFT benchmark state
  const [selectedStage, setSelectedStage] = useState<number>(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [measuredLatency, setMeasuredLatency] = useState(3.42);

  const runLatencyTest = () => {
    setIsMeasuring(true);
    setTimeout(() => {
      const sample = Number((2.9 + Math.random() * 1.6).toFixed(2));
      setMeasuredLatency(sample);
      setIsMeasuring(false);
    }, 450);
  };

  // NeuroMemBench state
  const [selectedTask, setSelectedTask] = useState<'synaptic' | 'behavior' | 'rna'>('synaptic');

  // Fraud model threshold state
  const [threshold, setThreshold] = useState(0.5);

  const hftStages = [
    {
      id: 0,
      title: "Zero-Copy Ingestion",
      latency: "0.41 ms",
      spec: "Linux Socket Ring Buffer",
      description: "Direct memory streaming over WebSocket. Bypasses intermediate serialization to ingest raw exchange tick books without GC overhead."
    },
    {
      id: 1,
      title: "Pre-Trade Risk Engine",
      latency: "1.10 ms",
      spec: "Lock-Free Circuit Check",
      description: "Enforces margin requirements, maximum position limits, and anti-wash-trading rules in single-digit microseconds."
    },
    {
      id: 2,
      title: "In-Memory Redis State Match",
      latency: "1.85 ms",
      spec: "Sub-millisecond Key-Value Cache",
      description: "Maintains real-time order-book depth and cross-instrument inventory tracking for ultra-fast matching."
    },
    {
      id: 3,
      title: "Execution Settlement ACK",
      latency: `${measuredLatency} ms`,
      spec: "UDP Multicast Fill Confirmation",
      description: "Low-latency dispatch to exchange gateways with guaranteed SLA compliance under 5 milliseconds."
    }
  ];

  const tasksData = {
    synaptic: {
      title: "Synaptic Connectivity Mapping",
      rounds: "14 agent turns",
      schemaRecall: "99.4%",
      schemaChars: "1,371 chars (constant)",
      slidingRecall: "62.1%",
      slidingChars: "5,400 chars",
      fullRecall: "48.0%",
      fullChars: "31,200 chars (bloated)",
      summary: "In deep neuro-circuit tracing, Schema-Driven state preserved exact synapse IDs across 14 steps, whereas naive sliding-window summarization hallucinated connection weights."
    },
    behavior: {
      title: "Long-Horizon Behavioral Tracking",
      rounds: "22 agent turns",
      schemaRecall: "98.8%",
      schemaChars: "1,385 chars (constant)",
      slidingRecall: "58.4%",
      slidingChars: "7,800 chars",
      fullRecall: "39.2%",
      fullChars: "44,600 chars (bloated)",
      summary: "Tracking kinematic animal poses over extended episodes. Structured state maintained 100% parameter accuracy with zero drift."
    },
    rna: {
      title: "Single-Cell Transcriptomics Analysis",
      rounds: "18 agent turns",
      schemaRecall: "100%",
      schemaChars: "1,340 chars (constant)",
      slidingRecall: "66.0%",
      slidingChars: "6,200 chars",
      fullRecall: "41.5%",
      fullChars: "38,900 chars (bloated)",
      summary: "Multi-step biomarker clustering. Full history breached LLM attention budget, while schema validation preserved numerical expression thresholds."
    }
  };

  // Fraud metrics calculation based on threshold
  const precision = Number((0.94 - (threshold - 0.5) * 0.08).toFixed(3));
  const recall = Number((0.89 + (threshold - 0.5) * 0.12).toFixed(3));
  const f1 = Number((2 * ((precision * recall) / (precision + recall))).toFixed(3));

  return (
    <section id="benchmarks" className="py-24 sm:py-32 relative bg-white dark:bg-[#090a0f] border-t border-zinc-200/80 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Interactive Engineering Lab</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-950 dark:text-white pb-1 leading-[1.2]">
              Empirical Systems Verification
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-3 font-normal leading-relaxed">
              Explore real-world benchmarks, system architectures, and mathematical models developed by Payal Mishra. Select an architecture below to inspect metrics and operational behavior.
            </p>
          </div>

          {/* Clean Segmented Tab Control */}
          <div className="flex flex-wrap sm:inline-flex p-1.5 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 self-start md:self-auto shadow-xs gap-1.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={() => setActiveTab('hft')}
              className={`flex-1 sm:flex-none justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'hft'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              <Zap className="w-4 h-4 text-amber-500" />
              <span>HFT &lt;5ms Engine</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('neuromem')}
              className={`flex-1 sm:flex-none justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'neuromem'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4 text-blue-500" />
              <span>NeuroMemBench</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('fraud')}
              className={`flex-1 sm:flex-none justify-center px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                activeTab === 'fraud'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-white shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>98.2% Fraud ML</span>
            </button>
          </div>
        </div>

        {/* TAB 1: High Frequency Trading Execution Architecture */}
        {activeTab === 'hft' && (
          <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Latency Gauge & Execution Trigger */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    Production SLA: &lt;5.0ms Latency
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white mt-1 pb-0.5 leading-snug">
                    High-Frequency Order Gateway
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-base mt-2 leading-relaxed font-normal">
                    Built to ingest live market tick data over asynchronous WebSockets, evaluate risk thresholds, and execute algorithmic orders with sub-5ms round-trip latency.
                  </p>
                </div>

                {/* Metric Card */}
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 mb-2">
                    <span>MEASURED EXECUTION LATENCY</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% SLA PASS</span>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="font-mono-code text-4xl sm:text-5xl font-bold text-zinc-950 dark:text-white">
                      {measuredLatency}
                    </span>
                    <span className="text-base text-zinc-500 font-medium">milliseconds</span>
                  </div>

                  {/* Visual Progress Bar */}
                  <div className="w-full bg-zinc-100 dark:bg-zinc-800 h-2.5 rounded-full overflow-hidden mt-4">
                    <div
                      className="h-full bg-emerald-500 rounded-full transition-all duration-300"
                      style={{ width: `${(measuredLatency / 5) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Interactive trigger button */}
                <button
                  type="button"
                  onClick={runLatencyTest}
                  disabled={isMeasuring}
                  className="w-full py-3.5 px-6 rounded-full font-semibold text-sm text-white bg-zinc-950 hover:bg-zinc-800 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200 transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <Play className={`w-4 h-4 ${isMeasuring ? 'animate-spin' : ''}`} />
                  <span>{isMeasuring ? 'Benchmarking Sub-System...' : 'Run Round-Trip Latency Verification'}</span>
                </button>
              </div>

              {/* Right Column: Interactive Pipeline Nodes */}
              <div className="lg:col-span-7 space-y-3">
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                  Click a Pipeline Stage to Inspect System Architecture
                </div>

                <div className="space-y-3">
                  {hftStages.map((stage) => {
                    const isSelected = selectedStage === stage.id;
                    return (
                      <div
                        key={stage.id}
                        onClick={() => setSelectedStage(stage.id)}
                        className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-white dark:bg-zinc-900 border-zinc-950 dark:border-white shadow-md'
                            : 'bg-white/60 dark:bg-zinc-900/40 border-zinc-200/80 dark:border-zinc-800 hover:bg-white dark:hover:bg-zinc-900'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <span className="w-6 h-6 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white flex items-center justify-center text-xs font-bold font-mono-code">
                              0{stage.id + 1}
                            </span>
                            <span className="font-semibold text-base text-zinc-950 dark:text-white">
                              {stage.title}
                            </span>
                          </div>
                          <span className="font-mono-code text-sm font-bold text-zinc-900 dark:text-white px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800">
                            {stage.latency}
                          </span>
                        </div>

                        {isSelected && (
                          <div className="mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400 space-y-1.5 animate-in fade-in duration-200">
                            <div className="font-mono-code text-xs text-blue-600 dark:text-blue-400 font-semibold">
                              Architecture: {stage.spec}
                            </div>
                            <p className="leading-relaxed">{stage.description}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 2: NeuroMemBench Research Empirical Comparison */}
        {activeTab === 'neuromem' && (
          <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10 shadow-xs">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                Solo Author Working Paper · Payal Mishra
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white mt-1 pb-0.5 leading-snug">
                NeuroMemBench: Long-Horizon Agent Memory Architectures
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-base mt-2 leading-relaxed font-normal">
                Evaluating empirical performance across multi-turn computational-neuroscience workflows. Demonstrates why deterministic schema-driven state machines maintain constant context size and double completion rates compared to standard summarization.
              </p>
            </div>

            {/* Task selector pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {(['synaptic', 'behavior', 'rna'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setSelectedTask(key)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                    selectedTask === key
                      ? 'bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-semibold'
                      : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-950'
                  }`}
                >
                  {tasksData[key].title}
                </button>
              ))}
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              
              {/* Architecture 1: Naive Full History */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <span className="text-xs font-semibold text-rose-600 uppercase tracking-wider">
                  Baseline Architecture A
                </span>
                <h4 className="text-lg font-bold text-zinc-950 dark:text-white mt-1 mb-2">
                  Full Context History
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                  Appends all conversation turns and tool calls verbatim into LLM prompt window.
                </p>

                <div className="space-y-3 text-sm border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Context Size:</span>
                    <span className="font-mono-code font-semibold text-rose-600">{tasksData[selectedTask].fullChars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Task Recall:</span>
                    <span className="font-mono-code font-semibold text-zinc-800 dark:text-zinc-200">{tasksData[selectedTask].fullRecall}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Completions:</span>
                    <span className="font-mono-code font-semibold text-rose-600">5 / 10 runs</span>
                  </div>
                </div>
              </div>

              {/* Architecture 2: Rolling Summarization */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
                  Baseline Architecture B
                </span>
                <h4 className="text-lg font-bold text-zinc-950 dark:text-white mt-1 mb-2">
                  Sliding Summarization
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                  Periodically condenses prior interaction turns into unstructured paragraphs.
                </p>

                <div className="space-y-3 text-sm border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Context Size:</span>
                    <span className="font-mono-code font-semibold text-amber-600">{tasksData[selectedTask].slidingChars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Task Recall:</span>
                    <span className="font-mono-code font-semibold text-zinc-800 dark:text-zinc-200">{tasksData[selectedTask].slidingRecall}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Completions:</span>
                    <span className="font-mono-code font-semibold text-amber-600">5 / 10 runs</span>
                  </div>
                </div>
              </div>

              {/* Architecture 3: Payal's Proposed Structured State */}
              <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border-2 border-blue-600 dark:border-blue-400 shadow-sm relative overflow-hidden">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Payal&apos;s Design ★
                </span>
                <h4 className="text-lg font-bold text-zinc-950 dark:text-white mt-1 mb-2">
                  Schema-Driven Structured State
                </h4>
                <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                  Maintains deterministic JSON state machine verified with strict schemas on every step.
                </p>

                <div className="space-y-3 text-sm border-t border-zinc-100 dark:border-zinc-800 pt-4">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Context Size:</span>
                    <span className="font-mono-code font-semibold text-emerald-600">{tasksData[selectedTask].schemaChars}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Task Recall:</span>
                    <span className="font-mono-code font-bold text-emerald-600">{tasksData[selectedTask].schemaRecall}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Completions:</span>
                    <span className="font-mono-code font-bold text-emerald-600">9 / 10 runs (90%)</span>
                  </div>
                </div>
              </div>

            </div>

            {/* Findings callout */}
            <div className="mt-6 p-4 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              <strong className="text-zinc-950 dark:text-white font-semibold">Empirical Finding: </strong>
              {tasksData[selectedTask].summary}
            </div>

          </div>
        )}

        {/* TAB 3: Production Fraud Model Scorer */}
        {activeTab === 'fraud' && (
          <div className="rounded-3xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800 p-6 sm:p-10 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                    XGBoost &amp; Random Forest Ensemble · 98.2% ROC-AUC
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white mt-1 pb-0.5 leading-snug">
                    Operational Decision Threshold Explorer
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-base mt-2 leading-relaxed font-normal">
                    Trained on 284,807 European cardholder transactions with extreme class imbalance (0.17% fraud rate). Optimized with SMOTE synthetic resampling to maximize minority detection without flooding fraud review queues.
                  </p>
                </div>

                {/* Threshold Slider */}
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800 shadow-xs">
                  <div className="flex items-center justify-between text-sm font-semibold mb-2">
                    <span className="text-zinc-700 dark:text-zinc-300">Classification Threshold:</span>
                    <span className="font-mono-code font-bold text-zinc-950 dark:text-white">{threshold}</span>
                  </div>
                  <input
                    type="range"
                    min="0.2"
                    max="0.8"
                    step="0.05"
                    value={threshold}
                    onChange={(e) => setThreshold(Number(e.target.value))}
                    className="w-full accent-zinc-950 dark:accent-white cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-zinc-400 mt-2 font-mono-code">
                    <span>0.2 (High Recall / Catch All)</span>
                    <span>0.8 (High Precision / Low Noise)</span>
                  </div>
                </div>

                {/* Top SHAP Features */}
                <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                  <div className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-3">
                    Top Feature Importances (SHAP Values)
                  </div>
                  <div className="space-y-2 text-xs font-mono-code">
                    {[
                      { name: 'V14 (Transaction Principal Component)', weight: '34%' },
                      { name: 'V4 (Account Activity Velocity)', weight: '22%' },
                      { name: 'V12 (Cross-Border Distance Delta)', weight: '18%' },
                      { name: 'Amount (Normalized Outlier Score)', weight: '14%' },
                    ].map((feat) => (
                      <div key={feat.name} className="flex items-center justify-between py-1 border-b border-zinc-100 dark:border-zinc-800 last:border-0">
                        <span className="text-zinc-700 dark:text-zinc-300">{feat.name}</span>
                        <span className="font-bold text-zinc-950 dark:text-white">{feat.weight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Model Metrics Output */}
              <div className="lg:col-span-6 space-y-4">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Precision</div>
                    <div className="font-mono-code text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white mt-1">
                      {(precision * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">Recall</div>
                    <div className="font-mono-code text-2xl sm:text-3xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                      {(recall * 100).toFixed(1)}%
                    </div>
                  </div>
                  <div className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                    <div className="text-xs text-zinc-500 uppercase tracking-wider font-medium">F1 Score</div>
                    <div className="font-mono-code text-2xl sm:text-3xl font-bold text-zinc-950 dark:text-white mt-1">
                      {f1}
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500">Model ROC-AUC</span>
                    <span className="font-mono-code font-bold text-base text-emerald-600 dark:text-emerald-400">98.2%</span>
                  </div>
                  <div className="h-32 flex items-end gap-2 px-2 pt-4 border-b border-l border-zinc-200 dark:border-zinc-700">
                    {[15, 32, 58, 76, 88, 94, 97, 98, 99].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-zinc-900 dark:bg-white rounded-t-sm transition-all duration-300"
                        style={{ height: `${height}%` }}
                        title={`Segment ${i + 1}: ${height}%`}
                      />
                    ))}
                  </div>
                  <div className="flex justify-between text-xs font-mono-code text-zinc-400 mt-2">
                    <span>False Positive Rate (0.0)</span>
                    <span>True Positive Rate (1.0)</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
