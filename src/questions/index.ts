/*
Q1) Write a javascript function that finds the duplicate items in any given array:
*/
export const findDuplicates = (arr: unknown[]): unknown[] => {
    if (!Array.isArray(arr)) return [];
    const duplicates = arr.filter((item, index) => arr.indexOf(item) !== index);
    return duplicates.filter(
        (item, index) => duplicates.indexOf(item) === index
    );
};

/*
Q2) Write an async javascript function that writes every item in any given array with 1, 2,
4, 8, … seconds apart. ex: for [“a”,” b, “c, “d”], “a” is printed in 1 sec, “b” is printed in 2
seconds, “c” is printed in 4 seconds, ...
*/
export const timeArray = (arr: unknown[]): void => {
    if (!Array.isArray(arr)) return;
    let interval = 1;

    arr.forEach(item => {
        setTimeout(() => console.log(item), interval * 1000);
        interval *= 2;
    });
};

/*
Q3) Write the necessary React code for generating the below figure (using flex).
(Answer is inside /src/App.tsx)
*/

/*
Q4) Write an efficient method that tells us whether or not an input string brackets ("{", "}",
"(", ")", "[", "]") opened and closed properly. Example: “{[]}” => true, “{(])}” => false,
“{([)]}” => false
*/

export const hasValidBracketPair = (text: string): boolean => {
    if (!text) return false;
    let t = text;
    let validator = '';
    for (
        ;
        // eslint-disable-next-line no-cond-assign
        (validator = t.replace(/\[\]|\{\}|\(\)/, '')) !== t;
        t = validator
    );
    return !validator;
};

/*
5) A building has 100 floors. One of the floors is the highest floor an egg can be dropped
from without breaking. If an egg is dropped from above that floor, it will break. If it is
dropped from that floor or below, it will be completely undamaged and you can drop theegg again.

Given two eggs, find the highest floor an egg can be dropped from without
breaking, with as few drops as possible in the worst-case scenario.
*/

type HighestFloorResultType = {
    floor: number;
    guesses: number;
};

export const findHighestFloor = (
    maxEggs: number,
    totalFloors: number
): HighestFloorResultType | boolean => {
    if (maxEggs < 1) {
        console.log('maxEggs must be greater than 0');
        return false;
    }
    if (totalFloors <= 1) {
        console.log('totalFloors must be greater than 1');
        return false;
    }

    let totalGuesses = 0;
    let lowestFloor = 1;
    let highestFloor = totalFloors;
    let foundSecretFloor = 0;
    let totalEggs = maxEggs;

    const secretFloor = Math.floor(
        lowestFloor + 1 + Math.random() * (totalFloors - lowestFloor + 1)
    );

    // Try to find the secret floor by using "Divide and Conquer"
    while (totalEggs > 1 && !foundSecretFloor) {
        const guess =
            lowestFloor + Math.floor((highestFloor - lowestFloor) / 2);

        totalGuesses++;

        if (guess > secretFloor) {
            totalEggs--;
            highestFloor = guess;
        } else {
            lowestFloor = guess;
        }

        if (lowestFloor + 1 === highestFloor) foundSecretFloor = lowestFloor;
    }

    // If there's only one egg left, must test all floors one by one
    if (!foundSecretFloor) {
        for (let i = lowestFloor + 1; i <= secretFloor + 1; i++) {
            totalGuesses++;
            if (i === secretFloor + 1) {
                foundSecretFloor = i - 1;
            }
        }
    }

    return {
        floor: foundSecretFloor,
        guesses: totalGuesses,
    };
};

/*
Q7) Think that you have an unlimited number of carrots, but a limited number of carrot
types. Also, you have one bag that can hold a limited weight. Each type of carrot has a
weight and a price. Write a function that takes carrotTypes and capacity and return the
maximum value the bag can hold.
*/

type CarrotType = {
    price: number;
    kg: number;
};

type BagResultType = {
    [key: number]: number;
};

type BagType = {
    carrotTypesQuantity: BagResultType;
    totalValue: number;
};

export const getMaxValue = (
    carrotTypes: CarrotType[],
    capacity: number
): BagType => {
    const pricePerKg: number[] = [];
    const result: BagResultType = {} as BagResultType;
    let remainingCapacity = capacity;
    let totalValue = 0;

    carrotTypes.forEach(type => pricePerKg.push(type.price / type.kg));

    const bestPricePerKgIndex = pricePerKg
        .map((item, index) => ({ item, index }))
        .sort((x, y) => {
            if (x.item < y.item) return 1;
            return x.item === y.item ? 0 : -1;
        })
        .map(e => e.index);

    bestPricePerKgIndex.forEach(position => {
        if (carrotTypes[position].kg <= remainingCapacity) {
            result[position] = Math.floor(
                remainingCapacity / carrotTypes[position].kg
            );
            remainingCapacity %= carrotTypes[position].kg;
        } else {
            result[position] = 0;
        }
    });

    Object.values(Object.fromEntries(Object.entries(result).sort())).forEach(
        (amount, index) => {
            totalValue += amount * carrotTypes[index].price;
            return totalValue;
        }
    );

    return {
        carrotTypesQuantity: result,
        totalValue,
    };
};
