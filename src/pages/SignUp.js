import { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Stepper from '../components/Stepper'
import logoImg from '../assets/images/logo.png'
import DetailsForm from '../components/DetailsForm'
import ConfirmationForm from '../components/ConfirmationForm'
import StoreForm from '../components/StoreForm'
import { LargeMailIcon, StarsIcon, StoreIcon } from '../assets/icons'

const SignUp = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [email, setEmail] = useState('')
  return (
    <div className='flex w-full h-[100vh]'>
      <div className='flex-1 h-full overflow-scroll flex flex-col gap-8 items-center px-[32px] py-[12px] justify-between'>
        <div className='flex flex-col w-full gap-4'>
          <img
            src={logoImg}
            alt='logo'
            width='82px'
            height='34px'
            className='self-start'
          />
          <Stepper
            steps={[
              { label: 'Your Details', info: 'Provide your basic information' },
              { label: 'Confirmation', info: 'Confirm your email' },
              { label: 'Store information', info: 'Set your store main info' },
            ]}
            activeStep={activeStep}
          />
        </div>

        <div className=' w-[95%] max-w-[360px] '>
          {activeStep === 0 ? (
            <DetailsForm setActiveStep={setActiveStep} setEmail={setEmail} />
          ) : activeStep === 1 ? (
            <ConfirmationForm setActiveStep={setActiveStep} email={email} />
          ) : (
            <StoreForm />
          )}
        </div>
        <div className='flex w-full justify-between items-center text-gray-600 text-sm'>
          <p>© Markatty 2022</p>
          <p>support@markatty.com</p>
        </div>
      </div>
      <div className='lg:w-[43%] md:w-[35%] hidden md:block'>
        <Sidebar
          icon={
            activeStep === 0 ? (
              <StarsIcon />
            ) : activeStep === 1 ? (
              <LargeMailIcon />
            ) : (
              <StoreIcon />
            )
          }
          title={
            activeStep === 0
              ? 'Start turning your ideas into reality'
              : activeStep === 1
              ? 'Verify your account now'
              : 'Setup your store the way you like'
          }
        />
      </div>
    </div>
  )
}

export default SignUp
