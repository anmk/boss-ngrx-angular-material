import { DISH } from "./dish.model";

export const SAMPLE_ORDERS = [
    {
      id: 1,
      customerName: 'Emma',
      chooseDishes: [DISH.NEAPOLITANA_PIZZA, DISH.BIANKA_PIZZA, DISH.DOLMADES, DISH.GYROS],
      delivered: true,
      paid: true,
      comment: 'Request to add double garlic sauce to the gyros.'
    },
    {
      id: 2,
      customerName: 'William',
      chooseDishes: [DISH.BIANKA_PIZZA, DISH.DOLMADES, DISH.STRAWBERRY_SMOOTHIE, DISH.CARROT_JUICE],
      delivered: true,
      paid: true,
      comment: ''
    },
    {
      id: 3,
      customerName: 'Sophia',
      chooseDishes: [DISH.CAPRESE_PIZZA, DISH.ORANGE_JUICE],
      delivered: false,
      paid: true,
      comment: 'The client asks for quick preparation.'
    },
    {
      id: 4,
      customerName: 'Oliver',
      chooseDishes: [DISH.MOUSSAKA, DISH.BELLS_OFFICIAL_HAZY_IPA],
      delivered: true,
      paid: false,
      comment: ''
    },
    {
      id: 5,
      customerName: 'Charlotte',
      chooseDishes: [DISH.BIFTEKI, DISH.RIOJA_SIGLO],
      delivered: false,
      paid: false,
      comment: 'The client asks not to add garlic to the bifteki'
    },
  ]