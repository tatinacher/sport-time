import * as React from "react";
import { nutrition } from "../../lib/data/nutrition";
import {
  AllIngridients,
  Ingridient,
  IngridientName,
  IngridientPortion,
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

export const Nutrition: React.FC = () => (
  <Weekend>
    {nutrition[0].days.map(day => (
      <Weekday>
        <img src={day.icon} />
        <WeekdayTitle>{day.weekday}</WeekdayTitle>
        <Meal meals={day.food} />
      </Weekday>
    ))}
  </Weekend>
);
