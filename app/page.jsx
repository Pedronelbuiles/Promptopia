import { Feed } from '@components/Feed'
import React from 'react'

const Home = () => {
  return (
    <section className="2-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI-Powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative promopts
      </p>
      <Feed />
    </section>
  )
}

export default Home