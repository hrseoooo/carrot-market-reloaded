export default function Home() {
  return (
    <main
      className="bg-gray-100 sm:bg-red-100 md:bg-green-100 lg:bg-cyan-100 xl:bg-orange-100 2xl:bg-purple-100
      h-screen flex items-center justify-center p-5"
    >
      <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
        <input
          className="w-full rounded-full h-10 bg-gray-200 pl-5 outline-none ring ring-transparent
           focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow invalid:focus:ring-red-500 peer"
          type="email"
          required
          placeholder="Email address"
        ></input>
        <span className="text-red-500 font-medium hidden peer-invalid:block">
          Email is required.
        </span>
        <button
          className="bg-opacity-50 text-white py-2 rounded-full active:scale-90 focus:scale-90
          transition-transform font-medium outline-none md:px-10 bg-black" // 버튼 그라데이션 : bg-linear-to-tr from-cyan-500 to-purple-400 (gredient -> linear)
        >
          Log in
        </button>

        {/* <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <span className="text-gray-500 font-semibold -mb-1">
              In transit
            </span>
            <span className="text-4xl font-semibold">Coolblue</span>
          </div>
          <div className="size-12 rounded-full bg-orange-400"></div>
        </div>

        <div className="my-2 flex items-center gap-2">
          <span
            className="bg-green-400 text-white uppercase 
            px-2.5 py-1.5 text-xs font-medium rounded-full transition
            hover:bg-green-500 hover:scale-125"
          >
            Today
          </span>
          <span>9:30 - 10:30</span>
        </div>

        <div className="relative">
          <div className="bg-gray-200 absolute rounded-full w-full h-2" />
          <div className="bg-green-400 absolute rounded-full w-2/3 h-2" />
        </div>

        <div className="flex justify-between itemas-cneter mt-5 text-gray-600">
          <span>Expected</span>
          <span>Sorting center</span>
          <span>In transit</span>
          <span className="text-gray-400">Delivered</span>
        </div> */}
      </div>
    </main>
  );
}
