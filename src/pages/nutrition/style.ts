import styled, { StyledComponent } from "styled-components";

interface MealDescriptionProps {
  isOpen: boolean;
}

const map = (props: MealDescriptionProps) => ({
  "data-open": props.isOpen
});

export const Weekday = styled.div`
  padding: 15px;
  @media (min-width: 768px) {
    width: 40%;
  }
`;

export const WeekdayTitle = styled.div`
  font-size: 26px;
  font-weight: bold;
  padding-bottom: 30px;
`;

export const AllIngridients = styled.div`
  padding: 10px 0;
`;

export const AllFood: StyledComponent<"div", any, any> = styled.div.attrs(map)`
  padding: 10px 0;
  display: none;
  &[data-open="true"] {
    display: block;
  }
`;

export const Ingridient = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 3px solid #cdd5ff;
  padding: 10px;
  :nth-child(2n) {
    border-bottom: 3px solid #e7bbe3;
  }
`;

export const IngridientName = styled.div`
  padding: 0 5px 0 0;
`;

export const IngridientPortion = styled.div`
  padding: 0 5px;
  font-style: italic;
`;

export const MealName = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding: 3px 0 15px;
  :hover {
    cursor: pointer;
  }
`;

export const MealPortion = styled.div`
  font-style: italic;
`;

export const MealType = styled.div`
  font-size: 12px;
  color: #23c9ff;
`;
export const MealBlock = styled.div``;

export const MealRecepie = styled.div`
  padding: 20px 0;
`;

export const MealDescription: StyledComponent<
  "div",
  any,
  any
> = styled.div.attrs(map)`
  display: none;
  &[data-open="true"] {
    display: block;
  }
`;

export const WeekdayIcon = styled.div<{ icon: string }>`
  background-image: url(${props => props.icon});
  width: 50px;
  height: 50px;
`;

export const Weekend = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ListOfFood = styled.div`
  padding: 15px 0;
  font-weight: bold;
  background: #f7edf0;
  text-align: center;
  font-size: 20px;
  width: 250px;
  margin: 0 auto;
  border-radius: 3px;
  border-bottom: 2px solid #f4cbc6;
  border-right: 2px solid #f4cbc6;
  :hover {
    cursor: pointer;
  }
`;
