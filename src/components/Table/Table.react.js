import React from 'react';
import styles from './Table.module.css'

const Table = ({feedName, order}) => {
  return (
    <div>
      <div className={styles.table}>
          <div className={styles.thead}>
            <div>Feeds</div>
            <div>Prices</div>
            <div>Status</div>
          </div>
          <div className={styles.tbody}>
            <div>{feedName}</div>
            <div className={styles.orders}>
              <div><span>B</span> : 1171.130</div>
              <div><span>A</span> : 1174.410</div>
            </div>
            <a href='#'>Active</a>
          </div>
      </div>
    </div>
  )
};

export default Table;
