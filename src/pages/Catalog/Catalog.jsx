import { Fragment, useContext, useEffect, useState } from 'react';
import AsideFilter from "../../components/AsideFilter/AsideFilter";
import Card from "../../components/Card/Card";
import { CustomContext } from "../../config/context/context";
import api from "../../config/Api/api.js";

const Catalog = () => {
    const [products, setProducts] = useState([]);
    const [category , setCategory] = useState('')
    const [ sort ,setSort] = useState('')
    const  [ slider, setSlider] = useState([0, 3000])
    const {search} = useContext(CustomContext);

    useEffect(() => {

        let queryParamsApi = `?${search.length ? `title_like${search}&` : ''}${category.length ? `category=${category}&` : ''}${sort.length && sort !== 'rate'? `_sort=price&_order=${sort}&` : sort.length ? '_sort=rate&_order=desc' : '' }`

        let queryParamsFromTO = `price_gte=${slider[0]}&price_lte=${slider[1]}`
        api(`products${queryParamsApi}${queryParamsFromTO}`)
            .json()
            .then((res) => setProducts(res));
        console.log(products)
    }, [search,sort,category,slider]);

    return (
        <main>
            <section className="catalog">
                <div className="container">
                    <div className="catalog__row">
                        <AsideFilter slider={slider} setSlider={setSlider}  category={category} setCategory={setCategory}   sort={sort} setSort={setSort} />
                        <div className="hitSale__row catalog__content">
                            {products.map((item) => (
                                <Fragment key={item.id}>
                                    <Card item={item} />
                                </Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Catalog;
