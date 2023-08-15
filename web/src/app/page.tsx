import './home.modules.scss'
import { Header } from './components/Header'
import { TicketsList } from './components/TicketsList'
import { Navigator } from './components/Navigator'

export default function Home() {
  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <div className="home-d-flex">
            <h3 className="home-heading">Meus boletos</h3>
            <div className="h-separator"></div>
            <TicketsList />
          </div>
          <div className="h-separator"></div>
        </div>
        <Navigator />
      </div>
    </>
  )
}
