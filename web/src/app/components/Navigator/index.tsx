'use client'
import './styles.modules.scss'
import { useContext } from 'react'
import { AddBoxIcon } from '../AddBoxIcon'
import { FileListIcon } from '../FileListIcon'
import { HomeIcon } from '../HomeIcon'
import { RegisterDialogContext } from '@/app/contexts/RegisterDialogContext'

export function Navigator() {
  const { open } = useContext(RegisterDialogContext)

  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        <a href="/">
          <HomeIcon />
        </a>
        <button className="btn-add" onClick={open}>
          <AddBoxIcon />
        </button>
        <a href="/extratos">
          <FileListIcon />
        </a>
      </div>
    </div>
  )
}
