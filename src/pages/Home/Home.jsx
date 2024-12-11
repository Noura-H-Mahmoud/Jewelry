import React from 'react'
import Navv from '../../components/Nav/Nav'
import Hero from '../../components/Hero/Hero'
import Ring from '../../components/Ring/Ring'
import Quality from '../../components/Quality/Quality'
import Featured from '../../components/Featured/Featured'
import Items from '../../components/Items/Items'
import Footer from '../../components/Footer/Footer'
import End from '../../components/End/End'

export default function Home() {
    return (
        <>
            <Navv />
            <Hero />
            <Ring />
            <Quality />
            <Featured />
            <Items />
            <Footer />
            <End />
        </>
    )
}
