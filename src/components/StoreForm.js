import { Formik } from 'formik'
import Input from './Form/Input'
import 'react-phone-number-input/style.css'
import CustomSelect from './Form/CustomSelect'
import { ArIcon, EnIcon, LeftArrowIcon } from '../assets/icons'
import Select from './Form/Select'
import { useTranslation } from 'react-i18next'

const StoreForm = () => {
  const { t } = useTranslation()
  return (
    <div className='text-center'>
      <Formik
        initialValues={{
          storeName: '',
          storeUrl: '',
          storeLanguage: '',
          storeIndustry: '',
        }}
        onSubmit={(values, { setSubmitting }) => {
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2))
          //   setSubmitting(false)
          // }, 400)
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
          setFieldValue,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-[15px]'>
              <Input
                name='storeName'
                label='Store Name'
                placeholder='Type your store name'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.storeName}
                error={touched.storeName ? errors.storeName : false}
              />
              <Input
                name='storeUrl'
                label='Store URL'
                placeholder='mystore'
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.storeUrl}
                error={touched.storeUrl ? errors.storeUrl : false}
                groupText={'.markatty.com'}
              />
              <CustomSelect
                name='storeLanguage'
                label='Store Language'
                placeholder='Choose store language'
                setFieldValue={setFieldValue}
                onBlur={handleBlur}
                value={values.storeLanguage}
                error={touched.storeLanguage ? errors.storeLanguage : false}
                options={[
                  { value: 'en', label: 'English', icon: <EnIcon /> },
                  { value: 'ar', label: 'Arabic', icon: <ArIcon /> },
                ]}
              />
              <Select
                name='storeIndustry'
                label='Store Industry'
                placeholder='Choose store industry'
                // setFieldValue={setFieldValue}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.storeIndustry}
                error={touched.storeIndustry ? errors.storeIndustry : false}
                options={[
                  {
                    value: 'boys_fashion',
                    label: "Boys' fashion",
                  },
                  { value: 'men_fashion', label: "Men's fashion" },
                ]}
                helperText="Ex. (Baby, Boys' fashion, Girls' fashion, Men's fashion, etc..)"
              />

              <button
                type='submit'
                className='w-full bg-primary py-2 text-white font-semibold rounded'
                disabled={isSubmitting}
              >
                {t('Save')}
              </button>
            </div>
          </form>
        )}
      </Formik>
      <div className='flex gap-2 justify-center mt-6 items-center cursor-pointer'>
        <LeftArrowIcon />
        <p className='text-[#475467]'>{t('Back to login')}</p>
      </div>
    </div>
  )
}

export default StoreForm
