import './App.css'
import TranslationWorkspace from './components/TranslationWorkspace'

// Importing your specific logos based on your folder structure
import samsungLogo from './assets/logos/Samsung_Black_icon.svg'
import jhubLogo from './assets/logos/Jhub-logo.webp'
import jkuatLogo from './assets/logos/Jkuat.jpeg'

function App() {
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
          <TranslationWorkspace />

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