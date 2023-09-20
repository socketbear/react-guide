import { Button, HotkeysProvider } from '@blueprintjs/core'
import { Icon } from '@iconify/react'
import { useState } from 'react'

import { Cell, Column, Table2 } from '@blueprintjs/table'
import Back from '~/components/back'
import { useFetch } from '~/hooks/useFetch'

interface IPost {
  id: number
  title: string
  author: string
}

export default function ApiTest() {
  const { api } = useFetch()
  const [postsUrl, setPostsUrl] = useState('/mock/posts')
  const [posts, setPosts] = useState<IPost[]>([])

  const getPosts = async () => {
    const res: IPost[] = await api(postsUrl)
    setPosts(res)
  }

  const postIdRenderer = (rowIndex: number) => (
    <Cell>{ posts[rowIndex].id }</Cell>
  )
  const postTitleRenderer = (rowIndex: number) => (
    <Cell>{posts[rowIndex].title}</Cell>
  )
  const postAuthorRenderer = (rowIndex: number) => (
    <Cell>{posts[rowIndex].author}</Cell>
  )

  return (
    <div className='mx-auto w-1/2'>
      <div className='h-20 pt-10'>
        <Icon icon="eos-icons:api-outlined" className='pos-center dark:text-white' width='50' />
      </div>
      <h1 text="2xl" font='bold dark:white'>API TEST</h1>
      <p>ofetch를 통한 Restful API 조회 테스트</p>
      <Button icon="refresh" onClick={getPosts}>조회하기</Button>
      <input type="text" className='ml-2 bp5-input' value={postsUrl ?? ''} onChange={e => setPostsUrl(e.currentTarget.value)} />
      <div className='mt-2 h-32 w-full border'>
        <HotkeysProvider>
          <Table2 numRows={posts.length} enableFocusedCell={true}>
            <Column name="ID" cellRenderer={postIdRenderer} />
            <Column name="Title" cellRenderer={ postTitleRenderer} />
            <Column name="Author" cellRenderer={postAuthorRenderer} />
          </Table2>
        </HotkeysProvider>
      </div>
      <Back />
    </div>
  )
}
