import {useFormik} from 'formik'

import {useParams, Link} from 'react-router-dom';
import * as Yup from 'yup';
import MaskedInput from 'react-text-mask'
// import { useState } from 'react';
// import { useHistory } from "react-router-dom";







const Forms = () => {
    const {phoneId} = useParams();
    function getRandom(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
      }
    getRandom(10, 20);  
    
    
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
   //const data = { username: 'example' };

    const formik = useFormik({
        initialValues:{
            phone:'',
            email:'',
            amount:'0',
            currency:'',
    
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                        .required('Введите номер телефона'),
            email: Yup.string()
                        .email('Email введен неверно')
                        .required('Введите email'),
            amount: Yup.number()
                        .min('1', 'Введите сумму от 1 до 1000')
                        .max('1000', 'Введите сумму от 1 до 1000')
                        .required('Введите сумму'),
            currency: Yup.string()
                        .required('Выберите валюту')

        }),

        // onSubmit: values => console.log(JSON.stringify(values, null, 2))
        


        onSubmit: async (values) => {
            await sleep(200);
            if (getRandom (10, 20) >= 16) {
            alert(`Ваши данные успешно отпрвалены   ${JSON.stringify(values, null, 2)}`);}
            if (getRandom (10, 20) < 16) {
                alert(`Отправка не произошла   ${JSON.stringify(values, null, 2)}`);}
            


          }

    })


  return (
      <form className="form" onSubmit={formik.handleSubmit}>
          <h2>{`Вы выбрали ${phoneId}`}</h2>
          <label htmlFor="name">Ваш телефон</label>
          
          <MaskedInput
          mask={[/\d/, '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
              id="phone"
              name="phone"
              type="tel"
              maxLength="18"
              
              data-tel-input
              
              value={formik.values.phone}
              onChange={formik.handleChange}
              
              onBlur={formik.handleBlur}
              
              
              /> 
          {formik.errors.phone && formik.touched.phone ? <div className='error'>{formik.errors.phone}</div>: null}
          <label htmlFor="email">Email для отправки чека</label>
          <input
              id="email"
              name="email"
              type="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
          />
          {formik.errors.email && formik.touched.email ? <div className='error'>{formik.errors.email}</div>: null}
          <label htmlFor="amount">Сумма</label>
          <input
              id="amount"
              name="amount"
              type="number"
              value={formik.values.amount}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
          />
          {formik.errors.amount && formik.touched.amount ? <div className='error'>{formik.errors.amount}</div>: null}
          <label htmlFor="currency">Валюта</label>
          <select
              id="currency"
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              >
              
                  <option value="">Выберите валюту</option>
                  <option value="USD">USD</option>
                  <option value="UAH">UAH</option>
                  <option value="RUB">RUB</option>
          </select>
          {formik.errors.currency&& formik.touched.currency ? <div className='error'>{formik.errors.currency}</div>: null}
          
          
              <button type="submit">Отправить</button>
        
         
      </form>
  )
}

export default Forms;