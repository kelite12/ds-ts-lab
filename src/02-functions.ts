import { Friend, Colleague, EmailContact } from './myTypes';
import { friends, colleagues } from "./01-basics";

// Function to increase a friend's age by 1 and return a string
function older(f: Friend): string {
    f.age += 1;
    return `${f.name} is now ${f.age}`;
}

console.log(older(friends[0]));

// Function to increase all friends' ages by 1 and return an array of strings
function allOlder(friends: Friend[]): string[] {
    return friends.map(friend => older(friend));
}

console.log(allOlder(friends));

// Find the colleague with the highest extension number
function highestExtension(cs: Colleague[]): Colleague {
    const result = cs.sort(
        (c1, c2) => c1.contact.extension - c2.contact.extension
    );
    return result[cs.length - 1];
}

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

addColleague(colleagues.current, "Sheild O Connell", "HR", "soc@here.com");
console.log(colleagues.current.filter((c) => c.name === "Sheild O Connell"));

// Function to sort colleagues and return only name and email
function sortColleagues(
    colleagues: Colleague[],
    sorter: (c1: Colleague, c2: Colleague) => number
): EmailContact[] {
    const sorted = colleagues.sort(sorter);
    const result: EmailContact[] = sorted.map((ce) => ({
        name: ce.name,
        email: ce.contact.email,
    }));
    return result;
}

console.log(sortColleagues(colleagues.current, (a, b) => a.contact.extension - b.contact.extension));
console.log(sortColleagues(colleagues.current, (a, b) => a.name.length - b.name.length));

// Function to find friends based on a condition
function findFriends(
    friends: Friend[],
    condition: (friend: Friend) => boolean
): string[] {
    return friends.filter(condition).map(friend => friend.name);
}

console.log(findFriends(friends, (friend) => friend.name.startsWith('Pa')));
console.log(findFriends(friends, (friend) => friend.age < 35));