import './navbar.css'
import img1 from '../../img/head-img.png'
import '../../bootstrap.min.css'
const Navbar = () => {
  return (
    <div className="header-background">
        <div className="header-part">
            <div className="container">
                <div className="logo">
                    <h2>Лого</h2>
                    <h2>Название</h2>
                </div>
                <div className="header-content">
                    <div className="head-info">
                        <h1>Математика ар дайым!</h1>
                        <h2>Математика онлайн китеби!</h2>
                        <p>Сана Онлайн - бул математика боюнча онлайн китеби. Бул баракчада 7-10 класстардын атайын тандлаган маалыматтары гана менен. </p>
                        <button>Окуу</button>
                    </div>
                    <div className="head-img">
                        <img src={img1} alt="header-img"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar