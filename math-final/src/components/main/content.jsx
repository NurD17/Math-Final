import './content.css'
import block1img from '../../img/girl.png'
import block2img from '../../img/hand.png'
import block3img from '../../img/check.png'
const Content = () => {
  return (
    <div className="main">
        <div className="container">
            <div className="main-question">Эмне үчүн Онлайн Китеп?</div>
            <div className="blocks">
                <div className="cards first">
                    <div className="sub-card">
                        <img src={block1img} alt="" />
                    </div>
                    <div className="sub-card-text">
                        <h2>Ар дайым жанында</h2>
                        <p>Онлайн Китепти ар кайсы жерден колдонсоңуз  болот. Эн башкысы интернет жана уюлдук аппарат же компьютер керек</p>
                    </div>
                </div>
                <div className="cards second">
                    <div className="sub-card">
                        <img src={block2img} alt="" />
                    </div>
                    <div className="sub-card-text">
                        <h2>Акысыз колдонуу</h2>
                        <p>Бул баракчага чексиз жана акысыз кире аласыз</p>
                    </div>
                </div>
                <div className="cards third">
                    <div className="sub-card">
                        <img src={block3img} alt="" />
                    </div>
                    <div className="sub-card-text">
                        <h2>Тест</h2>
                        <p>Ар бир темадан кийин билимди бекмедөө үчун кыска сынактар бар    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Content