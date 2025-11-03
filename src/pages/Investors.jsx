import { Link } from "react-router-dom";

export const Investors = () => {
  return (
    <>
      <main className="w-full">
        <section className="w-full h-full min-h-[calc(100vh-110px)] flex items-center justify-center">
          <h3 className="font-[Manrope] hidden text-2xl font-[500] text-center mt-[-50px]">
            Coming Soon
          </h3>
          <div className="w-full max-w-sm font-dm-sans text-center">
            {/* Heading */}
            <h1 className=" w-full text-[24px] md:text-[31.25px] font-medium text-black mb-6">
              Sign in to Investor Access
            </h1>

            {/* Form */}
            <form className="flex flex-col gap-4">
              {/* Email */}
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-md bg-[#00000014]"
              />

              {/* Password */}
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-md bg-[#00000014]"
              />

              {/* Log In Button */}
              <button
                type="submit"
                className="w-full bg-cyan-600 text-white py-3 rounded-md hover:bg-cyan-700 transition-colors"
              >
                Log in
              </button>
            </form>

            {/* Links */}
            <div className="flex flex-col items-center mt-4 text-sm text-cyan-600">
              <Link to="" className="mb-1 hover:underline">
                Reset password
              </Link>
              <span>
                No account?{" "}
                <Link to="" className="hover:underline">
                  Create one
                </Link>
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
