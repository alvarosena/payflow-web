'use client'
import './styles.modules.scss'
import { useContext } from 'react'
import { AddBoxIcon } from '../AddBoxIcon'
import { FileListIcon } from '../FileListIcon'
import { HomeIcon } from '../HomeIcon'
import { RegisterDialogContext } from '@/app/contexts/RegisterDialogContext'
import { usePathname } from 'next/navigation'
import { ActiveFileListIcon } from '../ActiveFileListIcon'
import { ActiveHomeIcon } from '../ActiveHomeIcon'

export function Navigator() {
  const { open } = useContext(RegisterDialogContext)
  const pathname = usePathname()

  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        <a href="/">{pathname === '/' ? <ActiveHomeIcon /> : <HomeIcon />}</a>
        <button className="btn-add" onClick={open}>
          <AddBoxIcon />
        </button>
        <a href="/extratos">
          {pathname === '/extratos' ? <ActiveFileListIcon /> : <FileListIcon />}
        </a>
      </div>
    </div>
  )
}
