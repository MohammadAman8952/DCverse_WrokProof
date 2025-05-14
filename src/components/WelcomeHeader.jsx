const WelcomeHeader = ({ userName }) => (
  <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-6 px-4 sm:px-6">
    <h1 className="text-2xl sm:text-3xl font-bold">AI Dashboard</h1>
    <p className="mt-2 text-lg">Welcome, {userName}!</p>
  </header>
);
export default WelcomeHeader;