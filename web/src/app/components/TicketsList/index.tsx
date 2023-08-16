'use client'
import './styles.modules.scss'
import { TicketItem } from '../TicketItem'
import { useContext } from 'react'
import { TicketDialogContext } from '@/app/contexts/TicketDialogContext'

export function TicketsList() {
  const { open } = useContext(TicketDialogContext)

  return (
    <div className="list-container">
      <TicketItem onClick={open} />
    </div>
  )
}
