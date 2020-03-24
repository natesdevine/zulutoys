const fs = require('fs');
    let read_json_file = () => {
        let file = './data/Toysjson.json';
        return fs.readFileSync(file);
    }

    let read_json_file_location = () => {
        let file = './data/location.json';
        return fs.readFileSync(file);
    }     
    exports.getTax = function(location) {
        let tax;
        let json = JSON.parse(read_json_file_location());
        for (let x = 0; x < json.length; x++) {
            if (json[x].name===location) {
                tax=json[x].tax_rate;
            }
        }
        return tax;
    };

    exports.getPrice = function(location) {
        let price;
        let json = JSON.parse(read_json_file());
        let box_of_prices = [];
        let tax = exports.getTax(location);
        for (let x = 0; x < json.length; x++) {
            price = (json[x].price)*(tax+1)
            box_of_prices.push(price);
        }
        return box_of_prices;
    };