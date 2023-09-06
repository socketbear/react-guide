/**
 * page에서 사용하는 Layout 중 Default로 지정되는 Layout
 * Header, Footer, Sidebar 등이 포함되어 있음
 */
import React from 'react'
import Header from '~/components/header'
import Footer from '~/components/footer'

function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}

export default DefaultLayout
