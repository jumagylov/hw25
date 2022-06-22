import  { useEffect, useState } from 'react'

function ValidInput(state) {
    const [value, setValue] = useState('')
    const [isValue, setIsValue] = useState(false)
    const [isBlur, setIsBLur] = useState(false)

    let isValid = state(value);

    useEffect(() => {
        if(isValid && isBlur){
            setIsValue(true)
        }else{
            setIsValue(false)
        }
    }, [value, isValid, isBlur]);

    const resetValue = (e) => {
        setValue('');
        setIsBLur(false)
    }
const inputBlur = () => {
    setIsBLur(true)
}

const inputValue = (e) => {
    setValue(e.target.value)

}
  return {
    value,
    inputValue,
    isValue,
    inputBlur,
    resetValue
  }
}

export default ValidInput