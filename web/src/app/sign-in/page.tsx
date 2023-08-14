import './styles.modules.scss'
import { BarCode } from '../components/BarCode'
import { GoogleIcon } from '../components/GoogleIcon'

export default function SignIn() {
  return (
    <div className="sign-container">
      <div className="d-grid">
        <div className="grid-elem bg-orange">
          <img src="/girl.png" alt="Mulher com um celular em mãos" />
          <div className="rectangle"></div>
        </div>
        <div className="grid-elem">
          <div className="grid-elem-content">
            <BarCode />
            <h3 className="heading">Organize seus boletos em um só lugar</h3>
            <a href="/" className="a-sign-in">
              <GoogleIcon />
              <span>Entrar com o Google</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
