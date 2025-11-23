import { useApplicationContext } from '../context/ApplicationContext'
import './Review.css'

const Review = () => {
  const { myInformation, experiences } = useApplicationContext()

  const formatDate = (month: string, year: string) => {
    if (!month || !year) return ''
    return `${month} ${year}`
  }

  const formatDateRange = (startMonth: string, startYear: string, endMonth: string, endYear: string, isCurrent: boolean) => {
    const start = formatDate(startMonth, startYear)
    if (isCurrent) {
      return start ? `${start} - Present` : 'Present'
    }
    const end = formatDate(endMonth, endYear)
    if (start && end) {
      return `${start} - ${end}`
    }
    return start || end || ''
  }

  return (
    <div className="review-container">
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
          <div className="step active">
            <div className="step-circle active"></div>
            <span>My Experience</span>
          </div>
          <div className="step active">
            <div className="step-circle active"></div>
            <span>Review</span>
          </div>
        </div>
      </div>

      <div className="review-content">
        <div className="review-section">
          <h2 className="review-section-title">My Information</h2>
          
          <div className="review-field-group">
            <div className="review-field">
              <label className="review-label">Full Name</label>
              <div className="review-value">
                {[myInformation.firstName, myInformation.middleInitial, myInformation.lastName]
                  .filter(Boolean)
                  .join(' ') || 'Not provided'}
              </div>
            </div>

            <div className="review-field">
              <label className="review-label">Phone Number</label>
              <div className="review-value">{myInformation.phoneNumber || 'Not provided'}</div>
            </div>

            <div className="review-field">
              <label className="review-label">Email Address</label>
              <div className="review-value">{myInformation.email || 'Not provided'}</div>
            </div>

            <div className="review-field">
              <label className="review-label">Country</label>
              <div className="review-value">{myInformation.country || 'Not provided'}</div>
            </div>

            <div className="review-field">
              <label className="review-label">Address</label>
              <div className="review-value">
                {myInformation.streetAddress || 'Not provided'}
                {myInformation.addressLine2 && (
                  <>
                    <br />
                    {myInformation.addressLine2}
                  </>
                )}
              </div>
            </div>

            <div className="review-field">
              <label className="review-label">City</label>
              <div className="review-value">{myInformation.city || 'Not provided'}</div>
            </div>

            <div className="review-field">
              <label className="review-label">State</label>
              <div className="review-value">{myInformation.state || 'Not provided'}</div>
            </div>

            <div className="review-field">
              <label className="review-label">Postal Code</label>
              <div className="review-value">{myInformation.postalCode || 'Not provided'}</div>
            </div>
          </div>
        </div>

        <div className="review-section">
          <h2 className="review-section-title">My Experience</h2>
          
          {experiences.length === 0 ? (
            <div className="review-empty">No experience entries provided</div>
          ) : (
            <div className="experience-list">
              {experiences.map((experience, index) => (
                <div key={experience.id} className="experience-review-item">
                  {experiences.length > 1 && (
                    <div className="experience-review-number">Experience {index + 1}</div>
                  )}
                  
                  <div className="review-field-group">
                    <div className="review-field">
                      <label className="review-label">Company/Employer Name</label>
                      <div className="review-value">{experience.companyName || 'Not provided'}</div>
                    </div>

                    <div className="review-field">
                      <label className="review-label">Job Title/Position</label>
                      <div className="review-value">{experience.jobTitle || 'Not provided'}</div>
                    </div>

                    {experience.employmentType && (
                      <div className="review-field">
                        <label className="review-label">Employment Type</label>
                        <div className="review-value">{experience.employmentType}</div>
                      </div>
                    )}

                    <div className="review-field">
                      <label className="review-label">Employment Period</label>
                      <div className="review-value">
                        {formatDateRange(
                          experience.startMonth,
                          experience.startYear,
                          experience.endMonth,
                          experience.endYear,
                          experience.isCurrent
                        ) || 'Not provided'}
                      </div>
                    </div>

                    {experience.location && (
                      <div className="review-field">
                        <label className="review-label">Location</label>
                        <div className="review-value">{experience.location}</div>
                      </div>
                    )}

                    <div className="review-field">
                      <label className="review-label">Job Description/Responsibilities</label>
                      <div className="review-value review-description">
                        {experience.description || 'Not provided'}
                      </div>
                    </div>
                  </div>

                  {index < experiences.length - 1 && <div className="experience-divider"></div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Review

