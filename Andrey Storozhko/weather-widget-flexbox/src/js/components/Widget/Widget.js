import React from 'react';
import City from '../City/City';

import styles from './Widget.scss';

const Widget = (props) => (
    <div className={styles.widget}>
        <ul className={styles.widget__list}>
            {props.cities.map(city => (
                <li key={city.id} className={styles.widget__item}>
                    <City id={city.id}
                          name={city.name}
                          temp={city.main.temp}
                          code={city.weather[0].id}
                    />
                </li>
            ))}
        </ul>
    </div>
);

export default Widget;