import React from 'react'
import Herosection from '../Sections/Herosection/Herosection'
import AboutSection from '../Sections/AboutSection/AboutSection'
import UnderBanner from '../Sections/underBanner/UnderBanner'
import Programcard from '../Sections/ourprogram/Programcard'
import Trainer from '../Sections/trainer/Trainer'
import ContactUs from '../Sections/contactUs/ContactUs'
export default function Home() {

    return (
        <>

            <Herosection />
            <UnderBanner />
            <AboutSection />
            <Programcard />
            <Trainer />
            <ContactUs />

        </>
    )
}
