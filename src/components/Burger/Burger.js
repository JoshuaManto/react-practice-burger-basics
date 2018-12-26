import React from 'react';
// import { withRouter } from 'react-router-dom';

import styles from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = props => {
  // console.log(props);

  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      // Pre-flatten of array
      // The first map identifies and creates the array/object with the unique keys
      // So, each type of ingredient
      // ex: [lettuce, bacon, cheese, meat]

      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // Pre-flatten of array
        // The second map is the one identifying each individual ingredient for each kind of ingredient
        // ex: 1 lettuce 1 bacon 2 cheese 2 meat
        // This second mapp puts the <BurgerIngredient> object to every array created

        // console.log(igKey);
        // [salad bacon cheese cheese meat meat]
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    }) // flatten the array using reduce
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  // [salad bacon cheese meat]
  // console.log(Object.keys(props.ingredients));

  // [ [undefined, length=1], [undefined, length=1], [undefined, length=2], [undefined, length=2] ]
  // console.log(
  //   Object.keys(props.ingredients).map(igKey => [
  //     ...Array(props.ingredients[igKey])
  //   ])
  // );

  console.log(transformedIngredients);

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

// Use withRouter to get direct access to match, history, and location in props
// export default withRouter(burger);
export default burger;
