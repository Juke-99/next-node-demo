import { withRouter } from 'next/router'
import Header from '../../src/components/header';

class Top extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
      </div>
    )
  }
}

export default withRouter(Top)