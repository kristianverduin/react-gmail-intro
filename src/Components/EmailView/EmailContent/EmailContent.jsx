import Title from './Title/Title'
import Header from './Header/Header'
import Body from './Body/Body'
import Actions from './Actions/Actions'

function EmailContent() {
  return (
    <article className="email-content">
      <Title />
      <Header />
      <Body />
      <Actions />
    </article>
  )
}

export default EmailContent