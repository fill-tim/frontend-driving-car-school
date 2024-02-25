import '../css/homePage.css'


export function HomePage() {
    return (
        <div className="container-home-page">
            <p className='title'>Мы научим вас водить автомобиль!</p>
            <div className='container-btn'>
                <button className="btn">Ознакомиться</button>
                <a className="btn" href='/register'>Зарегистироваться</a>
            </div>


        </div>
    )
}