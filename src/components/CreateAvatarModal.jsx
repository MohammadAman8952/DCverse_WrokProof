const CreateAvatarModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
        <h2 className="text-xl font-bold mb-4">Create New Avatar</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Avatar Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="file"
            accept="image/*"
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mt-6 flex justify-end space-x-2">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateAvatarModal;