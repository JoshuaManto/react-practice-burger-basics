import React from 'react';

import styles from './Input.module.css';

const input = props => {
  let inputElement = null;

  // inputtype where 't' is in lower case because of change in React 16. inputType due to casing is non-reusable because the html in DOM is case insensitive therefore it will throw error.
  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select
          className={styles.InputElement}
          // {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = (
        <input
          className={styles.InputElement}
          {...props.elementConfig}
          value={props.value}
          onChange={props.changed}
        />
      );
  }

  return (
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;
