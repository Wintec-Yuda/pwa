export default function ChatHeader({ currentChat }) {
  return (
    <div className="bg-gray-200 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <img className="w-10 h-10 rounded-full" src="/icons/icon-192x192.png" alt="Profile" />
        <div className="ml-4">
          <p className="text-lg font-semibold">{currentChat}</p>
          <p className="text-sm text-gray-500">Online</p>
        </div>
      </div>
      <div className="flex space-x-4">
        <button className="p-2"><i className="fas fa-video"></i></button>
        <button className="p-2"><i className="fas fa-phone"></i></button>
        <button className="p-2"><i className="fas fa-ellipsis-v"></i></button>
      </div>
    </div>
  );
}
