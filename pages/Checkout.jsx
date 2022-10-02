import { PaperClipIcon } from "@heroicons/react/24/solid";
const Checkout = () => {
  return (
    <div className="bg-dark shadow overflow-hidden px-4">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-white ">Applicant Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and application.</p>
      </div>
      <div className="border-t border-secondary px-4 py-5 sm:px-6">
        <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
          <div className="sm:col-span-1 flex flex-col">
            <label className="text-sm font-medium text-gray-500">Full name</label>
            <input type="text" className="mt-1 text-sm lg:w-1/2 w-full rounded-lg text-white bg-dark f " placeholder="nama" />
          </div>
          <div className="sm:col-span-1 flex flex-col">
            <label className="text-sm font-medium text-gray-500">Full name</label>
            <input type="text" className="mt-1 text-sm lg:w-1/2 w-full rounded-lg text-white bg-dark f " placeholder="nama" />
          </div>
          <div className="sm:col-span-1 flex flex-col">
            <label className="text-sm font-medium text-gray-500">Full name</label>
            <input type="text" className="mt-1 text-sm lg:w-1/2 w-full rounded-lg text-white bg-dark  " placeholder="nama" />
          </div>

          <div className="sm:col-span-2">
            <div className="text-sm font-medium text-gray-500">Product</div>

            <div className="relative z-10 ml-4  md:w-6/12 md:mx-0 lg:w-3/12">
              <div aria-hidden="true" className="absolute top-0 w-full h-full rounded-xl bg-gray-700 shadow-xl transition duration-500 lg:group-hover:scale-110"></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-secondary font-semibold text-center">Promo terbatas!</h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-white font-bold leading-0">35</span>
                      <div className="pb-2">
                        <span className="block text-2xl text-white font-bold">%</span>
                        <span className="block text-xl text-secondary font-bold">Off</span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl line-through text-red-600 font-semibold text-center py-3">Rp 1.495.000</h3>
                  <h3 className="text-4xl text-secondary animate-pulse font-semibold text-center pb-5">Rp 495.000</h3>
                </div>
              </div>
            </div>
          </div>
          <div className=" py-6 ">
            <button type="submit" className="lg:w-1/2 w-full bg-indigo-600 rounded-md shadow-sm py-3 px-4 text-base font-medium text-white ">
              Confirm order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
