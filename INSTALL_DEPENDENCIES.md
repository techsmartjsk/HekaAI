# Install Required Dependencies

To enable the "Talk to Heka" widget on your website, you need to install the following dependencies:

```bash
cd website
pnpm add react-hot-toast lucide-react
```

Or if using npm:
```bash
cd website
npm install react-hot-toast lucide-react
```

Or if using yarn:
```bash
cd website
yarn add react-hot-toast lucide-react
```

## Environment Variable

Make sure to set the `NEXT_PUBLIC_API_URL` environment variable in your `.env.local` file:

```
NEXT_PUBLIC_API_URL=https://backend.hekaai.co/api/v1
```

Or for local development:
```
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
```

## Features Added

1. **Floating Widget Button**: A "Talk to Heka" button appears in the bottom-right corner of the website
2. **Hero Section Integration**: The "Talk to Heka" button in the hero section opens the widget modal
3. **Real-time Voice Chat**: Visitors can have real-time conversations using their device's microphone
4. **Voice Selection**: Visitors can choose between Male or Female voice before starting
5. **Chat Interface**: Conversation history is displayed in a chat-like interface
6. **Speech Recognition**: Uses browser's Web Speech API (Chrome/Edge recommended)
7. **Audio Responses**: AI responses are played as audio using ElevenLabs TTS

## Browser Compatibility

- **Chrome/Edge**: Full support with Web Speech API
- **Safari/Firefox**: Limited support (may need fallback)

The widget connects to the backend's public WebSocket endpoint (`/api/v1/public/ws/chat`), allowing visitors to have real-time voice conversations with the AI assistant without authentication.
