import styles from './../styles/card.module.scss';

export const Card = function (props) {
    return (
        <div className={styles.card}>
            <div className={styles.logoBox}>
                <img
                    className={styles.logo}
                    src={props.logo}
                    alt="Company Logo"
                />
            </div>

            <div className={styles.contentBox}>
                <div className={styles.companyBox}>
                    <p className={styles.company}>{props.company}</p>
                    {props.new ? <p className={styles.new}>new!</p> : ''}
                    {props.featured ? (
                        <p className={styles.featured}>featured</p>
                    ) : (
                        ''
                    )}
                </div>

                <p className={styles.position}>{props.position}</p>

                <div className={styles.detailsBox}>
                    <p className={styles.postedAt}>{props.postedAt}</p>
                    <p className={styles.contract}>{props.contract}</p>
                    <p className={styles.location}>{props.location}</p>
                </div>
            </div>

            <div className={styles.tagsBox}>
                <ul className={styles.tagsUl}>
                    {[
                        props.role,
                        props.level,
                        ...props.languages,
                        ...props.tools,
                    ].map(tag => (
                        <li
                            className={styles.tag}
                            key={tag}
                            onClick={props.handleTagClick}
                        >
                            {tag}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
