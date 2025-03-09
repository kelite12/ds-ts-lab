// Define the Friend interface for type safety
interface Friend {
  name: string;
  phone: string;
  age: number;
}

// Define the Colleague interface for type safety
interface Colleague {
  name: string;
  department: string;
  contact: {
    email: string;
    extension: number;
  };
}

// Define the ColleagueHistory interface for type safety
interface ColleagueHistory {
  current: Colleague[];
  former: Colleague[];
}

// Define friend1 and friend2 with type Friend
const friend1: Friend = {
  name: "Paul Fleming",
  phone: "087-12345",
  age: 25,
};

const friend2: Friend = {
  name: "Jane Costello",
  phone: "086--12345",
  age: 31,
};

// Define the friends array with type Friend[]
const friends: Friend[] = [friend1, friend2];
console.log(friends[1]); // Logs the second friend

// -------------------

// Define colleague1, colleague2, colleague3 with type Colleague
const colleague1: Colleague = {
  name: "Ralph Graham",
  department: "Engineering",
  contact: {
    email: "rgraham@company.com",
    extension: 121,
  },
};

const colleague2: Colleague = {
  name: "Patti Burke",
  department: "Finance",
  contact: {
    email: "pburke@company.com",
    extension: 132,
  },
};

const colleague3: Colleague = {
  name: "Dean Sullivan",
  department: "HR",
  contact: {
    email: "dos@company.com",
    extension: 125,
  },
};

// Define colleagues with type ColleagueHistory
export const colleagues: ColleagueHistory = {
  current: [colleague1, colleague2, colleague3],
  former: [],
};

console.log(colleagues.current[0]); // Logs the first current colleague
