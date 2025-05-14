const AvatarCard = ({ avatar }) => (
  <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center transition-transform hover:scale-105">
    <img
      src={avatar.image}
      alt={avatar.name}
      className="w-24 h-24 rounded-full object-cover mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-800">{avatar.name}</h3>
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
      Edit
    </button>
  </div>
);
export default AvatarCard;