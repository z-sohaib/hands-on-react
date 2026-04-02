function LoggedOut() {
  return (
    <div className="p-4 w-screen flex justify-between items-center bg-green-500 text-white">
      <h1>LOGO</h1>
      <div className="flex gap-2">
        <button className="border border-white p-2">Sign In</button>
        <button className="border border-white p-2">Sign Up</button>
      </div>
    </div>
  );
}

export default LoggedOut;
