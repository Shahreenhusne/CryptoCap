

export const Home = () => {
  return (
    <>
      <div className=" px-0 py-4 pb-28">
        <div className="max-w-[600px] mobile:max-w-[100%] my-20 mx-auto flex flex-col items-center text-center gap-8">
          <h1 className=" font-mono text-3xl">Crypto Marketplace</h1>
          <form className="p-2 w-[80%] mobile:w-[40%] bg-white rounded-lg text-xl flex justify-between items-center gap-2">
            <input
              className="flex-1 text-base outline-none pl-2"
              type="text"
              placeholder="Search crypto...."
            />
            <button
              className="px-4 py-2 rounded-md cursor-pointer text-base bg-[#6ab5e7]"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
        <div className="max-w-[800px] m-auto rounded-2xl bg-gradient-to-r from-[#ffd89b] to-[#19547b]">
          <div className=" grid grid-cols-12 py-4 px-5 border-b-1 border-black ">
            <p className="col-span-1">#</p>
            <p className="col-span-4">Coins</p>
            <p className="col-span-2">Price</p>
            <p className="col-span-2 text-center">24H Change</p>
            <p className=" text-end col-span-3">Market Cap</p>
          </div>
        </div>
      </div>
    </>
  );
}
