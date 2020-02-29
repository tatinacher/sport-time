import * as React from "react";
import { nutrition } from "../../lib/data/nutrition";
import {
  AllFood,
  AllIngridients,
  Ingridient,
  IngridientName,
  IngridientPortion,
  ListOfFood,
  MealBlock,
  MealDescription,
  MealName,
  MealPortion,
  MealRecepie,
  MealType,
  Weekday,
  WeekdayTitle,
  Weekend
} from "./style";

interface IngridientsProps {
  measure: string;
  name: string;
  quantity: number;
}

interface DishProps {
  calories_per_portion: number;
  carbohydrates_per_portion: number;
  fats_per_portion: number;
  ingridients: IngridientsProps[];
  name: string;
  portions: string;
  proteins_per_portion: number;
  recepie: string;
  type: string;
}

interface WeekdayProps {
  weekday: string;
  icon: string;
  food: DishProps[];
}

interface NutritionProps {
  week: number;
  days: WeekdayProps[];
}

export const Ingridients: React.FC<{ food: IngridientsProps[] }> = ({
  food
}) => (
  <AllIngridients>
    Ингридиенты:
    {food.map(ingridient => (
      <Ingridient>
        <IngridientName>{ingridient.name}</IngridientName>
        <IngridientPortion>
          {ingridient.quantity} {ingridient.measure}
        </IngridientPortion>
      </Ingridient>
    ))}
  </AllIngridients>
);

export const Meal: React.FC<{ meals: any }> = ({ meals }) => {
  const [isOpen, setOpen] = React.useState(false);
  const setOpenParam = React.useCallback(() => setOpen(!isOpen), [isOpen]);
  return (
    <div>
      {meals.map((meal: DishProps) => (
        <MealBlock>
          <MealType>{meal.type}</MealType>
          <MealName onClick={setOpenParam}>{meal.name}</MealName>
          <MealDescription isOpen={isOpen}>
            <MealPortion>Порций: {meal.portions}</MealPortion>
            <Ingridients food={meal.ingridients} />
            <MealRecepie>{meal.recepie}</MealRecepie>
          </MealDescription>
        </MealBlock>
      ))}
    </div>
  );
};

export const ListOfBuyings: (nutrition: NutritionProps) => any = ({ days }) => {
  const toBuy: IngridientsProps[] = [];
  days.forEach(day =>
    day.food.forEach(el => {
      el.ingridients.forEach(ingridient => {
        const name = ingridient.name;
        const quantity = Math.ceil(ingridient.quantity / parseInt(el.portions));
        const index = toBuy.findIndex(el => el.name === name);
        if (index !== -1) {
          toBuy[index].quantity += quantity;
        } else {
          toBuy.push({
            name: name,
            quantity: quantity,
            measure: ingridient.measure
          });
        }
      });
    })
  );
  return toBuy;
};

export const FoodList: React.FC<{ nutrition: any }> = ({ nutrition }) => {
  const [isOpen, setOpen] = React.useState(false);
  const toBuy = ListOfBuyings(nutrition[0]);
  const food = toBuy ? (
    <AllFood isOpen={isOpen}>
      {toBuy
        .sort((first: IngridientsProps, second: IngridientsProps) =>
          first.name.localeCompare(second.name)
        )
        .map((el: IngridientsProps) => (
          <Ingridient>
            <IngridientName>{el.name}</IngridientName>
            <IngridientPortion>
              {el.quantity}
              {el.measure}
            </IngridientPortion>
          </Ingridient>
        ))}
    </AllFood>
  ) : null;
  return (
    <>
      <ListOfFood onClick={React.useCallback(() => setOpen(!isOpen), [isOpen])}>
        Список покупок
      </ListOfFood>
      {food}
    </>
  );
};

export const Nutrition: React.FC = () => {
  return (
    <>
      <FoodList nutrition={nutrition} />
      <Weekend>
        {nutrition[0].days.map(day => (
          <Weekday>
            <img src={day.icon} alt="" />
            <WeekdayTitle>{day.weekday}</WeekdayTitle>
            <Meal meals={day.food} />
          </Weekday>
        ))}
      </Weekend>
    </>
  );
};
