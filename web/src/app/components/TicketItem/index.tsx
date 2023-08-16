import React from 'react'
import './styles.modules.scss'

type TicketProps = React.HTMLProps<HTMLDivElement>

export function TicketItem(props: TicketProps) {
  return (
    <div {...props} className="ticket">
      <div>
        <p className="ticket-title">Tia maria</p>
        <span className="ticket-expiration-date">Vence em 16/03/21</span>
      </div>
      <p className="ticket-price">
        {Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(2131.33)}
      </p>
    </div>
  )
}
