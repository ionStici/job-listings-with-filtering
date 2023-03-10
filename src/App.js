import React from 'react';

import bgHeaderMobile from './images/bg-header-mobile.svg';
import bgHeaderDesktop from './images/bg-header-desktop.svg';

import { Cards } from './features/cards';

function App() {
    const mediaMatch = window.matchMedia('(min-width: 900px)');
    const [matches, setMatches] = React.useState(mediaMatch.matches);

    React.useEffect(() => {
        const handler = e => setMatches(e.matches);
        mediaMatch.addEventListener('change', handler);
        return () => mediaMatch.removeEventListener('change', handler);
    });

    return (
        <main>
            <header className="header">
                <img
                    className="header__img"
                    src={matches ? bgHeaderDesktop : bgHeaderMobile}
                    alt=""
                />
            </header>

            <Cards />
        </main>
    );
}

export default App;
