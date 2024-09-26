import ChatList from './ChatList';

export default function Sidebar({ setCurrentChat }) {
  return (
    <div className="w-full">
      <div className="p-4">
        <input
          type="text"
          placeholder="Search or start a new chat"
          className="p-2 w-full rounded-full bg-gray-100 border border-gray-300"
        />
      </div>
      <ChatList setCurrentChat={setCurrentChat} />
    </div>
  );
}
