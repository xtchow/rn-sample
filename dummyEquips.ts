
export type Equipment = {
  id: string;
  // TODO: shouldn't the names be unique?
  name: string;
  category: string;
  price: number;
  availability: "In Stock" | "Out of Stock" | "Limited Stock";
  description: string;

  count: number;
};

export const dummyEquip: Equipment[] = [
  {
    id: "1",
    name: "Excavator",
    category: "Heavy Machinery",
    price: 75000,
    availability: "In Stock",
    description: "A large machine used for digging and moving earth.",
    count: 0,
  },
  {
    id: "2",
    name: "Concrete Mixer",
    category: "Construction Tools",
    price: 12000,
    availability: "Out of Stock",
    description: "A machine that mixes cement, aggregates, and water to form concrete.",
    count: 0,
  },
  {
    id: "3",
    name: "Bulldozer",
    category: "Heavy Machinery",
    price: 85000,
    availability: "In Stock",
    description: "A powerful machine for pushing large quantities of soil, sand, and rubble.",
    count: 0,
  },
  {
    id: "4",
    name: "Scaffolding",
    category: "Construction Materials",
    price: 5000,
    availability: "In Stock",
    description: "Temporary structure used to support workers and materials during construction.",
    count: 0,
  },
  {
    id: "5",
    name: "Crane",
    category: "Heavy Machinery",
    price: 150000,
    availability: "Limited Stock",
    description: "A tall machine used for lifting and moving heavy objects.",
    count: 0,
  },
  {
    id: "6",
    name: "Jackhammer",
    category: "Construction Tools",
    price: 3000,
    availability: "In Stock",
    description: "A portable drill used for breaking up concrete and asphalt.",
    count: 0,
  },
  {
    id: "7",
    name: "Wheelbarrow",
    category: "Construction Tools",
    price: 200,
    availability: "In Stock",
    description: "A small cart with a single wheel used for carrying loads.",
    count: 0,
  },
  {
    id: "8",
    name: "Ladder",
    category: "Construction Tools",
    price: 150,
    availability: "Out of Stock",
    description: "A portable device used for climbing up or down.",
    count: 0,
  },
  {
    id: "9",
    name: "Safety Helmet",
    category: "Safety Equipment",
    price: 50,
    availability: "In Stock",
    description: "Protective headgear to ensure safety on construction sites.",
    count: 0,
  },
  {
    id: "10",
    name: "Safety Vest",
    category: "Safety Equipment",
    price: 25,
    availability: "In Stock",
    description: "High-visibility clothing to ensure worker safety.",
    count: 0,
  },
  {
    id: "11",
    name: "Backhoe Loader",
    category: "Heavy Machinery",
    price: 55000,
    availability: "In Stock",
    description: "A versatile machine used for digging and loading.",
    count: 0,
  },
  {
    id: "12",
    name: "Dump Truck",
    category: "Heavy Machinery",
    price: 90000,
    availability: "In Stock",
    description: "A truck used for transporting loose materials.",
    count: 0,
  },
  {
    id: "13",
    name: "Forklift",
    category: "Heavy Machinery",
    price: 30000,
    availability: "In Stock",
    description: "A vehicle with a pronged device for lifting and carrying loads.",
    count: 0,
  },
  {
    id: "14",
    name: "Compactor",
    category: "Construction Tools",
    price: 7000,
    availability: "In Stock",
    description: "A machine used for compacting soil, gravel, and asphalt.",
    count: 0,
  },
  {
    id: "15",
    name: "Air Compressor",
    category: "Construction Tools",
    price: 2500,
    availability: "In Stock",
    description: "A device that converts power into potential energy stored in compressed air.",
    count: 0,
  },
  {
    id: "16",
    name: "Concrete Pump",
    category: "Construction Tools",
    price: 40000,
    availability: "In Stock",
    description: "A machine used for transferring liquid concrete by pumping.",
    count: 0,
  },
  {
    id: "17",
    name: "Electric Generator",
    category: "Construction Tools",
    price: 1500,
    availability: "In Stock",
    description: "A device that converts mechanical energy to electrical energy.",
    count: 0,
  },
  {
    id: "18",
    name: "Nail Gun",
    category: "Construction Tools",
    price: 300,
    availability: "In Stock",
    description: "A tool used to drive nails into wood or other materials.",
    count: 0,
  },
  {
    id: "19",
    name: "Paint Sprayer",
    category: "Construction Tools",
    price: 500,
    availability: "In Stock",
    description: "A device used to spray paint on surfaces.",
    count: 0,
  },
  {
    id: "20",
    name: "Power Drill",
    category: "Construction Tools",
    price: 150,
    availability: "In Stock",
    description: "A tool fitted with a cutting tool attachment for drilling holes.",
    count: 0,
  },

];