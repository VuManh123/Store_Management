import React from "react";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className="pt-16">
            <Hero />
            <Features />
            <Stats />
            <Testimonials />
            <CTA />
            <Footer />
        </div>
    );
};

export default Home;
