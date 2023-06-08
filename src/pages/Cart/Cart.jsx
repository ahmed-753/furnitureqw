import {useContext} from "react";
import {CustomContext} from "../../config/context/context.jsx";

const Cart = () => {

    const {user,addCartsCountMinus,addCartsCountPlus} = useContext(CustomContext)


    return (
        <section className='cart'>
            <div className='container'>
                <div className='cart__top'>
                    <h2 className='cart__title'>
                        Ваша карзина
                    </h2>
                    <p className='cart__count'>
                        { user.carts?.reduce((acc,rec) => acc + rec.count ,0)} Предмета
                    </p>
                </div>
                <div className='cart__row'>
                    {
                     user.carts?.length ?
                         user.carts?.map((item) => (
                             <div key={item.id} className='cart__card'>
                                 <div className='cart__card-item'>
                                     <img src={`/${item.image}`}/>
                                     <div className='cart__card-info'>
                                         <h3 className='cart__card-title'>
                                             Кускен Navy Blue
                                         </h3>
                                         <p className='cart__card-size'>
                                             Размер(Ш×Д×В):
                                         </p>
                                         <p  className='cart__card-text'>
                                             {item.width} cm x{item.height} cm x {item.deep}sm
                                         </p>
                                         <p  className='cart__card-text'>
                                             Количество:
                                             <div className='card__sizes-count'>
                                                 <button type='button' onClick={() => addCartsCountMinus(item.id)}>-</button>
                                                 <span> {
                                                     item.count
                                                 } </span>
                                                 <button type='button' onClick={() => addCartsCountPlus(item.id)}>+</button>
                                             </div>
                                         </p>
                                     </div>
                                     <p className='cart__card-price'>
                                         {item.price}$
                                         {
                                             item.price * item.count
                                         }$
                                     </p>
                                 </div>
                                 <button className="cart__card-delete">
                                     x
                                 </button>
                             </div>
                         )) :
                         <h3 style={{ textAlign:'center', color:'red' , margin:'100px'}}> Пока в корзине нечого нет </h3>
                    }
                    </div>
                <div className='cart__bottom'>
                    <p className='cart__bottom-count'>
                        Итоговая стоимость:
                        {user.carts?.reduce((acc,rec) => acc + rec.price * rec.count, 0)}
                    </p>
                    <button className='cart__bottom-btn'>
                        Оформить заказ
                    </button>

                </div>
            </div>
        </section>
    );
};

export default Cart;