
var convertTemperature = function(celsius) {
    return [celsius + 273.15, celsius * 1.80 + 32.00]
};

const celsius = 122.11
console.log(convertTemperature(celsius))