import Facebook from '../../imagens/icons/facebook.avif'
import Whatsapp from '../../imagens/icons/whats.png'
import './Fooer.css'
function Footer() {
  return (
    <div>
        <footer>
            <h2 className='titulo'>@copyrigth</h2>
            <div className="redes">
            <h3>Facebook</h3><img  className='Imagemrede' src={Facebook} alt="" />
            <h3>Whatsapp</h3><img className='Imagemrede' src={Whatsapp} alt="" />
            </div>
       
        </footer>
    </div>
  )
}

export default Footer