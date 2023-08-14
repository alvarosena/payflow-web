import { AddBoxIcon } from '../AddBoxIcon'
import { FileListIcon } from '../FileListIcon'
import { HomeIcon } from '../HomeIcon'
import './styles.modules.scss'

export function Navigator() {
  return (
    <div className="nav-bar">
      <div className="nav-bar-content">
        <a href="">
          <HomeIcon />
        </a>
        <button className="btn-add">
          <AddBoxIcon />
        </button>
        <a href="">
          <FileListIcon />
        </a>
      </div>
    </div>
  )
}