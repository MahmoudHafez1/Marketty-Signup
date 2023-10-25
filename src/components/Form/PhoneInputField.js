import PhoneInput from 'react-phone-number-input'
import { useField } from 'formik'
import { useTranslation } from 'react-i18next'

const PhoneInputField = ({
  label,
  error,
  required = false,
  helperText,
  ...props
}) => {
  const [field, meta, helpers] = useField(props.name)

  const { i18n, t } = useTranslation()
  return (
    <div className={i18n.language === 'en' ? 'text-left' : 'text-right'}>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {t(label)}
        {required && '*'}
      </label>
      <div dir='ltr'>
        <PhoneInput
          {...props}
          {...field}
          value={field.value}
          onChange={(value) => {
            helpers.setValue(value)
          }}
          style={{
            backgroundColor: 'rgb(249 250 251)',
            border: `1px solid ${
              error ? 'rgb(239 68 68)' : 'rgb(209 213 219)'
            }`,
            color: 'rgb(17 24 39)',
            fontSize: '14px',
            borderRadius: '8px',
            focusRing: {
              borderColor: 'rgb(59 130 246)',
            },
            focusBorder: {
              borderColor: 'rgb(59 130 246)',
            },
            width: '100%',
            padding: '10px',
          }}
        />
      </div>

      {error ? (
        <p className='text-sm text-red-500 font-normal mt-1'>{t(error)}</p>
      ) : (
        helperText && (
          <p className='text-sm text-[#475467] font-normal mt-1'>
            {t(helperText)}
          </p>
        )
      )}
    </div>
  )
}

export default PhoneInputField
