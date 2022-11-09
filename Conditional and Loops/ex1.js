/* Function init */

function calculateSalary(position) {

    const ceoSalary = "€127,977 per year";
    const managerSalary = "€42,309 per year";
    const ctoSalary = "€115,041 per year";
    const developerSalary = "€68,645 per year";
    const otherSalary = "€78,778 per year";

    switch(position) {
        case 'ceo':
            console.log(ceoSalary);
            break;
        
        case 'manager':
            console.log(managerSalary);
            break;

        case 'cto':
            console.log(ctoSalary);
            break;

        case 'developer':
            console.log(developerSalary);
            break;

        case 'other':
            console.log(otherSalary);
            break;
        
        default:
            console.log("Sorry, we are not able to find any jobs with that name.");

            return position;
    }
}

/* Function call */ 

calculateSalary("");
