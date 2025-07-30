interface IMessage {
  sender: string
  content: string
}

export async function FetchMessageOnChat(message: string, language: 'pt' | 'en' | 'es' =  'pt'): Promise<IMessage | null> {
  try {
    const response = await fetch('neatly-api-production.up.railway.app/chatweb', {
      method: 'POST',
      headers:  { 'Content-type': 'application/json'},
      body: JSON.stringify({ content: message, language})
    })

    if(!response.ok) throw new Error('Request failed')

    return await response.json()
  } catch (err) {
    console.error('[BOT_FETCH_ERROR]', err)
    return null
  }
}