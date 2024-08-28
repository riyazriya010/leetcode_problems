var lemonadeChange = function(bills) {
    let change = []; 

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            change.push(5);
        } 
        else if (bills[i] === 10) {
            let index = change.indexOf(5);
            if (index >= 0) {
                change.splice(index, 1);
                change.push(10);
            } else {
                return false;
            }
        } 
        else if (bills[i] === 20) {
            let index10 = change.indexOf(10);
            let index5 = change.indexOf(5);
            
            if (index10 >= 0 && index5 >= 0) {
                change.splice(index10, 1);
                change.splice(index5, 1);
            } 
            else if (change.filter(bill => bill === 5).length >= 3) {
                change.splice(change.indexOf(5), 1);        
                change.splice(change.indexOf(5), 1); 
                change.splice(change.indexOf(5), 1);
            } 
            else {
                return false; 
            }
        }
    }
    return true;
};

const bills = [5, 5, 5, 10, 20];
console.log(lemonadeChange(bills));
