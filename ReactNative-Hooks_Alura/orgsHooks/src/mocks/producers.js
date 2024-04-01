import imgGreen from '../screens/Home/assets/imgs/produtores/green.png';
import imgGrow from '../screens/Home/assets/imgs/produtores/grow.png';
import imgJennyJack from '../screens/Home/assets/imgs/produtores/jenny-jack.png';
import imgPotager from '../screens/Home/assets/imgs/produtores/potager.png';
import imgSalad from '../screens/Home/assets/imgs/produtores/salad.png';

const generateRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

const producers = {
    title: 'Producers',
    list: [
        {
            name: 'Green',
            img: imgGreen,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: 'Grow',
            img: imgGrow,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: 'Jenny Jack',
            img: imgJennyJack,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: 'Potager',
            img: imgPotager,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            name: 'Salad',
            img: imgSalad,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
    ],
};

export default producers;
