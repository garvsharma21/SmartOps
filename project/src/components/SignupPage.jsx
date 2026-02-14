import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, User, Layers, Phone } from "lucide-react";
// import { useAuth } from "../contexts/AuthContext"; // AUTH PLACEHOLDER

export default function SignupPage({ onNavigateToLogin }) {
  // const { signUp } = useAuth(); // AUTH PLACEHOLDER

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    businessType: "",
    businessName: "",
    gstin: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false
  });


  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phone ||
      !formData.businessType ||
      !formData.businessName ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setError("Please fill in all fields");
      return;
    }

    if (!formData.agreeToTerms) {
      setError("Please agree to the Terms of Service & Privacy Policy");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          businessType: formData.businessType,
          businessName: formData.businessName,
          gstin: formData.gstin,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          agreeToTerms: formData.agreeToTerms,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Signup failed");
        return;
      }

      onNavigateToLogin();
    }
    catch(err) {
      setError("Server error. Please try again.");
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center p-4">
      <div className="w-full max-w-7xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row">

        {/* LEFT SECTION */}
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

        {/* RIGHT SECTION */}
        <div className="flex-1 p-8 lg:p-16 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <h3 className="text-4xl font-bold text-gray-800 mb-2">
              Get Started
            </h3>
            <p className="text-gray-600 mb-6">Create your SmartOps account</p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg"
                  />
                </div>

                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg"
                  />
                </div>

              </div>

              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg"
                />
              </div>

              <div className="relative">
                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Business Type"
                  value={formData.businessType}
                  onChange={(e) =>
                    setFormData({ ...formData, businessType: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg"
                />
              </div>

              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Business Name"
                  value={formData.businessName}
                  onChange={(e) =>
                    setFormData({ ...formData, businessName: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg"
                />
              </div>

              <div className="relative">
                <Layers className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="GSTIN"
                  value={formData.gstin}
                  onChange={(e) =>
                    setFormData({ ...formData, gstin: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg"
                />
              </div>


              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-lg"
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
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={(e) =>
                    setFormData({ ...formData, confirmPassword: e.target.value })
                  }
                  className="w-full pl-12 pr-12 py-4 border-2 border-gray-200 rounded-lg"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {formData.confirmPassword &&
                formData.password !== formData.confirmPassword && (
                  <p className="text-red-500 text-sm mt-1">
                    Passwords do not match
                  </p>
                )}

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      agreeToTerms: e.target.checked,
                    })
                  }
                />
                <span className="text-sm text-gray-600">
                  I agree to the Terms & Privacy Policy
                </span>
              </div>

              <button
                type="submit"
                disabled={
                  loading ||
                  !formData.firstName ||
                  !formData.lastName ||
                  !formData.email ||
                  !formData.phone ||
                  !formData.businessType ||
                  !formData.businessName ||
                  !formData.password ||
                  formData.password !== formData.confirmPassword ||
                  !formData.agreeToTerms
                }
                className={`w-full py-4 rounded-lg text-white font-semibold transition ${loading ||
                    !formData.firstName ||
                    !formData.lastName ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.businessType ||
                    !formData.businessName ||
                    !formData.password ||
                    formData.password !== formData.confirmPassword ||
                    !formData.agreeToTerms
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-blue-600 hover:bg-blue-700"
                  }`}
              >
                Create Account
              </button>
            </form>

            <p className="text-center mt-8 text-gray-600">
              Already have an account?{" "}
              <button
                onClick={onNavigateToLogin}
                className="text-blue-600 font-semibold"
              >
                Login
              </button>
            </p>

            <div className="flex items-center justify-center mt-10 text-sm text-gray-500">
              <Lock className="w-4 h-4 mr-2" />
              Your financial data is encrypted & secure.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
