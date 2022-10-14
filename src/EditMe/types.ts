export enum Size {
  SM = "Small",
  MD = "Medium",
  LG = "Large",
  XL = "Extra-Large",
}

export enum Topping {
  CHICKEN = "Chicken",
  PEPPERONI = "Pepperoni",
  HAM = "Ham",
  SAUSAGE = "Sausage",
  PINEAPPLE = "Pineapple",
  RED_PEPPERS = "Red Peppers",
  GREEN_PEPPERS = "Green Peppers",
  BANANA_PEPPERS = "Banana Peppers",
  ONIONS = "Onions",
  RED_ONIONS = "Red Onions",
  MUSHROOMS = "Mushrooms",
  BLACK_OLIVES = "Black Olives",
}

export enum Sauce {
  MARINARA = "Marinara",
  ALFREDO = "Alfredo",
  BBQ = "Barbecue",
}

export interface Pizza {
  size: Size
  sauce?: Sauce
  toppings?: Topping[]
}
