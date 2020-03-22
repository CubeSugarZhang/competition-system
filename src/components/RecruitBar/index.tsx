import React, { ReactElement } from 'react'
import { NavLink } from 'react-router-dom'

import style from './RecruitBarUI.module.scss'

interface Props {
  className?: string;
}

function RecruitBar({className }: Props): ReactElement {
  return (
    <div className={`${className} ${style.container}`}>
      <nav className={style.nav}>
        <li className={style.team}>
          <NavLink to='/recruit/team' activeClassName={style.active}><span>科研团队</span></NavLink>
        </li>
        <li className={style.competition}>
          <NavLink to='/recruit/competition' activeClassName={style.active}><span>竞赛报名</span></NavLink>
        </li>
        <li className={style.student}>
          <NavLink to='/recruit/student' activeClassName={style.active}><span>学生组队</span></NavLink>
        </li>
      </nav>
    </div>
  )
}

export default RecruitBar
