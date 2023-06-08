import {Fragment, useContext, useEffect, useState} from 'react';
import Card from "../../components/Card/Card";
import {CustomContext} from "../../config/context/context.jsx";


const Favorites = () => {

    const  {favorites} = useContext(CustomContext)
    console.log(favorites)
    const  [page, setPage] = useState(1)

    useEffect(() => {
        if(page > favoritesPages.length){
            setPage(favoritesPages.length)
        }

    },[favorites])

    let favoritesPages = new Array( Math.ceil( favorites.length / 4)).fill(null,0)

if (favorites.length){
    return (
        <section className='favorites'>
            <div className="container">
                {
                    page
                }
                <div className="favorites__row">
                    {
                        favorites?.filter((item, idx) => page >= 4 - 4 && idx < page * 4).map((item) => (
                            <Fragment key={item.id}>
                                <Card item={item}/>
                            </Fragment>
                        ))
                    }
                </div>
                {
                    favoritesPages.length > 1 &&   <ul>
                        {
                            favoritesPages.map((item,idx) => (

                                   <li  onClick={() => setPage(idx + 1)} key={idx}>{idx + 1}</li>

                            ))
                        }
                    </ul>
                }

            </div>
        </section>
    );
}else {
    return <h2 style={{ textAlign:'center', color:'red'}}> Список изброных пуст</h2>

}


};

export default Favorites;