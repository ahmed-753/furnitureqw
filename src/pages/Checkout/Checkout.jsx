import {useContext} from "react";
import {CustomContext} from "../../config/context/context.jsx";
import {useForm} from "react-hook-form";


const Checkout = () => {

    const {
        register,
        handleSubmit,
        formState:{
            errors
        }
    } = useForm()


    const {user,addOrder} = useContext(CustomContext)


    return (
        <section className='Checkout'>
            <div className='container'>
                <h2 className='cart__title'>
                    Оформить заказ
                </h2>
                <form className='checkout__form'>
                    <div className='checkout__form-block'>
                        <h3 className='checkout__form-title'>
                            Данные покупателя
                        </h3>
                        <div className='checkout__form-fields'>
                            <input  defaultValue={user.name} className='checkout__form-field' type='text' pattern='Имя'/>
                            <input defaultValue={user.email} className='checkout__form-field' type='text' pattern='E-mail'/>
                            <input defaultValue={user.phone} className='checkout__form-field' type='text' pattern='Телефон'/>
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
                            <input className='checkout__form-field' type='text' pattern='Страна'/>
                            <input className='checkout__form-field' type='text' pattern='Город'/>
                            <input className='checkout__form-field' type='text' pattern='Улица'/>
                            <input className='checkout__form-field' type='text' pattern='Дом'/>
                            <input className='checkout__form-field' type='text' pattern='Квартира'/>
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
                        <textarea className='checkout__form-comit' placeholder='Дополнительная информация'></textarea>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;