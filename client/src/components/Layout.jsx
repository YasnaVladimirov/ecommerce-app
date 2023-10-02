import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router'
import Navbar from './Navbar'

function Layout() {
  return (
    <>
      <Navbar />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout