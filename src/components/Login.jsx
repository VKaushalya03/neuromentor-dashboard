import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Brain, Lock, Mail, User, ArrowRight, Loader2 } from "lucide-react";
import axios from "axios";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  // 🔗 Connecting to the Teammate's Central Azure Database!
  const TEAM_AZURE_BACKEND =
    "https://neuromentor-backend--8u5ar44.thankfulcoast-1d37f0d2.eastasia.azurecontainerapps.io/api";

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (!isLogin && password !== confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    const endpoint = isLogin ? "/auth/login" : "/auth/signup";
    const payload = isLogin
      ? { email, password }
      : { name, email, password, passwordConfirm: confirmPassword };

    try {
      const response = await axios.post(
        `${TEAM_AZURE_BACKEND}${endpoint}`,
        payload,
      );

      // The teammate's backend returns a token and user object on success
      if (response.data && response.data.token) {
        const userEmail = response.data.user?.email || email;

        // Save the exact email to localStorage so the Dashboard knows whose logs to fetch from Hugging Face!
        localStorage.setItem("neuro_user", userEmail);
        navigate("/dashboard");
      } else {
        setError("Authentication failed. Please check your credentials.");
      }
    } catch (err) {
      // Safely extract the error message from the Azure backend
      const errorMsg =
        err.response?.data?.message ||
        "Failed to connect to the central authentication server.";
      setError(errorMsg);
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col justify-center items-center p-4 font-sans selection:bg-emerald-500/30">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-md bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 bg-gray-950 border border-gray-800 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
            <Brain className="w-8 h-8 text-emerald-400" />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wider">
            NeuroMentor <span className="text-emerald-400">Pro</span>
          </h1>
          <p className="text-sm text-gray-500 mt-2 text-center">
            {isLogin
              ? "Welcome back to your unified dashboard"
              : "Create your account to start learning"}
          </p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="mb-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleAuth} className="space-y-5">
          {/* ONLY SHOW NAME IF REGISTERING */}
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-950 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="e.g. John Doe"
                />
              </div>
            </div>
          )}

          {/* EMAIL FIELD */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-950 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="The email you use in VS Code"
              />
            </div>
          </div>

          {/* PASSWORD FIELD */}
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-500" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-950 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                placeholder="••••••••"
              />
            </div>
          </div>

          {/* ONLY SHOW CONFIRM PASSWORD IF REGISTERING */}
          {!isLogin && (
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input
                  type="password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-700 rounded-lg bg-gray-950 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all"
                  placeholder="••••••••"
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-gray-950 bg-emerald-500 hover:bg-emerald-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 focus:ring-offset-gray-900 transition-all disabled:opacity-50 mt-4"
          >
            {loading ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <>
                {isLogin ? "Sign In" : "Create Account"}
                <ArrowRight className="ml-2 w-4 h-4" />
              </>
            )}
          </button>
        </form>

        {/* Toggle Mode */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="font-medium text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              {isLogin ? "Sign up" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
