import React from 'react'
import { render } from 'react-dom'
import { InertiaApp } from '@inertiajs/inertia-react'

const mount = () => {
  const app = document.getElementById('app')
  if (!app) return console.warn('The app element could not be found!')
  if (!app.dataset.page) throw new Error('App did not include any page data!')

  render(
    <InertiaApp
      initialPage={JSON.parse(app.dataset.page)}
      resolveComponent={name => import(`./pages/${name}`).then(module => module.default)}
    />, app
  )
}


mount()
