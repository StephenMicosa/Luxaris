import { useState } from 'react';
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import FAQTitle from './FAQTitle';
import FAQHeader from './FAQHeader';
import FAQAccordion from './FAQAccordion';

export default function FAQ() {
    const scrollRef = useScrollAnimation();

    return (
        <section className="py-12 sm:py-16 bg-white animate-scroll" ref={scrollRef}>
            <div className="max-w-2xl sm:max-w-3xl lg:max-w-4xl mx-auto px-4">
                <FAQTitle />
                <FAQHeader />
                <FAQAccordion />
            </div>
        </section>
    );
}
