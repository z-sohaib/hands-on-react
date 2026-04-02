function LoggedIn({ name }) {
  return (
    <div className="p-4 w-screen flex justify-between items-center bg-green-500 text-white">
      <div className="flex gap-2">
        <h1>LOGO</h1>
        <h2>Welcome Back, {name}!</h2>
      </div>
      <div className="flex gap-2">
        <button className="border border-white p-2">Sign Out</button>
      </div>
    </div>
  );
}

export default LoggedIn;
