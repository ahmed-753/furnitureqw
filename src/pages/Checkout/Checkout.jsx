import {useContext, useState} from "react";
import {CustomContext} from "../../config/context/context.jsx";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";


const Checkout = () => {

    const navigate = useNavigate()
    const {user,addOrder} = useContext(CustomContext)
    const [popup, setPopup] = useState(false)
    const [count ,setCount] = useState(10)

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm()


    const submitForm = ((data) => {
        let order = {
            ...data,
            order:user.carts,
            totalPrice:user.carts?.reduce((acc,rec) => acc + rec.price * rec.count, 0)
        }
        addOrder(order,setPopup,redirect)
    })


    const redirect = () => {
        setInterval(() => {
         setCount( prev => {
             if(prev < 2){
                 navigate('/')
                 return 1
             }
             return prev - 1
         })
        },1000)
    }

    return (
        <section className='Checkout'>
            <div className='container'>
                <h2 className='cart__title'>
                    Оформить заказ
                </h2>
                <form className='checkout__form' onSubmit={handleSubmit(submitForm)}>
                    <div className='checkout__form-block'>
                        <h3 className='checkout__form-title'>
                            Данные покупателя
                        </h3>
                        <div className='checkout__form-fields'>
                            <input {...register('name')}    value={user.name} className='checkout__form-field' type='text' placeholder='Имя'/>
                            <input {...register('email')}   value={user.email} className='checkout__form-field' type='text' placeholder='E-mail'/>
                            <input {...register('phone')}   value={user.phone} className='checkout__form-field' type='text' placeholder='Телефон'/>
                        </div>
                    </div>
                    <div className='checkout__form-block'>
                        <h3 className='checkout__form-title'>
                          Ваш заказ
                        </h3>
                           <ul className='checkout__form-list'>
                               <li className='checkout__form-item'>
                                   <p className='checkout__form-product'>
                                       Товарь
                                   </p>
                                   <p className='checkout__form-price'>
                                       Всего   { user.carts?.reduce((acc,rec) => acc + rec.count ,0)}
                                   </p>
                               </li>
                               {
                                  user.carts?.map((item) => (
                                      <li key={item.id} className='checkout__form-item'>
                                          <p className='checkout__form-product'>
                                              {item.title}
                                          </p>
                                          <p className='checkout__form-price'>
                                              {item.count}   /  {item.price * item.count} руб.
                                          </p>
                                      </li>
                                  ))
                               }
                               <li className='checkout__form-item checkout__form-count'>
                                   <p className='checkout__form-product'>
                                       Итоговая стоимость:
                                   </p>
                                   <p className='checkout__form-product'>
                                       {user.carts?.reduce((acc,rec) => acc + rec.price * rec.count, 0)}
                                   </p>
                               </li>
                           </ul>
                    </div>
                    <div className='checkout__form-block'>
                        <h3 className='checkout__form-title'>
                            Адрес получателя
                        </h3>
                        <div className='checkout__form-fields'>
                            <input{...register('country')} className='checkout__form-field' type='text'  placeholder='Страна'/>
                            <input {...register('city')}   className='checkout__form-field' type='text' placeholder='Город'/>
                            <input {...register('street')} className='checkout__form-field' type='text' placeholder='Улица'/>
                            <input {...register('home')}   className='checkout__form-field' type='text' placeholder='Дом'/>
                            <input {...register('flat')}   className='checkout__form-field' type='text' placeholder='Квартира'/>
                        </div>
                    </div>
                    <div className='checkout__form-block'>
                        <h3 className='checkout__form-title'>
                            Cпособы оплать
                        </h3>
                        <div className='checkout__form-list'>
                            <label className='checkout__form-label'>
                                <input type='checkbox'/>
                                Оплата наличными
                            </label>
                            <button className='checkout__form-btn' type='submit'>
                                Разместить заказ
                            </button>
                        </div>
                    </div>

                    <div className='checkout__form-block'>
                        <h3 className='checkout__form-title'>
                            Комментарии
                        </h3>
                        <textarea {...register('info')}
                                  className='checkout__form-comit'
                                  placeholder='Дополнительная информация'>
                        </textarea>
                    </div>
                </form>
            </div>
            {
                popup ?
                    <div className='checkout__popup'>
                        <h2> ваш заказ принят</h2>
                        <p style={{color:'',margin:'12px'}}>Через {count} секунд вас перекинут<br/> на главную страницу</p>
                        <button onClick={() => navigate('/')} style={{padding:'5px 20px',background:'#F1EADC'}}>Перейти на главную страницу</button>
                    </div> : ''
            }

        </section>
    );
};

export default Checkout;