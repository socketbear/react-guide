import type React from 'react'
import { lazy } from 'react'
import Home from '~/pages/home'
import Hi from '~/pages/hi'
import { ELayout } from '~/types/enums'

const About = lazy(() => import('~/pages/about'))
const ErrorPage = lazy(() => import('~/pages/error-page'))
const ApiTest = lazy(() => import('~/pages/api-test'))

export interface RouteType {
  path: string
  element: React.FC
  meta?: {
    title: string
    layout?: ELayout
  }
}

const routes: RouteType[] = [
  {
    path: '/',
    element: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/hi/:id',
    element: Hi,
    meta: {
      title: 'Welcome'
    }
  },
  {
    path: '/about',
    element: About,
    meta: {
      title: 'About'
    }
  },
  {
    path: '/api-test',
    element: ApiTest,
    meta: {
      title: 'API TEST'
    }
  },
  {
    path: '*',
    element: ErrorPage,
    meta: {
      title: 'Page not found',
      layout: ELayout.HEADLESS
    }
  }
]

export { routes }
