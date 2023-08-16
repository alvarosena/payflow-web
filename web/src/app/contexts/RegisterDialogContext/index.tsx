'use client'
import './styles.modules.scss'
import { createContext, ReactNode, useState } from 'react'
import { TrashIcon } from '@/app/components/TrashIcon'
import { LeftArrowIcon } from '@/app/components/LeftArrowIcon'
import { OrangeFileIcon } from '@/app/components/OrangeFileIcon'
import { OrangeCloseIcon } from '@/app/components/OrangeCloseIcon'
import { OrangeWalletIcon } from '@/app/components/OrangeWalletIcon'
import { OrangeCodeIcon } from '@/app/components/OrangeCodeIcon'

interface RegisterDialogContextData {
  isOpen: boolean
  open: () => void
  close: () => void
}

interface RegisterDialogContextProviderProps {
  children?: ReactNode
}

export const RegisterDialogContext = createContext(
  {} as RegisterDialogContextData,
)

export function RegisterDialogContextProvider({
  children,
}: RegisterDialogContextProviderProps) {
  const [isOpen, toggleIsOpen] = useState(false)
  const isDialogOpen = JSON.stringify(isOpen)

  const close = () => {
    toggleIsOpen(false)
  }

  const open = () => {
    toggleIsOpen(true)
  }

  return (
    <RegisterDialogContext.Provider value={{ isOpen, close, open }}>
      <dialog open={isOpen} className="register-dialog-container">
        <div className="register-dialog-d-flex">
          <div>
            <div className="register-dialog-header">
              <button className="btn-back" onClick={close}>
                <LeftArrowIcon />
              </button>
            </div>
            <form className="register-dialog-content">
              <p className="register-dialog-content-heading">
                Preencha os dados do boleto
              </p>

              <div className="input-wrapper">
                <div className="input-icon">
                  <OrangeFileIcon />
                </div>
                <input type="text" placeholder="Nome do boleto" />
              </div>
              <div className="input-wrapper">
                <div className="input-icon">
                  <OrangeCloseIcon />
                </div>
                <input type="date" placeholder="Vencimento" />
              </div>
              <div className="input-wrapper">
                <div className="input-icon">
                  <OrangeWalletIcon />
                </div>
                <input type="number" placeholder="Valor" />
              </div>
              <div className="input-wrapper">
                <div className="input-icon">
                  <OrangeCodeIcon />
                </div>
                <input type="text" placeholder="Código de barra" />
              </div>
            </form>
          </div>
          <div className="register-dialog-content-bottom">
            <button className="btn-registration cancel" onClick={close}>
              Cancelar
            </button>
            <button className="btn-registration confirm">Cadastrar</button>
          </div>
        </div>
      </dialog>
      <div className={`overlay ${isDialogOpen}`} onClick={close}></div>
      {children}
    </RegisterDialogContext.Provider>
  )
}
