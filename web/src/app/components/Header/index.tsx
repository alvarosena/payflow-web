import { BarCode } from '../BarCode'
import './styles.modules.scss'

export function Header() {
  return (
    <header className="header-container">
      <div className="header-content">
        <div className="d-flex">
          <div className="flex-elem">
            <p className="p-greetings">
              Olá, <strong>Tiago</strong>
            </p>
            <p className="p-message">Mantenha suas contas em dia</p>
          </div>
          <div className="flex-elem">
            <img
              src="https://avatars.githubusercontent.com/u/73470355?v=4"
              alt=""
            />
          </div>
        </div>

        {/* <div className="alert-container">
          <BarCode />
          <div className="v-separator"></div>
          <p className="p-alert">
            Você tem <strong>14 boletos</strong> cadastrados para pagar
          </p>
        </div> */}
      </div>
    </header>
  )
}
