import { Formik } from 'formik'
import * as Yup from 'yup'
import Input from './Form/Input'
import 'react-phone-number-input/style.css'
import { isValidPhoneNumber } from 'react-phone-number-input'
import PhoneInputField from './Form/PhoneInputField'
import { useTranslation } from 'react-i18next'
import { LanguageIcon } from '../assets/icons'

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phone: Yup.string().required('Required'),
  password: Yup.string()
    .required('Required')
    .min(8, 'Must be at least 8 characters.'),
})

const Detailsform = ({ setActiveStep, setEmail }) => {
  const { t, i18n } = useTranslation()
  const handleChangeLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en')
  }
  return (
    <div className='text-center'>
      <Formik
        initialValues={{ name: '', email: '', phone: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setActiveStep((old) => old + 1)
          setEmail(values.email)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-[15px]'>
              <Input
                name='name'
                label='Name'
                placeholder='Enter your name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                error={touched.name ? errors.name : false}
                required
              />
              <Input
                name='email'
                label='Email'
                placeholder='Enter your email'
                type='email'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                error={touched.email ? errors.email : false}
                required
              />
              <PhoneInputField
                defaultCountry='EG'
                label='Phone Number'
                name='phone'
                type='tel'
                placeholder='+2 (100) 123-34567'
                error={
                  touched.phone &&
                  (errors.phone ||
                    (!isValidPhoneNumber(String(values.phone)) &&
                      'Invalid phone number'))
                }
                required
              />
              <Input
                name='password'
                label='Password'
                placeholder='Create a password'
                type='password'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                error={touched.password ? errors.password : false}
                required
                helperText='Must be at least 8 characters.'
              />
              <button
                type='submit'
                className='w-full bg-primary py-2 text-white font-semibold rounded'
                disabled={isSubmitting}
              >
                {t('Get Started')}
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div className='flex flex-col items-center mt-6 gap-4'>
        <p className='text-sm text-[#475467]'>
          {t('Already have an account?')}{' '}
          <span className='text-primary font-semibold'>{t('Log in')}</span>
        </p>
        <div
          className='flex items-center gap-1 cursor-pointer'
          onClick={handleChangeLanguage}
        >
          <LanguageIcon />
          <p className='hover:text-primary'>
            {i18n.language === 'en' ? 'عربي' : 'English'}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Detailsform
