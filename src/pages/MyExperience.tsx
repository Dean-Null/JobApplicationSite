import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApplicationContext } from '../context/ApplicationContext'
import { Experience } from '../context/IExperience'
import './MyExperience.css'

const formContainer = "form-container"
const formField = "form-field"
const MyExperience = () => {
  const navigate = useNavigate()
  const { experiences: contextExperiences, setExperiences } = useApplicationContext()
  const [loading, setLoading] = useState(false)
  const [experiences, setLocalExperiences] = useState<Experience[]>(
    contextExperiences.length > 0 
      ? contextExperiences 
      : [{
          id: 1,
          companyName: '',
          jobTitle: '',
          employmentType: '',
          startMonth: '',
          startYear: '',
          endMonth: '',
          endYear: '',
          isCurrent: false,
          location: '',
          description: ''
        }]
  )

  // Sync local state to context
  useEffect(() => {
    setExperiences(experiences)
  }, [experiences, setExperiences])

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const years = Array.from({ length: 25 }, (_, i) => new Date().getFullYear() - i)
  const employmentTypes = ['Full-time', 'Part-time', 'Contract', 'Internship', 'Freelance', 'Temporary']

  const handleInputChange = (id: number, field: keyof Experience, value: string | boolean) => {
    setLocalExperiences(experiences.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    ))
  }

  const handleCurrentJobChange = (id: number, isCurrent: boolean) => {
    setLocalExperiences(experiences.map(exp => 
      exp.id === id 
        ? { ...exp, isCurrent, endMonth: isCurrent ? '' : exp.endMonth, endYear: isCurrent ? '' : exp.endYear }
        : exp
    ))
  }

  const addExperience = () => {
    const newId = Math.max(...experiences.map(e => e.id), 0) + 1
    setLocalExperiences([...experiences, {
      id: newId,
      companyName: '',
      jobTitle: '',
      employmentType: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: '',
      isCurrent: false,
      location: '',
      description: ''
    }])
  }

  const removeExperience = (id: number) => {
    if (experiences.length > 1) {
      setLocalExperiences(experiences.filter(exp => exp.id !== id))
    }
  }

  const handleNext = () => {
    setLoading(true)
    // Generate random duration between 1-5 seconds (1000ms to 5000ms)
    const randomDuration = Math.random() * 4000 + 1000
    setTimeout(() => {
      navigate('/review')
    }, randomDuration)
  }

  return (
    <div className="my-experience-container">
      {loading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
        </div>
      )}
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
          <div className="step">
            <div className="step-circle"></div>
            <span>Review</span>
          </div>
        </div>
      </div>

      <div className={formContainer}>
        <h2 className="form-title">My Experience</h2>
        
        <form>
          {experiences.map((experience, index) => (
            <div key={experience.id} className="experience-entry">
              {experiences.length > 1 && (
                <div className="experience-header">
                  <h3 className="experience-number">Experience {index + 1}</h3>
                  <button
                    type="button"
                    className="remove-experience-button"
                    onClick={() => removeExperience(experience.id)}
                  >
                    Remove
                  </button>
                </div>
              )}

              <div className={formField}>
                <label htmlFor={`companyName-${experience.id}`}>
                  Company/Employer Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id={`companyName-${experience.id}`}
                  value={experience.companyName}
                  onChange={(e) => handleInputChange(experience.id, 'companyName', e.target.value)}
                  maxLength={100}
                  required
                />
              </div>

              <div className={formField}>
                <label htmlFor={`jobTitle-${experience.id}`}>
                  Job Title/Position <span className="required">*</span>
                </label>
                <input
                  type="text"
                  id={`jobTitle-${experience.id}`}
                  value={experience.jobTitle}
                  onChange={(e) => handleInputChange(experience.id, 'jobTitle', e.target.value)}
                  maxLength={100}
                  required
                />
              </div>

              <div className={formField}>
                <label htmlFor={`employmentType-${experience.id}`}>
                  Employment Type
                </label>
                <select
                  id={`employmentType-${experience.id}`}
                  value={experience.employmentType}
                  onChange={(e) => handleInputChange(experience.id, 'employmentType', e.target.value)}
                >
                  <option value="">Select employment type</option>
                  {employmentTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div className="date-fields">
                <div className={formField}>
                  <label htmlFor={`startMonth-${experience.id}`}>
                    Start Date <span className="required">*</span>
                  </label>
                  <div className="date-inputs">
                    <select
                      id={`startMonth-${experience.id}`}
                      value={experience.startMonth}
                      onChange={(e) => handleInputChange(experience.id, 'startMonth', e.target.value)}
                      required
                    >
                      <option value="">Month</option>
                      {months.map(month => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                    <select
                      id={`startYear-${experience.id}`}
                      value={experience.startYear}
                      onChange={(e) => handleInputChange(experience.id, 'startYear', e.target.value)}
                      required
                    >
                      <option value="">Year</option>
                      {years.map(year => (
                        <option key={year} value={year.toString()}>{year}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className={formField}>
                  <label htmlFor={`endMonth-${experience.id}`}>
                    End Date <span className="required">*</span>
                  </label>
                  <div className="date-inputs">
                    <select
                      id={`endMonth-${experience.id}`}
                      value={experience.endMonth}
                      onChange={(e) => handleInputChange(experience.id, 'endMonth', e.target.value)}
                      disabled={experience.isCurrent}
                      required={!experience.isCurrent}
                    >
                      <option value="">Month</option>
                      {months.map(month => (
                        <option key={month} value={month}>{month}</option>
                      ))}
                    </select>
                    <select
                      id={`endYear-${experience.id}`}
                      value={experience.endYear}
                      onChange={(e) => handleInputChange(experience.id, 'endYear', e.target.value)}
                      disabled={experience.isCurrent}
                      required={!experience.isCurrent}
                    >
                      <option value="">Year</option>
                      {years.map(year => (
                        <option key={year} value={year.toString()}>{year}</option>
                      ))}
                    </select>
                  </div>
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      checked={experience.isCurrent}
                      onChange={(e) => handleCurrentJobChange(experience.id, e.target.checked)}
                    />
                    <span>I currently work here</span>
                  </label>
                </div>
              </div>

              <div className={formField}>
                <label htmlFor={`location-${experience.id}`}>
                  Location
                </label>
                <input
                  type="text"
                  id={`location-${experience.id}`}
                  value={experience.location}
                  onChange={(e) => handleInputChange(experience.id, 'location', e.target.value)}
                  maxLength={100}
                  placeholder="City, State/Province, Country"
                />
              </div>

              <div className={formField}>
                <label htmlFor={`description-${experience.id}`}>
                  Job Description/Responsibilities <span className="required">*</span>
                </label>
                <textarea
                  id={`description-${experience.id}`}
                  value={experience.description}
                  onChange={(e) => handleInputChange(experience.id, 'description', e.target.value)}
                  rows={5}
                  maxLength={1000}
                  required
                />
              </div>

              {index < experiences.length - 1 && <div className="experience-divider"></div>}
            </div>
          ))}

          <button
            type="button"
            className="add-experience-button"
            onClick={addExperience}
          >
            + Add Another Experience
          </button>
        </form>

        <button 
          type="button" 
          className="next-button"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default MyExperience

// This is a test project created by Dean Morrison for reviewing React and Playwright. Check out other projects at https://github.com/Dean-Null

