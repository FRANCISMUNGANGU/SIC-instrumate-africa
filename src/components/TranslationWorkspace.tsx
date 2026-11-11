import { useState } from 'react'
import { translateText, type TranslationDirection } from '../api/translation'

function TranslationWorkspace() {
  const [direction, setDirection] = useState<TranslationDirection>('english-to-ksl')
  const [inputText, setInputText] = useState('')
  const [outputText, setOutputText] = useState('')
  const [isTranslating, setIsTranslating] = useState(false)
  const [error, setError] = useState('')

  const isEnglishToKsl = direction === 'english-to-ksl'
  const inputTitle = isEnglishToKsl ? 'English to KSL' : 'KSL to English'
  const inputDescription = isEnglishToKsl
    ? 'Turn English text into KSL gloss'
    : 'Get the English meaning of KSL gloss'
  const inputPlaceholder = isEnglishToKsl
    ? 'I am going to the hospital tomorrow'
    : 'YESTERDAY ME SCHOOL GO'
  const inputFocusClasses = isEnglishToKsl
    ? 'focus:border-[#5B34EA] focus:ring-1 focus:ring-[#5B34EA]'
    : 'focus:border-[#FFC073] focus:ring-1 focus:ring-[#FFC073]'
  const translateButtonClasses = isEnglishToKsl
    ? 'bg-[#5B34EA] text-white hover:bg-[#4a2bc2] shadow-purple-500/30'
    : 'bg-[#FFD18B] text-gray-900 hover:bg-[#ffc266] shadow-orange-500/20'

  async function handleTranslate() {
    if (!inputText.trim()) {
      setError('Enter text to translate.')
      return
    }

    setError('')
    setIsTranslating(true)

    try {
      setOutputText(await translateText(inputText.trim(), direction))
    } catch (translationError) {
      setError(translationError instanceof Error ? translationError.message : 'Translation failed.')
    } finally {
      setIsTranslating(false)
    }
  }

  function handleSwap() {
    setDirection(isEnglishToKsl ? 'ksl-to-english' : 'english-to-ksl')
    setInputText(outputText)
    setOutputText(inputText)
    setError('')
  }

  function handleClear() {
    setInputText('')
    setOutputText('')
    setError('')
  }

  return (
    <div className="relative flex flex-col md:flex-row gap-6 mb-16">
      <div className={`flex-1 bg-white rounded-[2rem] p-6 shadow-xl ${isEnglishToKsl ? 'shadow-purple-900/5 border border-purple-100' : 'shadow-orange-900/5 border border-orange-100'}`}>
        <div className="flex items-center gap-3 mb-1">
          <div className={`w-8 h-8 ${isEnglishToKsl ? 'bg-purple-50 text-purple-400' : 'bg-orange-50 text-orange-400'} rounded flex items-center justify-center text-xs`}>
            {isEnglishToKsl ? '📝' : '🔤'}
          </div>
          <h2 className="font-bold text-xl text-gray-800">{inputTitle}</h2>
        </div>
        <p className="text-gray-400 text-sm mb-6 ml-11">{inputDescription}</p>

        <div className="relative">
          <textarea
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
            maxLength={512}
            className={`w-full h-32 bg-transparent p-4 border border-gray-200 rounded-2xl resize-none outline-none ${inputFocusClasses} transition-all`}
            placeholder={inputPlaceholder}
          />
          <span className="absolute bottom-4 right-4 text-xs text-gray-400">{inputText.length}/512</span>
        </div>

        <div className="flex justify-between mt-4">
          <button
            onClick={handleClear}
            className="px-6 py-2.5 rounded-xl border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
          >
            Clear
          </button>
          <button
            onClick={handleTranslate}
            disabled={isTranslating}
            className={`px-8 py-2.5 rounded-xl font-medium transition-colors shadow-lg disabled:cursor-not-allowed disabled:opacity-60 ${translateButtonClasses}`}
          >
            {isTranslating ? 'Translating...' : 'Translate →'}
          </button>
        </div>
        {error && <p className="mt-4 text-sm text-red-600" role="alert">{error}</p>}
      </div>

      <button
        onClick={handleSwap}
        aria-label={`Swap to ${isEnglishToKsl ? 'KSL to English' : 'English to KSL'}`}
        className="relative self-center -my-3 md:absolute md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-20 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 text-gray-400 hover:text-[#5B34EA] transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 1l4 4-4 4"/>
          <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
          <path d="M7 23l-4-4 4-4"/>
          <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
        </svg>
      </button>

      <div className={`flex-1 bg-white rounded-[2rem] p-6 shadow-xl ${isEnglishToKsl ? 'shadow-orange-900/5 border border-orange-100' : 'shadow-purple-900/5 border border-purple-100'}`}>
        <div className="flex items-center gap-3 mb-1">
          <div className={`w-8 h-8 ${isEnglishToKsl ? 'bg-orange-50 text-orange-400' : 'bg-purple-50 text-purple-400'} rounded flex items-center justify-center text-xs`}>
            {isEnglishToKsl ? '🔤' : '📝'}
          </div>
          <h2 className="font-bold text-xl text-gray-800">{isEnglishToKsl ? 'KSL gloss output' : 'English output'}</h2>
        </div>
        <p className="text-gray-400 text-sm mb-6 ml-11">Your translation will appear here</p>
        <div className="mt-6 min-h-32 p-4 border border-gray-100 rounded-xl">
          {outputText ? (
            isEnglishToKsl ? (
              <div className="flex gap-2 flex-wrap">
                {outputText.split(/\s+/).filter(Boolean).map((word, index) => (
                  <span key={`${word}-${index}`} className="px-4 py-1.5 bg-[#5B34EA] text-white text-sm font-bold rounded-lg">
                    {word}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-gray-800 font-medium">{outputText}</p>
            )
          ) : (
            <p className="text-gray-400">No translation yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default TranslationWorkspace
