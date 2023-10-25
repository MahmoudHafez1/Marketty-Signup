import { useTranslation } from 'react-i18next'

const Input = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  error,
  helperText,
  groupText,
  ...props
}) => {
  const { i18n, t } = useTranslation()
  return (
    <div className={i18n.language === 'en' ? 'text-left' : 'text-right'}>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {t(label)}
        {required && '*'}
      </label>

      <div
        className='flex'
        dir={groupText || i18n.language === 'en' ? 'ltr' : 'rtl'}
      >
        <input
          name={name}
          type={type}
          className={`bg-gray-50 border ${
            error ? 'border-red-500' : 'border-gray-300'
          } text-gray-900 text-sm ${
            groupText ? 'rounded-lg-l' : 'rounded-lg'
          } focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
          placeholder={t(placeholder)}
          required={required}
          {...props}
        />
        {groupText && (
          <span className='inline-flex items-center px-3 text-sm text-gray-900 bg-white border border-l-0 border-gray-300 rounded-r-md dark:bg-gray-600 dark:text-gray-400 dark:border-gray-600'>
            {groupText}
          </span>
        )}
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

export default Input
