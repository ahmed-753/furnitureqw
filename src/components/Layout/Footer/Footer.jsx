import React from 'react';


const Footer = () => {
    return (
        <footer className='footer'>
            <div className='container'>
                <h4 style={{paddingTop:'60px'}} className='footer__navigation' >НАВИГАЦИЯ</h4>
                <div style={{display:"flex", justifyContent:'space-between'}}>
                    <div className='footer__row'>
                        <div className='footer__texts'  style={{display:'flex',flexDirection:'column',rowGap:'11px'}}>
                            <p className='footer__text'>Кухни</p>
                            <p className='footer__text'>Спальни</p>
                            <p className='footer__text'>Гостинные</p>
                        </div>
                        <div className='footer__texts'  style={{display:'flex',flexDirection:'column',rowGap:'11px'}}>
                            <p className='footer__text'>Прихожие</p>
                            <p className='footer__text'>Офисная мебель</p>
                            <p className='footer__text'>Детская</p>
                        </div>
                        <div className='footer__texts'  style={{display:'flex',flexDirection:'column',rowGap:'11px'}}>
                            <p className='footer__text'>Шкафы</p>
                            <p className='footer__text'>Матрасы</p>
                            <p className='footer__text'>Мягкая мебель</p>
                        </div>
                    </div>

                    <div style={{display:'flex', flexDirection:'column'}}>
                        <div className='footer__info'>
                            <img />
                            <p className='footer__info-text'>г. Анапа, Анапское шоссе,<br/>
                                30 Ж/К Черное море
                            </p>
                        </div >
                        <div className='footer__contact'>
                            <img />
                            <p>8 (964) 89 99 119</p>

                            <img />
                            <p>INSTAGRAM</p>

                            <img/>
                            <p>mebel_loft_anapa@mail.ru</p>
                        </div>
                    </div>
                </div>
                <div style={{display:'flex', columnGap:'25px'}}>
                    <p style={{color:'red'}}>Акция</p>
                    <p>Новинки</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;