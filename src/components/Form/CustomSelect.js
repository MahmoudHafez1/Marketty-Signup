import React from 'react'
import { useTranslation } from 'react-i18next'
import Select from 'react-select'

const customStyles = {
  control: (provided) => ({
    ...provided,
    border: '1.5px solid #e2e8f0',
    borderRadius: '0.375rem',
    backgroundColor: 'rgb(249 250 251)',
    fontSize: '14px',
    color: 'rgb(17 24 39)',
  }),
  option: (provided, state) => ({
    ...provided,
    display: 'flex',
    alignItems: 'center',
  }),
}

const CustomSelect = ({
  name,
  label,
  placeholder = '',
  required = false,
  error,
  helperText,
  options = [],
  setFieldValue,
  ...props
}) => {
  const formattedOptions = options.map((option) => ({
    ...option,
    label: (
      <div className='flex items-center'>
        {option.icon && <div className='mx-2'>{option.icon}</div>}
        <span>{option.label}</span>
      </div>
    ),
  }))
  const { i18n, t } = useTranslation()
  return (
    <div className={i18n.language === 'en' ? 'text-left' : 'text-right'}>
      <label className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
        {t(label)}
        {required && '*'}
      </label>
      <Select
        name={name}
        placeholder={t(placeholder)}
        isSearchable
        styles={customStyles}
        options={formattedOptions}
        onChange={(option) => setFieldValue(name, option)}
        {...props}
      />
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

export default CustomSelect
