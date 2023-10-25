import React, { useState, useRef, useEffect } from 'react'

const OtpInput = ({ onChange }) => {
  const [otp, setOtp] = useState(['', '', '', ''])
  const inputRefs = [useRef(), useRef(), useRef(), useRef()]

  const handleChange = (e, index) => {
    const value = e.target.value

    if (!isNaN(value) || value === '') {
      const newOtp = [...otp]
      newOtp[index] = value
      setOtp(newOtp)

      if (value !== '' && index < 3) {
        inputRefs[index + 1].current.focus()
      }
    }
  }

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && index > 0) {
      if (otp[index]) {
        const newOtp = [...otp]
        newOtp[index] = ''
        setOtp(newOtp)
      } else {
        inputRefs[index - 1].current.focus()
        inputRefs[index - 1].vlaue = otp[index - 1]
      }
    }
  }

  useEffect(() => {
    onChange(otp.join(''))
  }, [otp])

  return (
    <div className='flex space-x-2' dir='ltr'>
      {otp.map((digit, index) => (
        <input
          key={index}
          type='text'
          className='w-[80px] h-[80px] border border-2 rounded-[10px] text-center text-[48px] focus:border-primary focus:ring-primary text-primary drop-shadow-sm'
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          maxLength='1'
          ref={inputRefs[index]}
        />
      ))}
    </div>
  )
}

export default OtpInput
