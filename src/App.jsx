import { useState, useEffect } from 'react';
import './App.css';
import WelcomeHeader from './components/WelcomeHeader';
import AvatarCard from './components/AvatarCard';
import CreateAvatarModal from './components/CreateAvatarModal';

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const userName = "User";

  // Fetch avatars from DummyJSON API
  useEffect(() => {
    fetch('https://dummyjson.com/users?limit=3')
      .then(res => res.json())
      .then(data => {
        const formattedAvatars = data.users.map(user => ({
          id: user.id,
          name: `${user.firstName} ${user.lastName}`,
          image: user.image
        }));
        setAvatars(formattedAvatars);
      })
      .catch(err => console.error('Error fetching avatars:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <WelcomeHeader userName={userName} />
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6">
        <h2 className="text-xl font-semibold mb-6">Your Avatars</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {avatars.map(avatar => (
            <AvatarCard key={avatar.id} avatar={avatar} />
          ))}
        </div>
      </main>
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
        </svg>
      </button>
      <CreateAvatarModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default App;