import { ReactNode } from 'react'
import './styles.modules.scss'

interface HeaderProps {
  children?: ReactNode
}

export function Header({ children }: HeaderProps) {
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
        {children}
      </div>
    </header>
  )
}
