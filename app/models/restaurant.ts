export interface Restaurant {
    id: string;
    name: string;
    image: string;
    rating: number;
    deliveryTime: string;
    deliveryFee: string;
    cuisine: string;
}

export const restaurants: Restaurant[] = [
    {
        id: '1',
        name: 'Burger Palace',
        image: 'https://raw.githubusercontent.com/NativeScript/sample-assets/main/burger.jpg',
        rating: 4.5,
        deliveryTime: '20-30 min',
        deliveryFee: '$2.99',
        cuisine: 'American'
    },
    {
        id: '2',
        name: 'Pizza Express',
        image: 'https://raw.githubusercontent.com/NativeScript/sample-assets/main/pizza.jpg',
        rating: 4.7,
        deliveryTime: '25-35 min',
        deliveryFee: '$1.99',
        cuisine: 'Italian'
    },
    {
        id: '3',
        name: 'Sushi Master',
        image: 'https://raw.githubusercontent.com/NativeScript/sample-assets/main/sushi.jpg',
        rating: 4.8,
        deliveryTime: '30-40 min',
        deliveryFee: '$3.99',
        cuisine: 'Japanese'
    }
];