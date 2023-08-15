import './styles.modules.scss'
import { Header } from '../components/Header'
import { Ticket } from '../components/Ticket'
import { Navigator } from '../components/Navigator'

export default function Extract() {
  return (
    <>
      <Header />
      <div className="extract-container">
        <div className="extract-content">
          <div className="heading-container">
            <h3 className="extract-heading">Meus extratos</h3>
            <span className="paid-bills">3 pagos</span>
          </div>
          <div className="h-separator"></div>
          <Ticket />
        </div>
      </div>
      <Navigator />
    </>
  )
}
