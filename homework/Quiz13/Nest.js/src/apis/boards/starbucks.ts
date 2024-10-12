import { CreateStarbucksInput } from './dto/create-starbucks.input';
import { Starbucks } from './entities/starbucks.entity';
export const starbucksMenu = (): CreateStarbucksInput[] => {
    const starbucksMenu: Starbucks[] = [
        {
            name: '아메리카노',
            price: 1000,
            kcal: 1500,
            fat: 10,
            protein: 20,
            sodium: 10,
            sugar: 40,
            caffeine: 10,
        },
        {
            name: '카페라떼',
            price: 1000,
            kcal: 1500,
            fat: 10,
            protein: 20,
            sodium: 10,
            sugar: 40,
            caffeine: 10,
        },
        {
            name: '에스프레소',
            price: 1000,
            kcal: 1500,
            fat: 10,
            protein: 20,
            sodium: 10,
            sugar: 40,
            caffeine: 10,
        },
        {
            name: '고구마라떼',
            price: 1000,
            kcal: 1500,
            fat: 10,
            protein: 20,
            sodium: 10,
            sugar: 40,
            caffeine: 10,
        },
        {
            name: '아샷추',
            price: 1000,
            kcal: 1500,
            fat: 10,
            protein: 20,
            sodium: 10,
            sugar: 40,
            caffeine: 10,
        },
    ];
    return starbucksMenu;
};
