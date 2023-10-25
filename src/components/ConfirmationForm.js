import 'react-phone-number-input/style.css'
import { ConfirmedOutlinedIcon, LeftArrowIcon, MailIcon } from '../assets/icons'
import OtpInput from './Form/OtpInput'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

const ConfirmationForm = ({ email, setActiveStep }) => {
  const [otp, setOtp] = useState('')
  const [isConfirmed, setIsConfirmed] = useState(false)

  const { t } = useTranslation()

  return (
    <div className='items-center flex flex-col gap-6'>
      {!isConfirmed && (
        <>
          <div className='w-[56px] h-[56px] bg-[#F4EBFF] rounded-full flex items-center justify-center '>
            <MailIcon />
          </div>
          <div className='flex flex-col gap-3 items-center text-center'>
            <p className='text-3xl font-semibold '>{t('Check your email')}</p>
            <p className='text-[#475467]'>
              {t('We sent a verification code to')}
            </p>
            <p className='text-[#475467]'>{email}</p>
          </div>
          <OtpInput onChange={(val) => setOtp(val)} />

          <button
            className='w-full bg-primary py-2 text-white font-semibold disabled:bg-gray-300'
            onClick={() => setIsConfirmed(true)}
            disabled={otp.length < 4}
          >
            {t('Verify email')}
          </button>
          <p className='text-[#475467]'>
            {t('Didn’t receive the email?')}{' '}
            <span className='text-primary font-semibold'>
              {t('Click to resend')}
            </span>
          </p>
        </>
      )}

      {isConfirmed && (
        <>
          <div className='w-[56px] h-[56px] bg-[#D1FADF] rounded-full flex items-center justify-center '>
            <ConfirmedOutlinedIcon />
          </div>
          <div className='flex flex-col gap-3 items-center text-center'>
            <p className='text-3xl font-semibold mb-3'>{t('Email verified')}</p>
            <p className='text-[#475467]'>
              {t('Your accounnt has been verified successfully.')}
            </p>
            <p className='text-[#475467]'>
              {t('Click below to setup your store.')}
            </p>
          </div>

          <button
            className='w-full bg-primary py-2 text-white font-semibold rounded'
            onClick={() => setActiveStep((old) => old + 1)}
          >
            {t('Continue')}
          </button>
        </>
      )}

      <div className='flex gap-2 items-center cursor-pointer'>
        <LeftArrowIcon />
        <p className='text-[##475467]'>{t('Back to login')}</p>
      </div>
    </div>
  )
}

export default ConfirmationForm
