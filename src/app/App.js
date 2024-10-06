const App = () => {
  return (
    <div
    className="h-screen w-screen flex items-center justify-center bg-cover bg-no-repeat"
    style={{
      backgroundImage: "url('/Rectangle 1.png')",
    }}
  >
    <div className="bg-white/20 bg-opacity-30 p-10 rounded-[50px] shadow-lg max-w-md w-full">
    <div className="min-w-[350px] min-h-[350px] left-[221px] top-[4px] rounded-full absolute bg-[#C4C4C400] border-[47px] border-[#00000040]  z-0 pointer-events-none"></div>

      <h2 className="text-[50px] font-bold text-center mb-6 text-white/80">LOGIN</h2>
      <form>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3  border bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3  border bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </form>
        <div className="flex justify-between ">
        <button className="w-[202px] h-[55px] bg-black text-white p-3 rounded-lg font-semibold hover:bg-gray-800 transition">
          LOGIN
        </button>
    <div className="flex flex-col gap-2 text-white">
        <a href="#" className="text-sm hover:underline ">
          Forgot password
        </a>
        
        <a href="#" className="text-sm hover:underline ml-12">
          Register
        </a>
        </div>
      </div>
    </div>
  </div>
 
  )
}
export default App