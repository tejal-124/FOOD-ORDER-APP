import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Butter Pav Bhaji',
      description: 'Full of veggies!',
      price:160,
    },
    {
      id: 'm2',
      name: 'Schezwan Fried Rice',
      description: 'Fried rice made with Schezwan sauce!',
      price: 200,
    },
    {
      id: 'm3',
      name: 'Soya Chaap Biryani',
      description: 'Chaap sticks made with soyabean!',
      price: 130,
    },
    {
      id: 'm4',
      name: 'Desi Paneer Tikka Burger',
      description: 'Tandoori paneer tikka topped with lachha onions and spicy mint chutney!',
      price:285,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem 
     id={meal.id}
     key={meal.id}
     description={meal.description}
     name={meal.name}
     price={meal.price}
     />
    ));

    return (
    <section className={classes.meals}>
        <Card>
      <ul>
        {mealsList}
      </ul>
        </Card>
    </section>
    );
};

export default AvailableMeals;