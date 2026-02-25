import React from 'react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-indigo-500/30">
      {/* Navigation */}
      <nav className="fixed w-full z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center font-bold">iD</div>
              <span className="text-xl font-bold tracking-tight text-white">intelliDocs</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#mcp" className="hover:text-white transition-colors">MCP & API</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
              <button className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-full transition-all shadow-lg shadow-indigo-600/20">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[0%] right-[-5%] w-[30%] h-[30%] bg-violet-600/20 rounded-full blur-[100px]" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Stop Searching.<br />Start Knowing.
          </h1>
          <p className="text-lg lg:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The first enterprise-ready RAG Document Hub that speaks your data's language. 
            Built for scale, integrated with MCP, and ready for your existing workflows.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-indigo-600/30">
              Get Started Today
            </button>
            <button className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all">
              View Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 relative bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Data, Your Truth</h2>
            <p className="text-slate-400">Eliminate AI hallucinations with grounded, verifiable intelligence.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              title="Filtered Vector Search" 
              desc="Pinpoint semantic accuracy across millions of documents with intelligent metadata filtering."
              icon="🔍"
            />
            <FeatureCard 
              title="Citable AI Chat" 
              desc="Conversational interface that provides direct citations for every claim made."
              icon="💬"
            />
            <FeatureCard 
              title="Automated Indexing" 
              desc="Seamless ingestion of PDF, DOCX, and TXT with real-time vectorization status."
              icon="⚡"
            />
            <FeatureCard 
              title="Two-Stage Semantic Pipeline" 
              desc="Advanced retrieval-rerank technology that ensures pinpoint accuracy for complex enterprise queries."
              icon="🔄"
            />
            <FeatureCard 
              title="Verified Grounding Architecture" 
              desc="A system-wide guarantee that every AI claim is mathematically anchored to your source data."
              icon="⚖️"
            />
          </div>
        </div>
      </section>

      {/* MCP & API Section */}
      <section id="mcp" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Built for Developers & Enterprise</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-indigo-400 mb-2">MCP Support</h3>
                  <p className="text-slate-400">The Model Context Protocol allows Claude, Gemini, and other AI models to connect directly to your intelliDocs hub as a secure context provider. Every model request is enhanced by our **Two-Stage Semantic Pipeline** for superior context retrieval.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-violet-400 mb-2">Robust API</h3>
                  <p className="text-slate-400">Integrate our RAG engine into your custom applications with our developer-first REST API and webhook system. Leverage our **Verified Grounding Architecture** to ensure your custom apps deliver high-fidelity, hallucination-free responses.</p>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 font-mono text-sm overflow-hidden shadow-2xl">
              <div className="flex gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <pre className="text-slate-300">
                <code>{`// Connect via MCP
const mcp = new IntelliDocsMCP({
  apiKey: process.env.ID_KEY,
  hubId: 'finance-2024'
});

const result = await mcp.query({
  text: "What is the liability limit?"
});`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to transform your workflow?</h2>
          <div className="bg-gradient-to-r from-indigo-600 to-violet-600 p-[1px] rounded-2xl">
            <div className="bg-slate-950 p-12 rounded-2xl">
              <p className="text-xl text-slate-400 mb-10">Join the enterprises using intelliDocs to turn static archives into active intelligence.</p>
              <button className="bg-white text-slate-950 px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-200 transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-white/5 text-center text-slate-500 text-sm">
        © 2026 intelliDocs. All rights reserved. Currently running on idlp.agentic-sw.com
      </footer>
    </div>
  );
}

function FeatureCard({ title, desc, icon }: { title: string, desc: string, icon: string }) {
  return (
    <div className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 transition-all group">
      <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
}
