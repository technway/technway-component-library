import * as React from 'react';
import { useEffect, useState } from 'react';

export interface RenderingTesterProps {}

const phrases = [
    "I am rendered",
    "Yesss nice",
    "Hello world",
    "Random phrase",
    "Another one",
    "More phrases",
    "Keep going",
    "Almost there",
    "Just a bit more",
    "Last one"
];

const randomIndex = Math.floor(Math.random() * phrases.length);
const initialPhrase = phrases[randomIndex];

function RenderingTester(): JSX.Element {
    const [phrase, setPhrase] = useState<string | null>(null);

    useEffect(() => {
        if (!phrase) {
            setPhrase(initialPhrase);
            console.log('RenderingTester ', initialPhrase);
        }
    }, [phrase]);

    return <div>Check the console for a random phrase. This is for testing purposes.</div>;
}

export default RenderingTester;