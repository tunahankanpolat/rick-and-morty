import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Footer from './footer'


const Layout = ({ children }) => (
  <>
    <Header />
    <main className='pt-0.5'>{children}</main>
    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
