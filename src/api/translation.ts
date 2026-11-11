const apiBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/+$/, '')

export type TranslationDirection = 'english-to-ksl' | 'ksl-to-english'

type TranslationResponse =
  | string
  | {
      translation?: string
      translated_text?: string
      text?: string
      result?: string
      gloss?: string
    }

function getTranslation(response: TranslationResponse): string {
  if (typeof response === 'string') {
    return response
  }

  const translation = response.translation ?? response.translated_text ?? response.text ?? response.result ?? response.gloss

  if (!translation) {
    throw new Error('The translation service returned no translation.')
  }

  return translation
}

export async function translateText(text: string, direction: TranslationDirection): Promise<string> {
  if (!apiBaseUrl) {
    throw new Error('VITE_API_URL is not configured.')
  }

  const response = await fetch(`${apiBaseUrl}/translate/${direction}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ text }),
  })

  if (!response.ok) {
    const errorMessage = await response.text()
    throw new Error(errorMessage || `Translation failed with status ${response.status}.`)
  }

  return getTranslation(await response.json() as TranslationResponse)
}
