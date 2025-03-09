import { friends, colleagues } from "./01-basics";
import { Friend, Colleague, SecureFriendContact, FriendPartial, EventPass } from "./myTypes";

// Function to update a friend's properties
function updateFriend(friend: Friend, updates: FriendPartial): Friend {
  return { ...friend, ...updates };
}

console.log(updateFriend(friends[0], {
  phone: '08712345',
  dob: new Date("1998-10-22")
}));

// Function to securely find friends and return a read-only array
function secureFindFriends(
  friends: Friend[],
  criteria: (f: Friend) => boolean
): SecureFriendContact[] {
  const matches = friends.filter(criteria);
  return matches.map((f) => {
    const secure: SecureFriendContact = {
      name: f.name,
      phone: f.phone,
    };
    return secure;
  });
}

let result = secureFindFriends(
  friends,
  (f: Friend) => f.age < 30
);

console.log(result);

// Attempting to modify a read-only property (will cause a TypeScript error)
// result[0].phone = '08654321'; // Uncommenting this line will result in a compiler error

// Function to generate an event pass for a colleague
function generateEventPass(colleague: Colleague): EventPass {
  const passCode = Math.round(Math.random() * (1000 - 1) + 1);
  return {
    name: colleague.name,
    department: colleague.department,
    passCode: passCode,
  };
}

console.log(generateEventPass(colleagues.current[0]));

// Function to find the intersection of friends and colleagues based on name
type IntersectionType = {
  name: string;
  age: number;
  contact: {
    email: string;
    extension: number;
  };
};

function intersection(
  friends: Friend[],
  colleagues: Colleague[]
): IntersectionType[] {
  let result: IntersectionType[] = [];
  friends.reduce((res, friend) => {
    const colleague = colleagues.find((col) => col.name === friend.name);
    if (colleague) {
      // Colleague is also a Friend
      const intersectionEntry: IntersectionType = {
        name: friend.name,
        age: friend.age,
        contact: {
          email: colleague.contact.email,
          extension: colleague.contact.extension,
        },
      };
      res.push(intersectionEntry);
    }
    return res;
  }, result);
  return result;
}

console.log(intersection(friends, colleagues.current));