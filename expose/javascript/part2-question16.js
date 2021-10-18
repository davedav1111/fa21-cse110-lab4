let statistics = { 
    redCars: 21,
    blueCars: 45,
    greenCars: 12,
    raceCars: 5, 
    blackCars: 40,
    rareCars: 2
}; 
for (const name in statistics) {
    if (name[0] === 'r' || statistics[name] % 2 === 1) {
        console.log(statistics[name]);
    }
}
