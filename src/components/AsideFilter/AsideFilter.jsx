import FilterSelect from "../FilterSelect/FilterSelect";
import RangeSlider from "./RangeSlider.jsx";
import {Button} from "@mui/material";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const AsideFilter = ({sort,setSort,category,setCategory,slider,setSlider}) => {

    const colors = ['red', 'green', 'blue'];


    const  resetFilter = () => {
        setSort('')
        setCategory('')
        setSlider(0,30000)

    }


    return (
        <aside className='catalog__aside'>
            <div className="catalog__aside-content">
                <h2 className="catalog__aside-title">
                    Раздел
                </h2>
                <FilterSelect title={'Категория'} state={category} setState={setCategory} array={['Барные стулья','Диваны','Двухспальные кровати','Детский диван','Буфеты','Журнальные столы','Письменные столы']}/>
                <FilterSelect  title={'Cортировать'} state={sort} setState={setSort} array={['asc','desc','rate']}/>
            </div>
            <div className="catalog__aside-content">
                <h2 className="catalog__aside-title">
                    Цена
                </h2>
                <RangeSlider  slider={slider} setSlider={setSlider}/>
                <div className="catalog__aside-prices">
                    <div className="catalog__aside-price">
                        {slider[0]} ₽
                    </div>
                    -
                    <div className="catalog__aside-price">
                        {slider[1]} ₽
                    </div>
                </div>
            </div>

            <Button variant='contained' onClick={() => resetFilter() }>Сбросить</Button>


        </aside>
    );
};

export default AsideFilter;