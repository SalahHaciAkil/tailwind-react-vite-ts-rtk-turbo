export default function Notfound() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center bg-white px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up to Celebration
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <a
                href="#"
                title=""
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Login
              </a>
            </p>

            <form action="#" method="POST" className="mt-8">
              <div className="space-y-5">
                <div>
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Enter your full name"
                      className="block w-full rounded-md border border-gray-200 bg-gray-50 p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      name=""
                      id=""
                      placeholder="Enter email to get started"
                      className="block w-full rounded-md border border-gray-200 bg-gray-50 p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-base font-medium text-gray-900">
                    {" "}
                    Password{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      name=""
                      id=""
                      placeholder="Enter your password"
                      className="block w-full rounded-md border border-gray-200 bg-gray-50 p-4 text-black placeholder-gray-500 caret-blue-600 transition-all duration-200 focus:border-blue-600 focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="flex items-center">
                  <input
                    placeholder="Enter your password again"
                    type="checkbox"
                    name="agree"
                    id="agree"
                    className="h-5 w-5 rounded border-gray-200 bg-white text-blue-600"
                  />

                  <label className="ml-3 text-sm font-medium text-gray-500">
                    I agree to Postcraft’s{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 focus:outline-none"
                  >
                    Create free account
                  </button>
                </div>
              </div>
            </form>

            <div className="mt-3 space-y-3">
              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg
                    className="h-6 w-6 text-rose-500"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                  </svg>
                </div>
                Sign up with Google
              </button>

              <button
                type="button"
                className="relative inline-flex w-full items-center justify-center rounded-md border-2 border-gray-200 bg-white px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black focus:outline-none"
              >
                <div className="absolute inset-y-0 left-0 p-4">
                  <svg
                    className="h-6 w-6 text-[#2563EB]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </div>
                Sign up with Facebook
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center bg-gray-50 px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div>
            <img
              className="mx-auto w-full"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
              alt=""
            />

            <div className="mx-auto w-full max-w-md xl:max-w-xl">
              <h3 className="text-center text-2xl font-bold text-black">
                Design your own card
              </h3>
              <p className="mt-2.5 text-center leading-relaxed text-gray-500">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>

              <div className="mt-10 flex items-center justify-center space-x-3">
                <div className="h-1.5 w-20 rounded-full bg-orange-500"></div>

                <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>

                <div className="h-1.5 w-12 rounded-full bg-gray-200"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
