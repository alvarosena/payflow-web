import { BarCode } from '../BarCode'
import './styles.modules.scss'

export function Ticket() {
  return (
    <div className="alert-container">
      <BarCode />
      <div className="v-separator"></div>
      <p className="p-alert">
        Você tem <strong>14 boletos</strong> cadastrados para pagar
      </p>
    </div>
  )
}
