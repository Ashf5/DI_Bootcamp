
function getCarHonda(arr) {
    let carIndex = arr.find(item => item.car_make === 'Honda');
    return `This is a ${carIndex.car_make} ${carIndex.car_model} from ${carIndex.car_year}`
    
}

const inventory = [
  { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
  { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
  { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
  { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
  { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
let car = getCarHonda(inventory);
console.log(car);


function sortCarInventoryByYear(arr) {
    arr = arr.sort((item1, item2) => item1.car_year - item2.car_year);
}

sortCarInventoryByYear(inventory);
console.log(inventory);
