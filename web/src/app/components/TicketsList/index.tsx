import './styles.modules.scss'

export function TicketsList() {
  return (
    <div className="list-container">
      <div className="list-item">
        <div>
          <p className="ticket-title">Tia maria</p>
          <span className="ticket-expiration-date">Vence em 16/03/21</span>
        </div>
        <p className="ticket-price">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(2131.33)}
        </p>
      </div>
      <div className="list-item">
        <div>
          <p className="ticket-title">Tia maria</p>
          <span className="ticket-expiration-date">Vence em 16/03/21</span>
        </div>
        <p className="ticket-price">
          {Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(2131.33)}
        </p>
      </div>
    </div>
  )
}