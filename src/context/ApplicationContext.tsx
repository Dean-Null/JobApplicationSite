import { createContext, useContext, useState, useCallback } from 'react'
import { ApplicationContextType } from './IApplicationContextType'
import { Experience } from './IExperience'
import { MyInformationData } from './IMyInformationData'
import { ApplicationProviderProps } from './IApplicationProviderProps'

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined)

export const useApplicationContext = () => {
  const context = useContext(ApplicationContext)
  if (!context) {
    throw new Error('useApplicationContext must be used within ApplicationProvider')
  }
  return context
}

export const ApplicationProvider = ({ children }: ApplicationProviderProps) => {
  const [myInformation, setMyInformation] = useState<MyInformationData>({
    firstName: '',
    middleInitial: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    country: '',
    streetAddress: '',
    addressLine2: '',
    city: '',
    state: '',
    postalCode: ''
  })

  const [experiences, setExperiences] = useState<Experience[]>([])

  const updateMyInformationField = useCallback((field: keyof MyInformationData, value: string) => {
    setMyInformation(prev => ({ ...prev, [field]: value }))
  }, [])

  const updateExperience = useCallback((id: number, experience: Experience) => {
    setExperiences(prev => prev.map(exp => exp.id === id ? experience : exp))
  }, [])

  const addExperience = useCallback((experience: Experience) => {
    setExperiences(prev => [...prev, experience])
  }, [])

  const removeExperience = useCallback((id: number) => {
    setExperiences(prev => prev.filter(exp => exp.id !== id))
  }, [])

  return (
    <ApplicationContext.Provider
      value={{
        myInformation,
        setMyInformation,
        updateMyInformationField,
        experiences,
        setExperiences,
        updateExperience,
        addExperience,
        removeExperience
      }}
    >
      {children}
    </ApplicationContext.Provider>
  )
}

