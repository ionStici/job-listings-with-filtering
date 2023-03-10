import { Card } from './card';

import { useSelector } from 'react-redux';
import { selectAllCompanies } from '../store';
import { selectFilteredCompanies } from '../store';

export const Cards = function (props) {
    const allCompanies = useSelector(selectAllCompanies);
    const filteredCompanies = useSelector(selectFilteredCompanies);
    const companies = filteredCompanies[0] ? filteredCompanies : allCompanies;

    return (
        <section className="section">
            {companies.map(c => {
                return (
                    <Card
                        key={c.id}
                        id={c.id}
                        logo={c.logo}
                        company={c.company}
                        new={c.new}
                        featured={c.featured}
                        position={c.position}
                        postedAt={c.postedAt}
                        contract={c.contract}
                        location={c.location}
                        role={c.role}
                        level={c.level}
                        languages={c.languages}
                        tools={c.tools}
                    />
                );
            })}
        </section>
    );
};
