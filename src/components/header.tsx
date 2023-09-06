import { Alignment, Button, Navbar } from '@blueprintjs/core'

export default function TheHeader() {
  return (
    <Navbar>
      <Navbar.Group align={Alignment.LEFT}>
        <Navbar.Heading>React Guide</Navbar.Heading>
        <Navbar.Divider />
        <Button className="bp5-minimal" icon="home" text="Home" />
        <Button className="bp5-minimal" icon="document" text="Files" />
      </Navbar.Group>
    </Navbar>
  )
}
