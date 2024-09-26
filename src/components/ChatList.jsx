export default function ChatList({ setCurrentChat }) {
  const contacts = [
    { name: 'John Doe', lastMessage: 'Hey, are you there?' },
    { name: 'Jane Doe', lastMessage: 'See you later!' },
  ];

  return (
    <div className="p-4">
      {contacts.map((contact, index) => (
        <div key={index} className="flex items-center space-x-4 mb-4 cursor-pointer" onClick={() => setCurrentChat(contact.name)}>
          <img className="w-10 h-10 rounded-full" src={`/icons/icon-192x192.png`} alt={contact.name} />
          <div>
            <p className="font-semibold">{contact.name}</p>
            <p className="text-sm text-gray-500">{contact.lastMessage}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
