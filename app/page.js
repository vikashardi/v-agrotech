import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-12">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 gap-3">
          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <h2 className="font-semibold text-lg">Daily Entry</h2>
            <form className="flex flex-col gap-2">
              <div>
                <label className="text-gray-800 text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm" htmlFor="roji">
                  Roji
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="number"
                  id="roji"
                  placeholder="150"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm" htmlFor="desc">
                  Description
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="text"
                  id="desc"
                  placeholder="Karya"
                />
              </div>
              <div className="mt-4">
                <button
                  className="border border-green-300 bg-green-400 px-3 py-1 rounded-lg w-full"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div></div>

          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <h2 className="font-semibold text-lg">Payment</h2>
            <form className="flex flex-col gap-2">
              <div>
                <label className="text-gray-800 text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm" htmlFor="amt">
                  Amt
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="number"
                  id="amt"
                  placeholder="150"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm" htmlFor="desc">
                  Description
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="text"
                  id="desc"
                  placeholder="Karya"
                />
              </div>
              <div className="mt-4">
                <button
                  className="border border-green-300 bg-green-400 px-3 py-1 rounded-lg w-full"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
            <h2 className="font-semibold text-lg">Receipt</h2>
            <form className="flex flex-col gap-2">
              <div>
                <label className="text-gray-800 text-sm" htmlFor="name">
                  Name
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="text"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm" htmlFor="amt">
                  Amt
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="number"
                  id="amt"
                  placeholder="150"
                />
              </div>
              <div>
                <label className="text-gray-800 text-sm" htmlFor="desc">
                  Description
                </label>
                <input
                  className="bg-gray-50 border block border-gray-300 rounded-lg px-2 py-1 font-semibold outline-blue-500 w-full"
                  type="text"
                  id="desc"
                  placeholder="Karya"
                />
              </div>
              <div className="mt-4">
                <button
                  className="border border-green-300 bg-green-400 px-3 py-1 rounded-lg w-full"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
