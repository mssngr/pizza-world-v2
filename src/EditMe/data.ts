import * as T from "./types"

const pizzas: T.Pizza[] = [
  {
    size: T.Size.SM,
    sauce: T.Sauce.MARINARA,
    toppings: [T.Topping.PINEAPPLE, T.Topping.HAM],
  },
  {
    size: T.Size.LG,
    toppings: [T.Topping.PEPPERONI],
  },
  {
    size: T.Size.XL,
    sauce: T.Sauce.BBQ,
    toppings: [T.Topping.SAUSAGE, T.Topping.MUSHROOMS, T.Topping.GREEN_PEPPERS],
  },
  {
    size: T.Size.MD,
    sauce: T.Sauce.ALFREDO,
  },
]

export default pizzas
