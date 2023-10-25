import { useTranslation } from 'react-i18next'

const Select = ({
  name,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  error,
  helperText,
  options = [],
  ...props
}) => {
  const { i18n, t } = useTranslation()
  return (
    <div className={i18n.language === 'en' ? 'text-left' : 'text-right'}>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {t(label)}
        {required && '*'}
      </label>

      <select
        name={name}
        placeholder={t(placeholder)}
        className={`bg-gray-50 border ${
          error ? 'border-red-500' : 'border-gray-300'
        } text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        {...props}
      >
        {options?.map((item) => (
          <option key={item.value} value={item.value}>
            {t(item.label)}
          </option>
        ))}
      </select>
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

export default Select
