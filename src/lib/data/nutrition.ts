import { breakfast } from "./breakfast";
import { supper } from "./supper";
import { dinner } from "./dinner";
import { lunch } from "./lunch";
import mon from "../../assets/images/icons8-watermelon-100.png";
import tue from "../../assets/images/icons8-taco-100.png";
import wed from "../../assets/images/icons8-raspberry-100.png";
import thu from "../../assets/images/icons8-plum-100.png";
import fri from "../../assets/images/icons8-organic-food-100.png";
import sun from "../../assets/images/icons8-orange-100.png";
import sat from "../../assets/images/icons8-lemon-100.png";

export const nutrition = [
  {
    week: 1,
    days: [
      {
        weekday: "Понедельник",
        icon: mon,
        food: [breakfast[0], lunch[0], dinner[0], supper[0]]
      },
      {
        weekday: "Вторник",
        icon: tue,

        food: [breakfast[1], lunch[1], dinner[1], supper[1]]
      },
      {
        weekday: "Среда",
        icon: wed,
        food: [breakfast[0], lunch[2], dinner[0], supper[0]]
      },
      {
        weekday: "Четверг",
        icon: thu,
        food: [breakfast[1], lunch[3], dinner[1], supper[1]]
      },
      {
        weekday: "Пятница",
        icon: fri,
        food: [breakfast[2], lunch[4], dinner[2], supper[2]]
      },

      {
        weekday: "Суббота",
        icon: sun,
        food: [breakfast[3], lunch[5], dinner[3], supper[3]]
      },
      {
        weekday: "Воскресение",
        icon: sat,
        food: [breakfast[2], lunch[6], dinner[3], supper[2]]
      }
    ]
  }
];
