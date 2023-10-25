import { useTranslation } from 'react-i18next'
import { HandDrownArrow } from '../assets/icons'
import sidebarShapes from '../assets/images/shapes.png'

const Sidebar = ({
  icon,
  title,
  info = 'Create a free account and get full access to all features for 30-days. No credit card needed. Get started in 2 minutes.',
}) => {
  const { t } = useTranslation()
  return (
    <div className='w-full h-full bg-primary'>
      <div className='w-full h-full bg-gradient-to-tr from-[rgba(0,0,0,0.5)] relative'>
        <img
          src={sidebarShapes}
          alt='shapes'
          width={'100%'}
          className='object-cover h-full'
        />
        <div className='absolute top-1/2 translate-y-[-50%] w-full flex items-center justify-center'>
          <div className='flex flex-col gap-4 lg:px-[70px] md:px-[30px]'>
            <div>{icon}</div>
            <h1 className='font-semibold lg:text-[50px] md:text-[35px] sm:text-[20px] text-white leading-[60px]'>
              {t(title)}
            </h1>
            <p className='text-[##EAECF0] text-[18px] text-white'>{t(info)}</p>
          </div>
        </div>
        <div className='xl:block hidden absolute top-[80%] translate-y-[-50%] translate-x-[-50%]'>
          <HandDrownArrow />
        </div>
      </div>
    </div>
  )
}

export default Sidebar
