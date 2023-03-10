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
    filteredCompanies: [],
    tags: [],
};

// prettier-ignore
[ photosnapLogo, manageLogo, accountLogo, myHomeLogo, loopStudiosLogo, faceItLogo, shortlyLogo, insureLogo, eyecamLogo, airFilterLogo, ]
    .forEach((logo, i) => (initialState.companiesData[i].logo = logo));

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'tags/addTag':
            if (!state.tags.includes(action.payload)) {
                return {
                    ...state,
                    tags: [...state.tags, action.payload],
                };
            } else {
                return state;
            }

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

const ADD_TAG = 'tags/addTag';
const REMOVE_TAG = 'tags/removeTag';
const REMOVE_ALL_TAGS = 'tags/removeAllTags';
const FILTER_COMPANIES = 'filter/filteredCompanies';

export const addTag = tag => ({ type: ADD_TAG, payload: tag });
export const removeTag = tag => ({ type: REMOVE_TAG, payload: tag });
export const removeAllTags = () => ({ type: REMOVE_ALL_TAGS });
export const filterCompanies = () => ({ type: FILTER_COMPANIES });

export const selectAllCompanies = state => state.companiesData;
export const selectFilteredCompanies = state => state.filteredCompanies;
export const selectTags = state => state.tags;

export const store = createStore(reducer);

// store.dispatch(addTag('Frontend'));
// store.dispatch(filterCompanies());

// store.dispatch(removeTag('Frontend'));
// store.dispatch(filterCompanies());

// store.dispatch(addTag('CSS'));
// store.dispatch(addTag('HTML'));
// store.dispatch(filterCompanies());

// store.dispatch(removeAllTags());
// store.dispatch(filterCompanies());

// console.log(store.getState().tags);
// console.log(store.getState().filteredCompanies);

store.subscribe(() => console.log(store.getState().tags));
