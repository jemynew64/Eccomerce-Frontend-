export const Form = () => {
  return (
    <div
      className="font-display bg-background-dark text-white antialiased min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 relative"
    >
      {/* Header */}
      <header className="absolute top-0 left-0 w-full px-4 sm:px-10 py-5">
        <div className="flex items-center gap-4 text-white">
          <div className="size-6 text-primary">
            <svg
              fill="currentColor"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                d="M24 18.4228L42 11.475V34.3663C42 34.7796 41.7457 35.1504 41.3601 35.2992L24 42V18.4228Z"
                fillRule="evenodd"
              />
              <path
                clipRule="evenodd"
                d="M24 8.18819L33.4123 11.574L24 15.2071L14.5877 11.574L24 8.18819ZM9 15.8487L21 20.4805V37.6263L9 32.9945V15.8487ZM27 37.6263V20.4805L39 15.8487V32.9945L27 37.6263ZM25.354 2.29885C24.4788 1.98402 23.5212 1.98402 22.646 2.29885L4.98454 8.65208C3.7939 9.08038 3 10.2097 3 11.475V34.3663C3 36.0196 4.01719 37.5026 5.55962 38.098L22.9197 44.7987C23.6149 45.0671 24.3851 45.0671 25.0803 44.7987L42.4404 38.098C43.9828 37.5026 45 36.0196 45 34.3663V11.475C45 10.2097 44.2061 9.08038 43.0155 8.65208L25.354 2.29885Z"
                fillRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold tracking-[-0.015em]">
            AnimeVerse
          </h2>
        </div>
      </header>

      {/* Main content */}
      <main className="w-full max-w-md bg-black/20 backdrop-blur-sm rounded-xl border border-white/10 shadow-lg p-6 sm:p-8 lg:p-10">
        <div className="text-center">
          <h1 className="text-white text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">
            Create Your AnimeVerse Account
          </h1>
          <p className="text-[#caab91] text-base font-normal mt-3">
            Start your journey into the world of anime merchandise.
          </p>
        </div>

        <form className="mt-8 space-y-6">
          {/* Full name */}
          <div>
            <label className="flex flex-col">
              <p className="text-white text-base font-medium pb-2">Full Name</p>
              <input
                className="flex w-full rounded-lg text-white bg-[#483423]/50 focus:bg-[#483423]/80 focus:ring-2 focus:ring-primary h-14 placeholder:text-[#caab91]/70 p-4 text-base transition-all outline-none border-none"
                placeholder="Enter your full name"
                type="text"
              />
            </label>
          </div>

          {/* Email */}
          <div>
            <label className="flex flex-col">
              <p className="text-white text-base font-medium pb-2">Email</p>
              <input
                className="flex w-full rounded-lg text-white bg-[#483423]/50 focus:bg-[#483423]/80 focus:ring-2 focus:ring-primary h-14 placeholder:text-[#caab91]/70 p-4 text-base transition-all outline-none border-none"
                placeholder="Enter your email address"
                type="email"
              />
            </label>
          </div>

          {/* Password */}
          <div>
            <label className="flex flex-col">
              <p className="text-white text-base font-medium pb-2">Password</p>
              <div className="relative flex items-stretch w-full">
                <input
                  className="flex w-full rounded-lg text-white bg-[#483423]/50 focus:bg-[#483423]/80 focus:ring-2 focus:ring-primary h-14 placeholder:text-[#caab91]/70 p-4 pr-12 text-base transition-all outline-none border-none"
                  placeholder="Enter your password"
                  type="password"
                />
                <button
                  className="absolute inset-y-0 right-0 flex items-center pr-4 text-[#caab91] hover:text-white"
                  type="button"
                >
                  <span className="material-symbols-outlined">visibility</span>
                </button>
              </div>
            </label>
          </div>

          {/* Phone */}
          <div>
            <label className="flex flex-col">
              <p className="text-white text-base font-medium pb-2">
                Phone Number{" "}
                <span className="text-[#caab91]/80 text-sm">(Optional)</span>
              </p>
              <input
                className="flex w-full rounded-lg text-white bg-[#483423]/50 focus:bg-[#483423]/80 focus:ring-2 focus:ring-primary h-14 placeholder:text-[#caab91]/70 p-4 text-base transition-all outline-none border-none"
                placeholder="Enter your phone number"
                type="tel"
              />
            </label>
          </div>

          {/* Submit button */}
          <button
            className="flex w-full items-center justify-center rounded-lg h-14 px-4 bg-primary text-[#221911] text-base font-bold tracking-[0.015em] hover:bg-[#d95f11] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            type="submit"
          >
            <span className="truncate">Create Account</span>
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-[#caab91]">
          Already have an account?{" "}
          <a
            className="font-semibold text-primary hover:text-primary/80 transition-colors"
            href="#"
          >
            Sign In
          </a>
        </p>
      </main>
    </div>
  );
};
