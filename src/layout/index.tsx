/**
 * react page을 부를때 마다, 사용할 레이아웃을 지정할 수 있게 구성
 * <Layout name="ELayout.HEADLESS"> 형식으로 사용
 * name이 없을 경우, ELayout.DEFAULT로 지정
 * ELayout enum은 types/enums/index.ts에서 지정되어 있음
 */

import React from 'react'
import DefaultLayout from './Default'
import HeadlessLayout from './Headless'
import { ELayout } from '~/types/enums'

function Layout({ name, children }: {
  name?: ELayout
  children: React.ReactNode
}) {
  switch (name) {
    case ELayout.HEADLESS:
      return <HeadlessLayout>{children}</HeadlessLayout>
    default:
      return <DefaultLayout>{children}</DefaultLayout>
  }
}

export default Layout
