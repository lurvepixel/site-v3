import { Component } from 'react'
import Router from 'next/router'

// From https://github.com/pablopunk/nextjs-redirect/blob/master/src/index.tsx
export const makeRedirectPage = (redirectUrl: string, statusCode = 302) =>
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
