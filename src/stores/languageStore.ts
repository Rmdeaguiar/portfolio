import { useState } from 'react';

export function useLanguage() {
    const [english, setEnglish] = useState(false);

    return {
        english,
        setEnglish
    };
}

