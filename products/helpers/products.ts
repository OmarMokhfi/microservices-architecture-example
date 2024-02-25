const PRODUCTS = [
  {
    id: '1',
    user_id: '2',
    label: 'Product 1',
    price: 100,
  },
  {
    id: '2',
    user_id: '1',
    label: 'Product 2',
    price: 150,
  },
  {
    id: '3',
    user_id: '2',
    label: 'Product 3',
    price: 300,
  },
];

export const getUserProducts = (id: string) => {
  return PRODUCTS.filter((item) => item.user_id == id);
};
