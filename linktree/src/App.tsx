function App() {

  return (
    <div className="w-screen h-screen bg-[#6359BD] flex items-center justify-center">

      <div className="bg-[#9A90F9] pt-12 pb-6 pl-17 pr-17 rounded-[50px] shadow w-[560px] h-[560px]">
        <h1 className="text-3xl font-bold text-black text-center">
          Faça Login
        </h1>

        <p className="text-center mt-2">
          <span className="text-gray-700">Nova conta?</span>
          {" "}
          <span className="text-gray-800 font-semibold">Cadastre-se</span>
        </p>
        <div className="mt-6 flex flex-col gap-3">
          <div className="bg-white text-gray-800 flex items-center py-1.5 px-4 rounded-[50px] border-b-2 border-gray-700">
            <img src="/img/google.png" className="w-5 h-5 mr-3" />
            <span className="mx-auto">
              Faça login com google
            </span>

          </div>
            <div className="bg-white text-gray-800 flex items-center py-1.5 px-4 rounded-[50px] border-b-2 border-gray-700">
              <img src="/img/apple.png" className="w-5 h-5 mr-3" />
                <span className="mx-auto">
                  Faça login com Apple
                </span>
            </div>

          <div className="bg-white text-gray-800 flex items-center py-1.5 px-4 rounded-[50px] border-b-2 border-gray-700">
            <img src="/img/tiktok.png" className="w-5 h-5 mr-3" />
            <span className="mx-auto">
              Faça login com TikTok
            </span>
          </div>

          <div className="bg-white text-gray-800 flex items-center py-1.5 px-4 rounded-[50px] border-b-2 border-gray-700">
            <img src="/img/instagram.png" className="w-5 h-5 mr-3" />
            <span className="mx-auto">
              Faça login com IG Business
            </span>
          </div>

        </div>

        <p className="text-center text-sm text-gray-800 mt-4">
          ou com email
        </p>

        <div className="mt-4 flex flex-col gap-3">

          <div className="bg-white text-gray-600 flex items-center py-1.5 px-3 rounded-[50px] border-b-2 border-gray-800">
            Meu Email
          </div>

          <div className="bg-white text-gray-600 flex items-center py-1.5 px-3 rounded-[50px] border-b-2 border-gray-800">
            My - Password
          </div>

        </div>

        <p className="text-sm text-gray-800 text-right mt-1">
          Esqueceu a senha?
        </p>

        <div className="mt-4 bg-[#4C42AA] text-white text-center py-1.5 rounded-[50px]">
          Entrar
        </div>

      </div>

    </div>
  );
}

export default App;