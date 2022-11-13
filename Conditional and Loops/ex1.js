function calculateSalary(position) {

    const ceoSalary = "€127,977 per year";
    const managerSalary = "€42,309 per year";
    const ctoSalary = "€115,041 per year";
    const developerSalary = "€68,645 per year";
    const otherSalary = "€78,778 per year";

    switch(position) {
        case 'ceo':
            return(ceoSalary)
        
        case 'manager':
            return(managerSalary)

        case 'cto':
            return(ctoSalary);

        case 'developer':
            return(developerSalary);

        case 'other':
            return(otherSalary);
        
        default:
            return("Sorry, we are not able to find any jobs with that name.");
    }
}

const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');

console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);
