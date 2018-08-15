export const react = [
  {
    fileName: 'components/SomeComponent.js',
    code: `
import React from 'react'
import { connect } from '../app'

class SomeComponent extends React.Component {
  componentDidMount () {
    this.props.app.reaction(
      'scrollUpOnNotification',
      state => state.notifications,
      () => {
        window.scrollTop = 0
      }
    )
  }
  render () {
    return <h1>foo</h1>
  }
}

export default connect(SomeComponent)
  `,
  },
]

export const reactTs = [
  {
    fileName: 'components/SomeComponent.tsx',
    code: `
import React from 'react'
import { connect, Connect } from '../app'

class SomeComponent extends React.Component<Connect, {}> {
  componentDidMount () {
    this.props.app.reaction(
      'scrollUpOnNotification',
      state => state.notifications,
      () => {
        window.scrollTop = 0
      }
    )
  }
  render () {
    return <h1>foo</h1>
  }
}

export default connect(SomeComponent)
  `,
  },
]

export const vue = [
  {
    fileName: 'SomeComponent.vue (template)',
    code: `
<h1>foo</h1>
  `,
  },
  {
    fileName: 'SomeComponent.vue (script)',
    code: `
import { connect } from '../app'

export default connect({
  mounted() {
    this.app.reaction(
      'scrollUpOnNotification',
      state => state.notifications,
      () => {
        window.scrollTop = 0
      }
    )  
  }
})
`,
  },
]

export const vueTs = vue
