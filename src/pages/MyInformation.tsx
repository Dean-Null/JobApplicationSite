import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useApplicationContext } from '../context/ApplicationContext'
import './MyInformation.css'

const MyInformation = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { myInformation, updateMyInformationField } = useApplicationContext()
  const [firstName, setFirstName] = useState(myInformation.firstName)
  const [middleInitial, setMiddleInitial] = useState(myInformation.middleInitial)
  const [lastName, setLastName] = useState(myInformation.lastName)
  const [phoneNumber, setPhoneNumber] = useState(myInformation.phoneNumber)
  const [email, setEmail] = useState(myInformation.email)
  const [country, setCountry] = useState(myInformation.country)
  const [streetAddress, setStreetAddress] = useState(myInformation.streetAddress)
  const [addressLine2, setAddressLine2] = useState(myInformation.addressLine2)
  const [city, setCity] = useState(myInformation.city)
  const [state, setState] = useState(myInformation.state)
  const [postalCode, setPostalCode] = useState(myInformation.postalCode)

  useEffect(() => {
    // Populate email from navigation state
    if (location.state?.email) {
      setEmail(location.state.email)
      updateMyInformationField('email', location.state.email)
    }
  }, [location.state, updateMyInformationField])

  // Sync local state to context
  useEffect(() => {
    updateMyInformationField('firstName', firstName)
  }, [firstName, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('middleInitial', middleInitial)
  }, [middleInitial, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('lastName', lastName)
  }, [lastName, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('phoneNumber', phoneNumber)
  }, [phoneNumber, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('email', email)
  }, [email, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('country', country)
  }, [country, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('streetAddress', streetAddress)
  }, [streetAddress, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('addressLine2', addressLine2)
  }, [addressLine2, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('city', city)
  }, [city, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('state', state)
  }, [state, updateMyInformationField])

  useEffect(() => {
    updateMyInformationField('postalCode', postalCode)
  }, [postalCode, updateMyInformationField])

  return (
    <div className="my-information-container">
      <h1 className="job-title">Job Title</h1>

      <div className="progress-bar-container">
        <div className="progress-steps">
          <div className="step active">
            <div className="step-circle active"></div>
            <span>Create Account/Sign In</span>
          </div>
          <div className="step active">
            <div className="step-circle active"></div>
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
        <h2 className="form-title">My Information</h2>
        
        <form>
          <div className="form-section">
            <label className="section-label">
              Your FULL name <span className="required">*</span>
            </label>
            <div className="name-fields">
              <div className="form-field">
                <label htmlFor="firstName">
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  maxLength={36}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="middleInitial">
                  MI
                </label>
                <input
                  type="text"
                  id="middleInitial"
                  value={middleInitial}
                  onChange={(e) => setMiddleInitial(e.target.value)}
                  maxLength={2}
                />
              </div>
              <div className="form-field">
                <label htmlFor="lastName">
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  maxLength={36}
                  required
                />
              </div>
            </div>
          </div>

          <div className="form-field">
            <label htmlFor="phoneNumber">
              Phone Number <span className="required">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              maxLength={11}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              readOnly
            />
          </div>

          <div className="form-field">
            <label htmlFor="country">
              Country <span className="required">*</span>
            </label>
            <select
              id="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            >
              <option value="">Select a country</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="streetAddress">
              Address <span className="required">*</span>
            </label>
            <input
              type="text"
              id="streetAddress"
              value={streetAddress}
              onChange={(e) => setStreetAddress(e.target.value)}
              maxLength={64}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="addressLine2">
              Address Line 2
            </label>
            <input
              type="text"
              id="addressLine2"
              value={addressLine2}
              onChange={(e) => setAddressLine2(e.target.value)}
              maxLength={64}
            />
          </div>

          <div className="form-field">
            <label htmlFor="city">
              City <span className="required">*</span>
            </label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              maxLength={64}
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="state">
              State <span className="required">*</span>
            </label>
            <select
              id="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
              required
            >
              <option value="">Select a state</option>
              <option value="Alabama">Alabama</option>
              <option value="Alaska">Alaska</option>
              <option value="Arizona">Arizona</option>
              <option value="Arkansas">Arkansas</option>
              <option value="California">California</option>
              <option value="Colorado">Colorado</option>
              <option value="Connecticut">Connecticut</option>
              <option value="Delaware">Delaware</option>
              <option value="District of Columbia">District of Columbia</option>
              <option value="Florida">Florida</option>
              <option value="Georgia">Georgia</option>
              <option value="Hawaii">Hawaii</option>
              <option value="Idaho">Idaho</option>
              <option value="Illinois">Illinois</option>
              <option value="Indiana">Indiana</option>
              <option value="Iowa">Iowa</option>
              <option value="Kansas">Kansas</option>
              <option value="Kentucky">Kentucky</option>
              <option value="Louisiana">Louisiana</option>
              <option value="Maine">Maine</option>
              <option value="Maryland">Maryland</option>
              <option value="Massachusetts">Massachusetts</option>
              <option value="Michigan">Michigan</option>
              <option value="Minnesota">Minnesota</option>
              <option value="Mississippi">Mississippi</option>
              <option value="Missouri">Missouri</option>
              <option value="Montana">Montana</option>
              <option value="Nebraska">Nebraska</option>
              <option value="Nevada">Nevada</option>
              <option value="New Hampshire">New Hampshire</option>
              <option value="New Jersey">New Jersey</option>
              <option value="New Mexico">New Mexico</option>
              <option value="New York">New York</option>
              <option value="North Carolina">North Carolina</option>
              <option value="North Dakota">North Dakota</option>
              <option value="Ohio">Ohio</option>
              <option value="Oklahoma">Oklahoma</option>
              <option value="Oregon">Oregon</option>
              <option value="Pennsylvania">Pennsylvania</option>
              <option value="Rhode Island">Rhode Island</option>
              <option value="South Carolina">South Carolina</option>
              <option value="South Dakota">South Dakota</option>
              <option value="Tennessee">Tennessee</option>
              <option value="Texas">Texas</option>
              <option value="Utah">Utah</option>
              <option value="Vermont">Vermont</option>
              <option value="Virginia">Virginia</option>
              <option value="Washington">Washington</option>
              <option value="West Virginia">West Virginia</option>
              <option value="Wisconsin">Wisconsin</option>
              <option value="Wyoming">Wyoming</option>
              <option value="American Samoa">American Samoa</option>
              <option value="Guam">Guam</option>
              <option value="Northern Mariana Islands">Northern Mariana Islands</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="US Virgin Islands">US Virgin Islands</option>
            </select>
          </div>

          <div className="form-field">
            <label htmlFor="postalCode">
              Postal code <span className="required">*</span>
            </label>
            <input
              type="text"
              id="postalCode"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              maxLength={5}
              required
            />
          </div>
        </form>

        <button 
          type="button" 
          className="next-button"
          onClick={() => navigate('/my-experience')}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default MyInformation

// This is a test project created by Dean Morrison for reviewing React and Playwright. Check out other projects at https://github.com/Dean-Null

