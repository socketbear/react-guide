import { Link } from 'react-router-dom'
import { Alignment, Button, Navbar } from '@blueprintjs/core'

export default function TheHeader() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>React Guide</Navbar.Heading>
        <Navbar.Divider />
        <Link to="/">
          <Button className="bp5-minimal" icon="home" text="Home" />
        </Link>
        <Link to="/api-test">
          <Button className="bp5-minimal" icon="lab-test" text="API TEST" />
        </Link>
        <Link to="/about">
          <Button className="bp5-minimal" icon="info-sign" text="About" />
        </Link>
      </Navbar.Group>
    </Navbar>
  )
}
