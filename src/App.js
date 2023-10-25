import './App.css'
import SignUp from './pages/SignUp'
import './config/initI18n'
import { useTranslation } from 'react-i18next'

function App() {
  const { i18n } = useTranslation()
  return (
    <div dir={i18n.language === 'en' ? 'ltr' : 'rtl'}>
      <SignUp />
    </div>
  )
}

export default App
