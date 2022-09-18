import React from 'react'
import { Navbar, Feature, Article, CTA, Brand } from './components/index'
import { Header, Footer, Features, Possibility, Whattf, Blog } from './containers/index'
const App = () => {
    return (
        <div className='App'>
            <div className='gradient__bg'>
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Whattf />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>
    )
}

export default App
