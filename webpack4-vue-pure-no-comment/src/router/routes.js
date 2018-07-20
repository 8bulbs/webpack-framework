import Home from 'pages/home'
import List from 'pages/list'
import Welcome from 'pages/welcome'
import Upload from 'pages/upload'
import Compare from 'pages/compare'
import Save from 'pages/save'

export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/list/:id',
    name: 'list',
    component: List,
    meta: {
      metaData: 'it is a metaData'
    }
  },
  {
    path: '/welcome',
    name: 'welcome',
    component: Welcome,
    meta: {
      metaData: 'it is a metaData'
    }
  },
  {
    path: '/upload',
    name: 'upload',
    component: Upload,
    meta: {
      metaData: 'it is a metaData'
    }
  },
  {
    path: '/compare',
    name: 'compare',
    component: Compare,
    meta: {
      metaData: 'it is a metaData'
    }
  },
  {
    path: '/save',
    name: 'save',
    component: Save,
    meta: {
      metaData: 'it is a metaData'
    }
  }
]
