export interface MenuItem {
    id: string;
    restaurantId: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

export const menuItems: MenuItem[] = [
    {
        id: '1',
        restaurantId: '1',
        name: 'Classic Burger',
        description: 'Juicy beef patty with lettuce, tomato, and special sauce',
        price: 12.99,
        image: 'https://raw.githubusercontent.com/NativeScript/sample-assets/main/classic-burger.jpg'
    },
    {
        id: '2',
        restaurantId: '1',
        name: 'Cheese Burger',
        description: 'Classic burger with melted cheddar cheese',
        price: 13.99,
        image: 'https://raw.githubusercontent.com/NativeScript/sample-assets/main/cheese-burger.jpg'
    }
];