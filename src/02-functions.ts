import { Friend, Colleague } from './myTypes';
import { friends, colleagues } from "./01-basics";

// Function to increase a friend's age by 1 and return a string
function older(f: Friend): string {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}

// Function to increase all friends' ages by 1 and return an array of strings
function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => older(friend));
}

// Test the allOlder function
console.log(allOlder(friends)); // Output: [ 'Paul Fleming is now 26', 'Jane Costello is now 32' ]

// Find the colleague with the highest extension number
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}

// Test the highestExtension function
console.log(highestExtension(colleagues.current));

// Function to add a colleague with the highest extension number + 1
function addColleague(
    colleagues: Colleague[],
    name: string,
    department: string,
    email: string
): void {
    const highest = highestExtension(colleagues);
    const newColleague: Colleague = {
        name,
        department,
        contact: {
            email,
            extension: highest.contact.extension + 1,
        },
    };
    colleagues.push(newColleague);
}

// Test the addColleague function
addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));