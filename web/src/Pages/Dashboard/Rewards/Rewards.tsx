export default function Rewards() {
  return (
    <>
    <div className="rewards-wrapper max-h-[83vh] overflow-y-auto w-full flex justify-start items-start flex-col gap-4">
      <div className="hero-section rounded-lg h-max flex flex-row justify-between items-start px-8 py-10 bg-purple-950 w-full">
        <div className="left flex flex-col gap-6 w-max">
          <h1 className="text-4xl font-bold text-white">Rewards</h1>
          <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            <div className="flex flex-col bg-white border shadow-sm rounded-xl ">
              <div className="p-4 md:p-5 flex gap-x-4">
                <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-200 rounded-lg ">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                </div>

                <div className="grow">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Total users
                    </p>
                    <div className="hs-tooltip">
                      <div className="hs-tooltip-toggle">
                        <svg className="flex-shrink-0 w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
                        <span className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm" role="tooltip">
                          The number of daily users
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl sm:text-2xl font-medium text-gray-800 ">
                      72,540
                    </h3>
                    <span className="inline-flex items-center gap-x-1 py-0.5 px-2 rounded-full bg-green-100 text-green-900 ">
                      <svg className="inline-block w-4 h-4 self-center" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>
                      <span className="inline-block text-xs font-medium">
                        12.5%
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col bg-white border shadow-sm rounded-xl">
              <div className="p-4 md:p-5 flex gap-x-4">
                <div className="flex-shrink-0 flex justify-center items-center w-[46px] h-[46px] bg-gray-200 rounded-lg ">
                  <svg className="flex-shrink-0 w-5 h-5 text-gray-600 " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 22h14"/><path d="M5 2h14"/><path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22"/><path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2"/></svg>
                </div>

                <div className="grow">
                  <div className="flex items-center gap-x-2">
                    <p className="text-xs uppercase tracking-wide text-gray-500">
                      Sessions
                    </p>
                  </div>
                  <div className="mt-1 flex items-center gap-x-2">
                    <h3 className="text-xl font-medium text-gray-800 ">
                      29.4%
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="right w-max min-w-min">
          <button type="button" className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-white text-black hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none ">
            Redeem with Khalti
          </button>
        </div>
      </div>

      <div className="rewards-container gap-8 bg-gray-200 flex justify-between items-start w-full">
        <div className="rewards-history-table flex-auto w-80">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="group flex flex-col h-max bg-white border border-gray-200 shadow-sm rounded-xl ">
              <div className="h-40 w-[300px] flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                <img src="https://www.landnepal.com/wp-content/uploads/2021/08/bhaktapur.jpeg" className="w-full h-full object-cover" alt="Image" />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 ">
                  BHAKTAPUR
                </span>
                <h3 className="text-xl font-semibold text-gray-800 ">
                  Durbar Square
                </h3>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 ">
                <a className="w-full py-3 bg-gray-100 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl text-gray-800 shadow-sm h disabled:opacity-50 disabled:pointer-events-none" href="#">
                  200 coins 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                  </svg>
                </a>

              </div>
            </div>

            <div className="group flex flex-col h-max bg-white border border-gray-200 shadow-sm rounded-xl ">
              <div className="h-40 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl">
                <img src="https://www.landnepal.com/wp-content/uploads/2021/08/bhaktapur.jpeg" className="w-full h-full object-cover" alt="Image" />
              </div>
              <div className="p-4 md:p-6">
                <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 ">
                  BHAKTAPUR
                </span>
                <h3 className="text-xl font-semibold text-gray-800 ">
                  Durbar Square
                </h3>
              </div>
              <div className="mt-auto flex border-t border-gray-200 divide-x divide-gray-200 ">
                <a className="w-full py-3 bg-gray-100 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-es-xl text-gray-800 shadow-sm h disabled:opacity-50 disabled:pointer-events-none" href="#">
                  200 coins 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-coin" viewBox="0 0 16 16">
                    <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518z"/>
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11m0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12"/>
                  </svg>
                </a>

              </div>
            </div>

          </div>
        </div>
        {/* <div className="payment-history-table flex-1 bg-slate-500 min-h-40"></div> */}
      </div>
    </div>
    </>
  );
}
