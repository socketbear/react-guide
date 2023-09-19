import { proxy } from 'valtio'
import { subscribeKey } from 'valtio/utils'
import { LocalStorageUtil } from '~/utils'

export const userStore = proxy({
  uname: LocalStorageUtil.getItem<string>('uname'),
  unames: LocalStorageUtil.getItem<string[]>('unames') ?? [],
  update: (newName: string) => {
    userStore.uname = newName
    LocalStorageUtil.setItem('uname', newName)
  }
})

subscribeKey(userStore, 'uname', (newUname) => {
  if (newUname && !userStore.unames.includes(newUname)) {
    userStore.unames.push(newUname)
    LocalStorageUtil.setItem('unames', userStore.unames)
  }
})
