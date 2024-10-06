const App = () => {
    return (
      <div
        className="h-screen w-screen flex items-center justify-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/Rectangle 1.png')",
        }}
      >
        <div className="relative bg-white/20 bg-opacity-30 p-6 sm:p-8 lg:p-10 rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] shadow-lg max-w-md w-full">
          <div className="min-w-[200px] min-h-[200px] sm:min-w-[250px] sm:min-h-[250px] lg:min-w-[300px] lg:min-h-[300px] right-[331px] bottom-[194px] rounded-full absolute bg-[#C4C4C400] border-[30px] sm:border-[40px] lg:border-[47px] border-[#00000040] z-0 pointer-events-none"></div>
  
          <h2 className="text-[30px] sm:text-[40px] lg:text-[50px] font-bold text-center mb-6 text-white/80">
            LOGIN
          </h2>
  
          <form>
            <div className="mb-4">
              <input
                type="text"
                placeholder="Username"
                className="w-full p-2 sm:p-3 border bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <div className="mb-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-2 sm:p-3 border bg-white/20 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
          </form>
  
          <div className="flex justify-between">
            <button className="w-[150px] sm:w-[180px] lg:w-[202px] h-[45px] sm:h-[50px] lg:h-[55px] bg-black text-white p-2 sm:p-3 rounded-lg font-semibold hover:bg-gray-800 transition">
              LOGIN
            </button>
  
            <div className="flex flex-col gap-2 text-white">
              <a href="#" className="text-xs sm:text-sm hover:underline">
                Forgot password
              </a>
              <a href="#" className="text-xs sm:text-sm hover:underline lg:ml-12">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default App;
  