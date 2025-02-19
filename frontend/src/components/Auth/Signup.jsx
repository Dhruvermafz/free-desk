import React, { useState } from "react";

const API_URL = "API_URL/auth/signup";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "freelancer", // Default role
    skills: "",
    bio: "",
    portfolio: "",
  });

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleRoleChange = (e) => {
    setFormData({
      ...formData,
      role: e.target.value,
    });
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Convert skills and portfolio to appropriate formats
    const formattedSkills = formData.skills
      .split(",")
      .map((skill) => skill.trim());
    const formattedPortfolio = formData.portfolio
      .split(",")
      .map((link) => link.trim());

    const userData = {
      ...formData,
      skills: formattedSkills,
      portfolio: formattedPortfolio,
    };

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error("Signup failed. Please try again.");
      }

      const data = await response.json();
      console.log("Signup successful", data);
      // Handle success (e.g., redirect user)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="sign-up-area pt-80px pb-80px position-relative">
      <div className="container">
        <form onSubmit={handleSubmit} className="card card-item">
          <div className="card-body row p-0">
            <div className="col-lg-6 d-flex align-items-center justify-content-center border-right">
              <img
                src="images/undraw-remotely.svg"
                alt="Signup"
                className="img-fluid"
              />
            </div>

            <div className="col-lg-5 mx-auto">
              <div className="form-action-wrapper py-5">
                <h3 className="fs-22 pb-3 fw-bold">
                  Join the NextTask Community
                </h3>
                <p className="pt-3">
                  Give us some information to get free access to NextTask.
                </p>

                {error && <p className="text-danger">{error}</p>}

                <div className="form-group">
                  <label className="fs-14 fw-medium mb-2">Display Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="fs-14 fw-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="fs-14 fw-medium mb-2">Password</label>
                  <div className="input-group">
                    <input
                      type={passwordVisible ? "text" : "password"}
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                    <button
                      type="button"
                      className="input-group-text"
                      onClick={togglePasswordVisibility}
                    >
                      {passwordVisible ? "Hide" : "Show"}
                    </button>
                  </div>
                  <p className="fs-13">
                    Passwords must contain at least 8 characters, including 1
                    letter and 1 number.
                  </p>
                </div>

                <div className="form-group">
                  <label className="fs-14 fw-medium mb-2">Role</label>
                  <select
                    name="role"
                    className="form-control"
                    value={formData.role}
                    onChange={handleRoleChange}
                    required
                  >
                    <option value="freelancer">Freelancer</option>
                    <option value="client">Client</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="fs-14 fw-medium mb-2">
                    Skills (comma separated)
                  </label>
                  <input
                    type="text"
                    name="skills"
                    className="form-control"
                    placeholder="e.g., JavaScript, Node.js, React"
                    value={formData.skills}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="fs-14 fw-medium mb-2">Bio (optional)</label>
                  <textarea
                    name="bio"
                    className="form-control"
                    placeholder="Tell us about yourself"
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label className="fs-14 fw-medium mb-2">
                    Portfolio Links (comma separated)
                  </label>
                  <input
                    type="text"
                    name="portfolio"
                    className="form-control"
                    placeholder="e.g., http://example.com"
                    value={formData.portfolio}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Signing up..." : "Sign Up"}
                </button>
              </div>
            </div>
          </div>
        </form>
        <p class="text-black text-center fs-15">
          Already have an account?{" "}
          <a href="/login" class="text-color hover-underline">
            Log in
          </a>
        </p>
      </div>
    </section>
  );
};

export default Signup;
