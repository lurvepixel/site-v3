import { Component } from 'react'
import Router from 'next/router'

// From https://github.com/pablopunk/nextjs-redirect/blob/master/src/index.tsx
export default (redirectUrl: string, statusCode = 301) =>
  class extends Component {
    static async getInitialProps({ res }) {
      if (res) {
        res.writeHead(statusCode, { Location: redirectUrl })
        res.end()
      } else {
        Router.push(redirectUrl)
      }

      return {}
    }
    render() {
      return null
    }
  }
