import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ApplicationProvider } from './context/ApplicationContext'
import CreateAccount from './pages/CreateAccount'
import MyInformation from './pages/MyInformation'
import MyExperience from './pages/MyExperience'
import Review from './pages/Review'

function App() {
  return (
    <ApplicationProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/my-information" element={<MyInformation />} />
          <Route path="/my-experience" element={<MyExperience />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </BrowserRouter>
    </ApplicationProvider>
  )
}

export default App

