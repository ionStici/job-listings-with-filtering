import { createStore } from 'redux';
import data from './data.json';

import photosnapLogo from './images/photosnap.svg';
import manageLogo from './images/manage.svg';
import accountLogo from './images/account.svg';
import myHomeLogo from './images/myhome.svg';
import loopStudiosLogo from './images/loop-studios.svg';
import faceItLogo from './images/faceit.svg';
import shortlyLogo from './images/shortly.svg';
import insureLogo from './images/insure.svg';
import eyecamLogo from './images/eyecam-co.svg';
import airFilterLogo from './images/the-air-filter-company.svg';

const initialState = {
    companiesData: [...data],
    tags: [],
    filteredCompanies: [],
};

// prettier-ignore
[ photosnapLogo, manageLogo, accountLogo, myHomeLogo, loopStudiosLogo, faceItLogo, shortlyLogo, insureLogo, eyecamLogo, airFilterLogo, ]
    .forEach((logo, i) => (initialState.companiesData[i].logo = logo));

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'tags/addTag':
            return {
                ...state,
                tags: [...state.tags, action.payload],
            };

        case 'tags/removeTag':
            return {
                ...state,
                tags: state.tags.filter(tag => tag !== action.payload),
            };

        case 'tags/removeAllTags':
            return {
                ...state,
                tags: [],
            };

        case 'filter/filteredCompanies':
            return {
                ...state,
                filteredCompanies: state.companiesData.filter(c => {
                    return [c.role, c.level, ...c.languages, ...c.tools].some(
                        tag => state.tags.includes(tag)
                    );
                }),
            };

        default:
            return state;
    }
};

export const store = createStore(reducer);

export const selectAllCompanies = state => state.companiesData;
export const selectFilteredCompanies = state => state.filteredCompanies;

export const selectTags = state => state.tags;

// store.dispatch({ type: 'tags/addTag', payload: 'Python' });

store.dispatch({ type: 'tags/addTag', payload: 'HTML' });
store.dispatch({ type: 'tags/addTag', payload: 'CSS' });

store.dispatch({ type: 'tags/removeAllTags' });

// store.dispatch({ type: 'tags/removeTag', payload: 'HTML' });
// store.dispatch({ type: 'tags/removeTag', payload: 'CSS' });

store.dispatch({ type: 'filter/filteredCompanies' });

// console.log(store.getState().tags);
// console.log(store.getState().filteredCompanies);
