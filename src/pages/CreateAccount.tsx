import { useState, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateAccount.css'

const CreateAccount = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [verifyPassword, setVerifyPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    // Approved credentials for testing demo
    const APPROVED_EMAIL = 'JohnSmith@TestableAccount.com'
    const APPROVED_PASSWORD = '@S0@PWa$h'
    
    // Check if credentials match approved values
    if (email === APPROVED_EMAIL && password === APPROVED_PASSWORD) {
      // For approved credentials, proceed with existing validation
      if (password === verifyPassword && termsAccepted) {
        navigate('/my-information', { state: { email } })
      }
    } else {
      // For non-approved credentials, show alert and prevent navigation
      alert('This is a testing demo. Only approved credentials will work.')
    }
  }

  return (
    <div className="create-account-container">

      <h1 className="job-title">Job Title</h1>

      <div className="progress-bar-container">
        <div className="progress-steps">
          <div className="step active">
            <div className="step-circle active"></div>
            <span>Create Account/Sign In</span>
          </div>
          <div className="step">
            <div className="step-circle"></div>
            <span>My Information</span>
          </div>
          <div className="step">
            <div className="step-circle"></div>
            <span>My Experience</span>
          </div>
          <div className="step">
            <div className="step-circle"></div>
            <span>Review</span>
          </div>
        </div>
      </div>

      <div className="form-container">
        <h2 className="form-title">Create Account</h2>

        <div className="password-requirements">
          <h3>Password Requirements:</h3>
          <ul>
            <li>A numeric character</li>
            <li>An alphabetic character</li>
            <li>A minimum of 8 characters</li>
            <li>A special character</li>
            <li>A lowercase character</li>
            <li>An uppercase character</li>
          </ul>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="email">
              Email Address <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="password">
              Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="verify-password">
              Verify New Password <span className="required">*</span>
            </label>
            <input
              type="password"
              id="verify-password"
              value={verifyPassword}
              onChange={(e) => setVerifyPassword(e.target.value)}
              required
            />
          </div>

          <div className="terms-section">
            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <span>I understand and acknowledge that this is a demo application with no backend support.</span>
            </label>
          </div>

          <button type="submit" className="create-account-button">
            Create Account
          </button>
        </form>
      </div>
    </div>
  )
}

export default CreateAccount

// This is a test project created by Dean Morrison for reviewing React and Playwright. Check out other projects at https://github.com/Dean-Null

