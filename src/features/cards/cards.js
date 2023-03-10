import { Card } from '../components/card';

import img1 from './../../images/photosnap.svg';
import img2 from './../../images/manage.svg';

export const Cards = function (props) {
    return (
        <section className="section">
            <Card
                id="1"
                logo={img1}
                company="Photosnap"
                //
                new={true}
                featured={true}
                position="Senior Frontend Developer"
                //
                postedAt="1d ago"
                contract="Full Time"
                location="USA only"
                //
                role="Frontend"
                level="Senior"
                languages={['HTML', 'CSS', 'JavaScript']}
                tools={[]}
            />

            <Card
                id="2"
                logo={img2}
                company="Manage"
                //
                new={true}
                featured={false}
                position="Fullstack Developer"
                //
                postedAt="1d ago"
                contract="Remote"
                location="Remote"
                //
                role="Fullstack"
                level="Midweight"
                languages={['Python']}
                tools={['JavaScript', 'Django']}
            />
        </section>
    );
};
