import { friends, colleagues } from './01-basics';
import { Friend, Colleague } from './myTypes';

// Generic function to find the first match in an array
function findMatch<T>(data: T[], criteria: (d: T) => boolean): T | undefined {
    return data.find(criteria);
}

// Test findMatch function
console.log(findMatch<Friend>(friends, (f) => f.name.startsWith('Jane')));
console.log(findMatch<Colleague>(colleagues.current, (c) => c.department === 'Finance'));

// Generic function to sort an array
function sort<T>(data: T[], compareFn: (a: T, b: T) => number): T[] {
    return [...data].sort(compareFn); // Return a sorted copy of the array
}

// Test sort function
// Sort friends by age
console.log(sort<Friend>(friends, (a, b) => a.age - b.age));
// Sort colleagues by extension number
console.log(
    sort<Colleague>(
        colleagues.current,
        (a, b) => a.contact.extension - b.contact.extension
    )
);