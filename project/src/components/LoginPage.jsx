import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, Layers} from "lucide-react";

// import { useAuth } from "../contexts/AuthContext"; // AUTH PLACEHOLDER

export default function LoginPage({ onNavigateToSignup }) {
  // const { signIn } = useAuth(); // AUTH PLACEHOLDER

  const [formData, setFormData] = useState({
    emailOrPhone: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.emailOrPhone || !formData.password) {
      setError("Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email_or_phone: formData.emailOrPhone,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if(!res.ok) {
        setError(data.error || "Failed to store login input");
        return;
      }

      console.log("Stored in DB: ", data);
    }
    catch (err) {
      setError("Server error. Please try again.");
    }
    finally {
      setLoading(false);
    }

    /*
    // AUTH PLACEHOLDER (enable later)
    const { error: signInError } = await signIn(
      formData.email,
      formData.password
    );

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }
    */
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT SECTION (SAME AS LANDING PAGE) */}
        <div className="flex-1 p-8 lg:p-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
          <div className="relative z-10">
            <div className="flex items-center space-x-3 mb-12">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center transform -rotate-12">
                <Layers className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">SmartOps</h1>
            </div>

            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Make smarter <span className="text-blue-600">financial</span> decisions.
              <br />
              Automatically.
            </h2>

            <p className="text-xl text-gray-600">
              Join thousands of growing businesses using SmartOps
              <br />
              to automate their finances.
            </p>

            {/* DASHBOARD MOCKUP */}
            <div className="relative mt-16">
              <div
                className="
                  bg-gradient-to-br from-gray-800 to-gray-900
                  rounded-xl p-6 shadow-2xl
                  transform rotate-1
                  hover:rotate-0 hover:-translate-y-1
                  transition-transform duration-300
                "
              >
                {/* Top bar */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2 text-white font-semibold">
                    <Layers className="w-5 h-5 text-blue-400" />
                    SmartOps
                  </div>
                  <div className="flex gap-2">
                    <span className="w-3 h-3 bg-red-400 rounded-full" />
                    <span className="w-3 h-3 bg-yellow-400 rounded-full" />
                    <span className="w-3 h-3 bg-green-400 rounded-full" />
                  </div>
                </div>

                {/* Dashboard grid */}
                <div className="grid grid-cols-2 gap-4">
                  {/* Monthly Revenue */}
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Monthly Revenue</p>
                    <div className="h-24 flex items-end gap-1">
                      {[40, 55, 45, 70, 60, 80, 75, 90].map((h, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-blue-600 to-blue-400 rounded"
                          style={{ height: `${h}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Expense Trend */}
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-2">Expense Trend</p>

                    <svg
                      viewBox="0 0 100 40"
                      className="w-full h-24"
                      preserveAspectRatio="none"
                    >
                      {/* Line */}
                      <polyline
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="1"
                        points="0,12 10,14 20,13 30,16 40,15 50,18 60,17 70,20 80,19 90,22 100,24"
                      />

                      {/* Gradient fill */}
                      <defs>
                        <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                        </linearGradient>
                      </defs>

                      <polygon
                        points="0,12 10,14 20,13 30,16 40,15 50,18 60,17 70,20 80,19 90,22 100,24 100,40 0,40"
                        fill="url(#expenseGradient)"
                      />
                    </svg>

                    <p className="mt-2 text-xs text-gray-500">Last 10 months</p>
                  </div>


                  {/* Revenue */}
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">Revenue</p>
                    <p className="text-2xl font-bold text-gray-800">$45,200</p>
                  </div>

                  {/* Profit Margin */}
                  <div className="bg-white rounded-lg p-4">
                    <p className="text-sm text-gray-600">Profit Margin</p>
                    <div className="flex items-center gap-2">
                      <p className="text-2xl font-bold text-gray-800">28%</p>
                      <span className="w-7 h-7 bg-green-500 text-white rounded-full flex items-center justify-center">
                        ↑
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION (LOGIN CARD) */}
        <div className="flex-1 p-8 lg:p-16 flex items-center justify-center">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              Welcome Back
            </h2>
            <p className="text-gray-600 mb-8">
              Sign in to your account
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter Email or Phone Number"
                  value={formData.emailOrPhone}
                  onChange={(e) =>
                    setFormData({ ...formData, emailOrPhone: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg disabled:bg-blue-400 disabled:cursor-not-allowed"
              >
                {loading ? "Signing In..." : "Login to SmartOps"}
              </button>

              {/* Divider */}
              <div className="flex items-center my-6">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">OR</span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Google Login */}
              <button
                type="button"
                onClick={() => {
                  console.log("Google login clicked (auth not wired yet)");
                }}
                className="w-full flex items-center justify-center gap-3 border-2 border-gray-200 hover:border-gray-300 bg-white text-gray-700 font-bold py-4 rounded-lg transition"
              >
                {/* Google Icon */}
                <svg className="w-5 h-5" viewBox="0 0 48 48" >
                  <path fill="#EA4335" d="M24 9.5c3.54 0 6.66 1.22 9.14 3.6l6.84-6.84C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.09 17.74 9.5 24 9.5z"/>
                  <path fill="#4285F4" d="M46.98 24.55c0-1.57-.14-3.08-.4-4.55H24v9.02h12.98c-.56 2.96-2.22 5.47-4.73 7.16l7.3 5.66C43.98 37.6 46.98 31.6 46.98 24.55z"/>
                  <path fill="#FBBC05" d="M10.54 28.41c-.48-1.43-.76-2.96-.76-4.41s.27-2.98.76-4.41l-7.98-6.19C.92 16.15 0 19.97 0 24s.92 7.85 2.56 10.6l7.98-6.19z"/>
                  <path fill="#34A853" d="M24 48c6.48 0 11.93-2.14 15.9-5.82l-7.3-5.66c-2.02 1.36-4.6 2.16-8.6 2.16-6.26 0-11.57-3.59-13.46-8.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
                </svg>
                Continue with Google
              </button>
            </form>

            <p className="text-center mt-8 text-gray-600">
              Don&apos;t have an account?{" "}
              <button
                onClick={onNavigateToSignup}
                className="text-blue-600 font-semibold hover:text-blue-700"
              >
                Sign Up
              </button>
            </p>

            <div className="flex items-center justify-center mt-8 text-sm text-gray-500">
              <Lock className="w-4 h-4 mr-2" />
              Your financial data is encrypted & secure.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

