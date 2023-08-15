'use client'
import './styles.modules.scss'
import { createContext, ReactNode, useState } from 'react'
import { TrashIcon } from '@/app/components/TrashIcon'

interface TicketDialogContextData {
  isOpen: boolean
  open: () => void
  close: () => void
}

interface TicketDialogContextProviderProps {
  children?: ReactNode
}

export const TicketDialogContext = createContext({} as TicketDialogContextData)

export function TicketDialogContextProvider({
  children,
}: TicketDialogContextProviderProps) {
  const [isOpen, toggleIsOpen] = useState(false)
  const isDialogOpen = JSON.stringify(isOpen)

  const close = () => {
    toggleIsOpen(false)
  }

  const open = () => {
    toggleIsOpen(true)
  }

  return (
    <TicketDialogContext.Provider value={{ isOpen, close, open }}>
      <dialog open={isOpen} className="ticket-dialog-container">
        <div className="ticket-dialog-content">
          <p className="ticket-dialog-content-message">
            O boleto <strong>Tia Maria</strong> no valor de{' '}
            <strong>R$ 2.131,33</strong> foi pago ?
          </p>
          <div className="actions">
            <button className="dialog-button cancel" onClick={close}>
              Não
            </button>
            <button className="dialog-button confirm">Sim</button>
          </div>
        </div>
        <div className="ticket-dialog-content-bottom">
          <button className="btn-delete-ticket">
            <TrashIcon />
            Deletar boleto
          </button>
        </div>
      </dialog>
      <div className={`overlay ${isDialogOpen}`} onClick={close}></div>
      {children}
    </TicketDialogContext.Provider>
  )
}
