import { Card } from './card';
import { TagBar } from './tagBar';
import { useSelector, useDispatch } from 'react-redux';
import { selectAllCompanies } from './../store';
import { selectFilteredCompanies } from './../store';

import { addTag } from './../store';
import { filterCompanies } from './../store';

export const Cards = function (props) {
    const dispatch = useDispatch();
    const allCompanies = useSelector(selectAllCompanies);
    const filteredCompanies = useSelector(selectFilteredCompanies);
    const companies = filteredCompanies[0] ? filteredCompanies : allCompanies;

    const handleTagClick = ({ target }) => {
        dispatch(addTag(target.textContent));
        dispatch(filterCompanies());
    };

    return (
        <section className="section">
            <TagBar />

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
                        handleTagClick={handleTagClick}
                    />
                );
            })}
        </section>
    );
};
