function UserCard({ name, email }) {
  return (
    <div className="bg-white shadow-xl rounded-xl p-8 max-w-sm mx-auto transition-transform hover:scale-105 border border-pink-100">
      <div className="flex items-center space-x-4">
        <div className="bg-pink-100 text-pink-600 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
    </div>
  );
}

export default UserCard;