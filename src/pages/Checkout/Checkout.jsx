

const Checkout = () => {
    return (
        <section className='Checkout'>
            <div className='container'>
                <h2 className='cart__title'>
                    Оформить заказ
                </h2>
                <form className='checkout__form'>
                    <div>
                        <h3 className='checkout__form-title'>
                            Данные покупателя
                        </h3>
                        <div className='checkout__form-fields'>
                            <input className='checkout__form-field' type='text' pattern='Имя'/>
                            <input className='checkout__form-field' type='text' pattern='E-mail'/>
                            <input className='checkout__form-field' type='text' pattern='Телефон'/>
                        </div>
                    </div>
                    <div className='checkout__form-block'>
                        <h3 className='checkout__form-title'>
                          Ваш заказ
                        </h3>
                        <div className='checkout__form-fields'>
                           <ul className='checkout__form-list'>
                               <li className='checkout__form-item'>
                                   <p className='checkout__form-product'>
                                       Товарь
                                   </p>
                                   <p className='checkout__form-price'>
                                       Всего
                                   </p>
                               </li>
                               <li className='checkout__form-item'>
                                   <p className='checkout__form-product'>
                                       Футболка
                                   </p>
                                   <p className='checkout__form-price'>
                                       $129
                                   </p>
                               </li>
                               <li className='checkout__form-item checkout__form-count'>
                                   <p className='checkout__form-product'>
                                       Итого
                                   </p>
                                   <p className='checkout__form-price'>
                                       $129
                                   </p>
                               </li>
                           </ul>
                        </div>
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
                        <h3 className='checkout__form-item'>
                            Cпособы оплать
                        </h3>
                    </div>
                    <div className='checkout__form-list'>

                    </div>
                    <label className='checkout__form-label'>
                        <input type='checkbox'/>
                        Оплата наличными
                    </label>
                    <button className='checkout__form-btn' type='submit'>
                        Разместить заказ
                    </button>
                    <div className='checkout__form-block'>
                        <h3 className='checkout__form-title'>
                            Коментари
                        </h3>
                        <textarea placeholder='Дополнительная информация'>

                        </textarea>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Checkout;