import React, { ReactElement } from 'react'

import Header from '@/components/Header'
import Bottom from '@/components/Bottom'
import { Iroute } from '@/utils/renderRoutes'

import style from './BasicLayoutUI.module.scss'

interface Props {
  route: Iroute;
  children: ReactElement;
}

function BasicLayout({route,children}: Props): ReactElement {
  return (
    <div>
      <Header />
      <div className={style.children}>{children}</div>
      <Bottom className={style.bottom}/>
    </div>
  )
}

export default BasicLayout
