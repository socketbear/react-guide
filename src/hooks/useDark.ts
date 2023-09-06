import { useState } from 'react'
import { LocalStorageUtil } from '~/utils'

export function useDark() {
  const dark = LocalStorageUtil.getItem<boolean>('dark')
  const [isDark, setIsDark] = useState(dark)

  if (isDark) {
    document.documentElement.classList.add('dark')
  }

  const setDark = (value: boolean) => {
    setIsDark(value)
    LocalStorageUtil.setItem('dark', value)
    document.documentElement.classList.toggle('dark', value)
    document.documentElement.querySelector('.main-app').classList.toggle('bp5-dark', value)
  }

  const toggle = () => {
    setDark(!isDark)
  }

  return { isDark, toggle }
}
