import { useTranslation } from 'react-i18next'
import {
  NextStepIcon,
  CompletedStepIcon,
  CurrentStepIcon,
} from '../assets/icons'

const Stepper = ({ steps = [], activeStep = 0 }) => {
  const { i18n, t } = useTranslation()
  return (
    <div className={`w-full grid grid-cols-3`}>
      {steps.map((item, index) => (
        <div className='w-full relative'>
          <div className='flex flex-col items-center'>
            <div className='z-10 h-[35px] mb-[5px]'>
              {index < activeStep ? (
                <CompletedStepIcon />
              ) : index === activeStep ? (
                <CurrentStepIcon />
              ) : (
                <NextStepIcon />
              )}
            </div>
            <p
              className={`font-semibold ${
                index < activeStep
                  ? 'text-green-500'
                  : index === activeStep
                  ? 'text-primary'
                  : 'text-black'
              } md:text-sm text-[12px] mb-[1px]`}
            >
              {t(item.label)}
            </p>
            <p className='text-[12px] text-center'>{t(item.info)}</p>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`absolute top-3 left-[50%] h-[1px] w-full ${
                i18n.language === 'ar' && 'translate-x-[-100%]'
              } ${index < activeStep ? 'bg-primary' : 'bg-gray-300'}`}
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Stepper
