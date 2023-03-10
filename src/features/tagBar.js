import iconRemove from './../images/icon-remove.svg';
import styles from './../styles/tagbar.module.scss';
import { selectTags } from '../store';
import { removeTag } from '../store';
import { removeAllTags } from '../store';
import { filterCompanies } from '../store';
import { useSelector, useDispatch } from 'react-redux';

export const TagBar = function () {
    const dispatch = useDispatch();

    const handleRemoveTag = ({ target }) => {
        dispatch(removeTag(target.closest('p').textContent));
        dispatch(filterCompanies());
    };

    const handleRemoveAllTags = () => {
        dispatch(removeAllTags());
        dispatch(filterCompanies());
    };

    const hideStyles = {};
    const tags = useSelector(selectTags);
    if (!tags[0]) hideStyles.opacity = '0';

    return (
        <div className={styles.tagBar} style={hideStyles}>
            <div className={styles.tagsBox}>
                {tags.map(tag => (
                    <p
                        className={styles.tag}
                        key={tag}
                        onClick={handleRemoveTag}
                    >
                        <span>{tag}</span>
                        <img src={iconRemove} alt="" />
                    </p>
                ))}
            </div>
            <button className={styles.btn} onClick={handleRemoveAllTags}>
                Clear
            </button>
        </div>
    );
};
