import "./AvailableMeals.css";
import Card from "../UI/Card";
import MealItemForm from "./MealItem/MealItemForm";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 149,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 119,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 89,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => {
    const { id, name, price = ` ${meal.price.toFixed(2)}`, description } = meal;
    return (
      <li className="meal" key={id}>
        <div>
          <h3>{name}</h3>
          <div className="description">{description}</div>
          <div className="price">₹ {price}</div>
        </div>
        <div>
          <MealItemForm
            id={id}
            name={name}
            price={price}
            description={description}
          />
        </div>
      </li>
    );
  });

  return (
    <section className="meals">
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
