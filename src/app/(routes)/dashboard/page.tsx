import { Button } from '@/components/ui/button'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

type Props = {}

const DashBoard = (props: Props) => {
  return (
    <div>DashBoard  <LogoutLink><Button>Logout</Button></LogoutLink></div>

  )
}

export default DashBoard