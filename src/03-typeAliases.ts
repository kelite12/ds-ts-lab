import {
    ColleagueV2,
    Friend,
    Buddy,
    BuddyList,
    Administrator,
  } from "./myTypes";
  import { friends } from "./01-basics";
  
  // Copy colleague objects from 01-basics.ts and change their type to ColleagueV2
  const colleague1: ColleagueV2 = {
    name: "Ralph Graham",
    department: "Engineering",
    contact: {
      email: "rgraham@company.com",
      extension: 121,
    },
  };
  
  const colleague2: ColleagueV2 = {
    name: "Patti Burke",
    department: "Finance",
    contact: {
      email: "pburke@company.com",
      extension: 132,
    },
  };
  
  const colleague3: ColleagueV2 = {
    name: "Dean Sullivan",
    department: "HR",
    contact: {
      email: "dos@company.com",
      extension: 125,
    },
  };
  
  // Function to create a BuddyList
  function makeBuddyList(
    name: string,
    buddies: Buddy[],
    admin?: Administrator
  ): BuddyList {
    return {
      name,
      members: buddies,
      administrator: admin,
    } as BuddyList; // Cast to BuddyList
  }
  
  // Tests for makeBuddyList
  const myFootballBuddies = makeBuddyList(
    "Football team",
    [colleague1, friends[0], colleague2],
    colleague1
  );
  
  const myBandBuddies = makeBuddyList(
    "Band name",
    [colleague1, friends[1]]
    // No administrator
  );
  
  console.log(myFootballBuddies);
  console.log(myBandBuddies);
  
  // Function to find a buddy's contact information
  function findBuddyContact(list: BuddyList, name: string): string | undefined {
    for (const buddy of list.members) {
      if (buddy.name === name) {
        if ("phone" in buddy) {
          return buddy.phone; // Friend
        } else {
          return buddy.contact.email; // ColleagueV2
        }
      }
    }
    return undefined;
  }
  
  // Test for findBuddyContact
  console.log("Contact buddy at: ", findBuddyContact(myFootballBuddies, "Ralph Graham"));
  
  // Function to get all friends from a BuddyList
  function getBuddyListFriends(list: BuddyList): Friend[] {
    return list.members.reduce((friendsArray, buddy) => {
      if ("phone" in buddy) {
        friendsArray.push(buddy); // Add Friend to the array
      }
      return friendsArray;
    }, [] as Friend[]);
  }
  
  // Test for getBuddyListFriends
  console.log("Friends in the list: ", getBuddyListFriends(myFootballBuddies));