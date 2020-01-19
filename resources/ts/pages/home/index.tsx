import React from 'react'
import { usePage } from '@inertiajs/inertia-react'

const Index = () => {
  const data = usePage()

  console.log(data)

  return <p>Hello!</p>
}

export default Index
