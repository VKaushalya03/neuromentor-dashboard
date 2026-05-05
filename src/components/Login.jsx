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

      if (response.data && response.data.token) {
        const userEmail = response.data.user?.email || email;
        localStorage.setItem("neuro_user", userEmail);
        navigate("/dashboard");
      } else {
        setError("Authentication failed. Please check your credentials.");
      }
    } catch (err) {
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
    <div style={{ fontFamily: "'DM Sans', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500&family=Fraunces:opsz,wght@9..144,300;9..144,400&display=swap');

        * { box-sizing: border-box; }

        .nm-login-root {
          min-height: 100vh;
          background: #070d18;
          display: flex;
          flex-direction: column;
          font-family: 'DM Sans', sans-serif;
          color: #e8eef8;
          -webkit-font-smoothing: antialiased;
          position: relative;
          overflow: hidden;
        }

        /* Background grid */
        .nm-login-root::before {
          content: '';
          position: fixed; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none; z-index: 0;
        }

        .nm-login-glow {
          position: fixed;
          top: -200px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 600px;
          background: radial-gradient(ellipse, rgba(29,158,117,0.07) 0%, transparent 65%);
          pointer-events: none; z-index: 0;
        }

        /* Top nav strip */
        .nm-login-nav {
          position: relative; z-index: 10;
          padding: 0 40px; height: 60px;
          display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          background: rgba(7,13,24,0.85);
          backdrop-filter: blur(20px);
        }

        .nm-login-nav-logo {
          display: flex; align-items: center; gap: 10px;
          font-family: 'Fraunces', serif; font-size: 17px; font-weight: 300;
          color: #e8eef8; cursor: pointer; letter-spacing: -0.01em;
          text-decoration: none;
        }

        .nm-login-logo-mark {
          width: 30px; height: 30px; border-radius: 8px;
          background: #1D9E75;
          display: grid; place-items: center;
          flex-shrink: 0;
        }

        .nm-login-nav-back {
          font-size: 13px; color: #8fa0bc;
          cursor: pointer; background: none; border: none;
          transition: color 0.15s; font-family: 'DM Sans', sans-serif;
        }
        .nm-login-nav-back:hover { color: #e8eef8; }

        /* Main layout */
        .nm-login-body {
          flex: 1; display: flex; align-items: center; justify-content: center;
          padding: 40px 20px;
          position: relative; z-index: 1;
        }

        .nm-login-wrap {
          width: 100%; max-width: 420px;
        }

        /* Card */
        .nm-login-card {
          background: #0d1526;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 36px 32px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
        }

        /* Header */
        .nm-login-head {
          text-align: center; margin-bottom: 32px;
        }

        .nm-login-icon-wrap {
          width: 56px; height: 56px;
          background: #070d18;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          display: grid; place-items: center;
          margin: 0 auto 16px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .nm-login-title {
          font-family: 'Fraunces', serif;
          font-size: 24px; font-weight: 300;
          color: #e8eef8; letter-spacing: -0.02em;
          margin-bottom: 6px;
        }

        .nm-login-title span { color: #1D9E75; font-style: italic; }

        .nm-login-subtitle {
          font-size: 13px; color: #5a6d88; line-height: 1.5;
        }

        /* Toggle tabs */
        .nm-login-tabs {
          display: flex;
          background: #070d18;
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 9px;
          padding: 3px;
          margin-bottom: 28px;
        }

        .nm-login-tab {
          flex: 1; padding: 8px;
          font-size: 13px; font-weight: 500;
          border: none; background: none; cursor: pointer;
          border-radius: 7px;
          transition: all 0.2s;
          font-family: 'DM Sans', sans-serif;
        }

        .nm-login-tab.active {
          background: #111d33;
          color: #e8eef8;
          border: 1px solid rgba(255,255,255,0.08);
          box-shadow: 0 2px 8px rgba(0,0,0,0.3);
        }

        .nm-login-tab:not(.active) { color: #5a6d88; }
        .nm-login-tab:not(.active):hover { color: #8fa0bc; }

        /* Error */
        .nm-login-error {
          margin-bottom: 20px;
          padding: 10px 14px;
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.2);
          border-radius: 8px;
          font-size: 13px; color: #f87171; text-align: center;
          line-height: 1.4;
        }

        /* Form */
        .nm-login-form { display: flex; flex-direction: column; gap: 16px; }

        .nm-login-field { display: flex; flex-direction: column; gap: 6px; }

        .nm-login-label {
          font-size: 11px; font-weight: 500;
          color: #5a6d88;
          text-transform: uppercase; letter-spacing: 0.07em;
        }

        .nm-login-input-wrap { position: relative; }

        .nm-login-input-icon {
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: #5a6d88; pointer-events: none;
        }

        .nm-login-input {
          width: 100%;
          padding: 10px 12px 10px 38px;
          background: #070d18;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          color: #e8eef8;
          font-size: 14px;
          font-family: 'DM Sans', sans-serif;
          transition: border-color 0.15s, box-shadow 0.15s;
          outline: none;
        }

        .nm-login-input::placeholder { color: #5a6d88; }

        .nm-login-input:focus {
          border-color: rgba(29,158,117,0.5);
          box-shadow: 0 0 0 3px rgba(29,158,117,0.08);
        }

        /* Submit */
        .nm-login-submit {
          width: 100%; padding: 12px;
          background: #1D9E75;
          color: #fff;
          font-size: 14px; font-weight: 500;
          border: none; border-radius: 9px; cursor: pointer;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: opacity 0.15s, transform 0.1s;
          font-family: 'DM Sans', sans-serif;
          margin-top: 4px;
        }

        .nm-login-submit:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
        .nm-login-submit:disabled { opacity: 0.5; cursor: not-allowed; }

        /* Toggle link */
        .nm-login-toggle {
          margin-top: 24px; text-align: center;
          font-size: 13px; color: #5a6d88;
        }

        .nm-login-toggle button {
          background: none; border: none; cursor: pointer;
          color: #1D9E75; font-weight: 500; font-size: 13px;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.15s;
        }

        .nm-login-toggle button:hover { color: #34d399; }

        /* Divider */
        .nm-login-divider {
          border: none; border-top: 1px solid rgba(255,255,255,0.06);
          margin: 0;
        }

        /* Footer note */
        .nm-login-footer-note {
          margin-top: 20px; text-align: center;
          font-size: 11px; color: #5a6d88; line-height: 1.6;
        }

        @keyframes nm-spin { to { transform: rotate(360deg); } }
        .nm-spin { animation: nm-spin 1s linear infinite; }
      `}</style>

      <div className="nm-login-root">
        <div className="nm-login-glow" />

        {/* Nav */}
        <nav className="nm-login-nav">
          <div className="nm-login-nav-logo" onClick={() => navigate("/")}>
            <div className="nm-login-logo-mark">
              <Brain size={16} color="white" />
            </div>
            NeuroMentor
          </div>
          <button className="nm-login-nav-back" onClick={() => navigate("/")}>
            ← Back to home
          </button>
        </nav>

        {/* Body */}
        <div className="nm-login-body">
          <div className="nm-login-wrap">
            <div className="nm-login-card">
              {/* Header */}
              <div className="nm-login-head">
                <div className="nm-login-icon-wrap">
                  <Brain size={26} color="#1D9E75" />
                </div>
                <h1 className="nm-login-title">
                  Neuro<span>Mentor</span>
                </h1>
                <p className="nm-login-subtitle">
                  {isLogin
                    ? "Welcome back — sign in to your dashboard"
                    : "Create an account to start learning"}
                </p>
              </div>

              {/* Tabs */}
              <div className="nm-login-tabs">
                <button
                  className={`nm-login-tab ${isLogin ? "active" : ""}`}
                  onClick={() => {
                    setIsLogin(true);
                    setError("");
                  }}
                >
                  Sign in
                </button>
                <button
                  className={`nm-login-tab ${!isLogin ? "active" : ""}`}
                  onClick={() => {
                    setIsLogin(false);
                    setError("");
                  }}
                >
                  Create account
                </button>
              </div>

              {/* Error */}
              {error && <div className="nm-login-error">{error}</div>}

              {/* Form */}
              <form onSubmit={handleAuth} className="nm-login-form">
                {!isLogin && (
                  <div className="nm-login-field">
                    <label className="nm-login-label">Full Name</label>
                    <div className="nm-login-input-wrap">
                      <span className="nm-login-input-icon">
                        <User size={15} />
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="nm-login-input"
                        placeholder="e.g. John Doe"
                      />
                    </div>
                  </div>
                )}

                <div className="nm-login-field">
                  <label className="nm-login-label">Email Address</label>
                  <div className="nm-login-input-wrap">
                    <span className="nm-login-input-icon">
                      <Mail size={15} />
                    </span>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="nm-login-input"
                      placeholder="The email you use in VS Code"
                    />
                  </div>
                </div>

                <div className="nm-login-field">
                  <label className="nm-login-label">Password</label>
                  <div className="nm-login-input-wrap">
                    <span className="nm-login-input-icon">
                      <Lock size={15} />
                    </span>
                    <input
                      type="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="nm-login-input"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                {!isLogin && (
                  <div className="nm-login-field">
                    <label className="nm-login-label">Confirm Password</label>
                    <div className="nm-login-input-wrap">
                      <span className="nm-login-input-icon">
                        <Lock size={15} />
                      </span>
                      <input
                        type="password"
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="nm-login-input"
                        placeholder="••••••••"
                      />
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="nm-login-submit"
                >
                  {loading ? (
                    <Loader2 size={16} className="nm-spin" />
                  ) : (
                    <>
                      {isLogin ? "Sign In" : "Create Account"}
                      <ArrowRight size={15} />
                    </>
                  )}
                </button>
              </form>

              <div className="nm-login-footer-note">
                By continuing, you agree to NeuroMentor's research data usage
                policy.
                <br />
                SLIIT Faculty of Computing · 2025
              </div>
            </div>

            <div className="nm-login-toggle">
              {isLogin
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError("");
                }}
              >
                {isLogin ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
