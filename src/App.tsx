import { useState } from 'react'
import './App.css'

// Importing your specific logos based on your folder structure
import samsungLogo from './assets/logos/Samsung_Black_icon.svg'
import jhubLogo from './assets/logos/Jhub-logo.webp'
import jkuatLogo from './assets/logos/Jkuat.jpeg'

function App() {
  // State to manage the text inside the textareas so the Clear buttons work
  const [englishText, setEnglishText] = useState('')
  const [kslText, setKslText] = useState('')

  return (
    <div 
      className="min-h-screen relative pb-32"
      style={{
        backgroundColor: '#f8f9fa',
        backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)',
        backgroundSize: '24px 24px'
      }}
    >
      <div className="max-w-7xl mx-auto p-8 relative z-10">
        
        {/* Navbar Area */}
        <header className="flex justify-between items-center mb-16">
          <div className="flex items-baseline gap-2">
            <span className="text-[#5B34EA] font-black text-3xl tracking-tighter">Instrumate</span>
          </div>
          <div className="text-gray-400 font-medium text-sm">Samsung Innovation Campus</div>
        </header>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto">
          
          <div className="flex justify-between items-start mb-12">
            <div>
              <h1 className="text-5xl font-extrabold leading-tight text-[#1E1B4B]">
                Kenyan Sign<br />
                Language<br />
                <span className="text-[#5B34EA]">Translator</span>
              </h1>
              <p className="text-gray-400 text-2xl font-medium mt-4">
                Bridging communication in Kenya
              </p>
            </div>
            
            {/* KSL Hand Icon Element */}
            <div className="hidden md:flex relative w-48 h-48 bg-[#F3F0FF] rounded-full items-center justify-center shadow-inner">
               <div className="absolute top-4 right-4 w-8 h-8 bg-[#FFD18B] rounded-full shadow-sm"></div>
               {/* Sign Language Hand SVG */}
               <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="#5B34EA" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4"/>
                  <path d="M14 10V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5"/>
                  <path d="M10 10.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"/>
                  <path d="M6 14v-2a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v9a6 6 0 0 0 6 6h2.4a5 5 0 0 0 4.2-2.2l2.6-3.8a2 2 0 0 0-.2-2.7L18 11"/>
               </svg>
            </div>
          </div>

          {/* Translator Cards Container */}
          <div className="relative flex flex-col md:flex-row gap-6 mb-16">
            
            {/* English to KSL Card */}
            <div className="flex-1 bg-white rounded-[2rem] p-6 shadow-xl shadow-purple-900/5 border border-purple-100">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-purple-50 rounded flex items-center justify-center text-purple-400 text-xs">📝</div>
                <h2 className="font-bold text-xl text-gray-800">English to KSL</h2>
              </div>
              <p className="text-gray-400 text-sm mb-6 ml-11">Turn English text into KSL gloss</p>
              
              <div className="relative">
                <textarea 
                  value={englishText}
                  onChange={(e) => setEnglishText(e.target.value)}
                  className="w-full h-32 bg-transparent p-4 border border-gray-200 rounded-2xl resize-none outline-none focus:border-[#5B34EA] focus:ring-1 focus:ring-[#5B34EA] transition-all"
                  placeholder="I am going to the hospital tomorrow"
                ></textarea>
                <span className="absolute bottom-4 right-4 text-xs text-gray-400">{englishText.length}/512</span>
              </div>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => setEnglishText('')}
                  className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                >
                  Clear
                </button>
                <button className="px-8 py-2.5 rounded-xl bg-[#5B34EA] text-white font-medium hover:bg-[#4a2bc2] transition-colors shadow-lg shadow-purple-500/30">Translate →</button>
              </div>

              {/* Gloss Output Chips */}
              <div className="flex gap-2 mt-6 flex-wrap">
                <span className="px-4 py-1.5 bg-[#5B34EA] text-white text-sm font-bold rounded-lg">TOMORROW</span>
                <span className="px-4 py-1.5 bg-[#5B34EA] text-white text-sm font-bold rounded-lg">ME</span>
                <span className="px-4 py-1.5 bg-[#5B34EA] text-white text-sm font-bold rounded-lg">HOSPITAL</span>
                <span className="px-4 py-1.5 bg-[#5B34EA] text-white text-sm font-bold rounded-lg">GO</span>
              </div>
            </div>

            {/* Center Sync Icon */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 hidden md:flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 1l4 4-4 4"/>
                <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                <path d="M7 23l-4-4 4-4"/>
                <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
              </svg>
            </div>

            {/* KSL to English Card */}
            <div className="flex-1 bg-white rounded-[2rem] p-6 shadow-xl shadow-orange-900/5 border border-orange-100">
               <div className="flex items-center gap-3 mb-1">
                <div className="w-8 h-8 bg-orange-50 rounded flex items-center justify-center text-orange-400 text-xs">🔤</div>
                <h2 className="font-bold text-xl text-gray-800">KSL to English</h2>
              </div>
               <p className="text-gray-400 text-sm mb-6 ml-11">Get the English meaning of KSL gloss</p>
               
               <div className="relative">
                 <textarea 
                  value={kslText}
                  onChange={(e) => setKslText(e.target.value)}
                  className="w-full h-32 bg-transparent p-4 border border-gray-200 rounded-2xl resize-none outline-none focus:border-[#FFC073] focus:ring-1 focus:ring-[#FFC073] transition-all"
                  placeholder="YESTERDAY ME SCHOOL GO"
                ></textarea>
                <span className="absolute bottom-4 right-4 text-xs text-gray-400">{kslText.length}/512</span>
               </div>
              
              <div className="flex justify-between mt-4">
                <button 
                  onClick={() => setKslText('')}
                  className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                >
                  Clear
                </button>
                <button className="px-8 py-2.5 rounded-xl bg-[#FFD18B] text-gray-900 font-medium hover:bg-[#ffc266] transition-colors shadow-lg shadow-orange-500/20">Translate →</button>
              </div>

              <div className="mt-6 p-4 border border-gray-100 rounded-xl">
                <p className="text-gray-800 font-medium">I went to school yesterday.</p>
              </div>
            </div>

          </div>

          {/* How it works Banner */}
          <div className="bg-[#F6F4FF] rounded-2xl py-4 px-8 flex flex-wrap items-center gap-8 justify-center mb-16 shadow-sm border border-purple-50">
            <span className="font-bold text-gray-800">How it works</span>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="w-6 h-6 rounded-full bg-[#5B34EA] text-white flex items-center justify-center font-bold text-xs">1</span>
              Enter your text
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="w-6 h-6 rounded-full bg-[#5B34EA] text-white flex items-center justify-center font-bold text-xs">2</span>
              Click Translate
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <span className="w-6 h-6 rounded-full bg-[#5B34EA] text-white flex items-center justify-center font-bold text-xs">3</span>
              Get instant results
            </div>
          </div>

          {/* Partnership Logos */}
          <div className="flex flex-col items-center justify-center">
            <p className="text-gray-400 text-sm mb-6">In partnership with</p>
            <div className="flex gap-6 flex-wrap justify-center">
              <div className="border border-gray-200 rounded-[2rem] px-8 py-4 bg-white flex items-center justify-center shadow-sm w-48 h-20">
                <img src={jhubLogo} alt="JHUB Africa" className="max-h-full object-contain" />
              </div>
              <div className="border border-gray-200 rounded-full px-8 py-2 bg-white flex items-center justify-center shadow-sm w-40 h-20">
                 <img src={samsungLogo} alt="Samsung" className="max-h-10 object-contain" />
              </div>
              <div className="border border-gray-200 rounded-full px-8 py-2 bg-white flex items-center justify-center shadow-sm w-40 h-20">
                 <img src={jkuatLogo} alt="JKUAT" className="max-h-full object-contain" />
              </div>
            </div>
          </div>

        </main>
      </div>

      {/* Bottom Wave Pattern */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg className="relative block w-full h-[150px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C300,100 600,-50 1200,50 L1200,120 L0,120 Z" fill="#FFD18B" opacity="0.3"></path>
          <path d="M0,30 C300,130 600,-20 1200,80 L1200,120 L0,120 Z" fill="#5B34EA" opacity="0.6"></path>
          <path d="M0,60 C300,160 600,10 1200,110 L1200,120 L0,120 Z" fill="#5B34EA"></path>
        </svg>
      </div>
    </div>
  )
}

export default App