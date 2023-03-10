import styles from './../../styles/card.module.scss';

export const Card = function (props) {
    return (
        <div>
            <div>
                <img src={props.img} alt="Brand" />
            </div>

            <div>
                <div>
                    <p>{props.company}</p>
                    {props.new ? <p>new!</p> : ''}
                    {props.featured ? <p>featured</p> : ''}
                </div>

                <div>{props.position}</div>

                <div>
                    <p>{props.postedAt}</p>
                    <p>{props.contract}</p>
                    <p>{props.location}</p>
                </div>
            </div>

            <div></div>
        </div>
    );
};
