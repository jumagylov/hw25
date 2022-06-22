import ValidInput from '../Hooks/ValidInput';
import './input.css'
import { useDispatch } from 'react-redux';
import { FetchUser } from '../store/reducers/uiSlice';

export const Input = () => {

    const dispatch = useDispatch()
   
    const {
        value: emailValue,
        inputValue: emailInput,
        isValue: emailIsValue,
        inputBlur: emailBlur,
    } = ValidInput((value) => {
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        if (validEmailRegex.test(value)) {
            return false;
        } else {
            return true;
        }
    })

    const {
        value: passValue,
        inputValue: passInput,
        isValue: passIsValue,
        inputBlur: passBlur,
        resetValue: passReset
    } = ValidInput((value) => {

    })

    const submitForm = (e) => {
        console.log('hello');
        dispatch(FetchUser({
            email: emailValue,
            password: passValue
        }))
        e.preventDefault();




        if (emailValue === '' || passValue === '') {

            emailBlur();
            passBlur();
        }
    }



    return (
        <form onSubmit={submitForm}>
            <div className={`${emailIsValue ? "error" : ''}`}>
                <label>E-mail</label>
                <input onBlur={emailBlur} value={emailValue} type="text" placeholder="Введите свой e-mail" onChange={emailInput} />
                {emailIsValue && <p>Поле обезятельно с '@'</p>}

            </div>
            <div>
                <label>Password</label>
                <input onBlur={passBlur} value={passValue} type="password" placeholder="Введите свой password" onChange={passInput} />
            </div>
            <button>Войти</button>
        </form>
    )
}