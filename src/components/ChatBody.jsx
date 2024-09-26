export default function ChatBody({ messages }) {
  return (
    <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
      {messages.map((msg, index) => (
        <div key={index} className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'} mb-2`}>
          <div className={`p-3 max-w-xs rounded-lg ${msg.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
            <p>{msg.text}</p>
            <span className="text-xs block mt-2 text-right">{msg.timestamp}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
