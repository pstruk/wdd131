// sorting.js
const hikes = [
    {
      name: "Bechler Falls",
      stub: "bechler_falls",
      imgSrc:
        "https://wdd131.netlify.app/examples/hikes/images/bechler-falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      tags: ["Easy", "Yellowstone", "Waterfall"],
      description:
        "Beautiful short hike in Yellowstone along the Bechler river to Bechler Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.",
      trailhead: [44.14457, -110.99781]
    },
    {
      name: "Teton Canyon",
      stub: "teton_canyon",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/teton-canyon.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "3 miles",
      tags: ["Easy", "Tetons"],
      description: "Beautiful short (or long) hike through Teton Canyon.",
      directions:
        "Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.",
      trailhead: [43.75567, -110.91521]
    },
    {
      name: "Denanda Falls",
      stub: "denanda_falls",
      imgSrc:
        "https://wdd131.netlify.app/examples/hikes/images/denanda-falls.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "7 miles",
      tags: ["Moderate", "Yellowstone", "Waterfall"],
      description: "Beautiful hike through Bechler meadows to Denanda Falls",
      directions:
        "Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road. Drive to until you see the sign for Bechler Meadows on the left. Turn there. There is a parking area at the trailhead.",
      trailhead: [44.14974, -111.04564]
    },
    {
      name: "Coffee Pot Rapids",
      stub: "coffee_pot",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/coffee-pot.jpg",
      imgAlt: "Image of Bechler Falls",
      distance: "2.2 miles",
      tags: ["Easy"],
      description:
        "Beautiful hike along the Henry's Fork of the Snake River to a set of rapids.",
      directions:
        "Take Highway 20 north to Island Park. Continue almost to Mack's in. From Highway 20, turn west on Flatrock Road for 1 mile then turn off on Coffee Pot Road and travel one-half mile to the campground entrance road. There is a parking lot right outside the campground.",
      trailhead: [44.49035, -111.36619]
    },
    {
      name: "Menan Butte",
      stub: "menan_butte",
      imgSrc: "https://wdd131.netlify.app/examples/hikes/images/menan-butte.jpg",
      imgAlt: "Image of Menan Butte",
      distance: "3.4 miles",
      tags: ["Moderate", "View"],
      description:
        "A steep climb to one of the largest volcanic tuff cones in the world. 3.4 miles is the full loop around the crater, can be shortened.",
      directions:
        "Take Highway 33 West out of Rexburg for about 8 miles. Turn left onto E Butte Road, the right onto Twin Butte road after about a mile. Follow that road for about 3 miles. You will see the parking lot/trailhead on the left.",
      trailhead: [43.78555, -111.98996]
    }
  ];
   const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];

  //Activity 1:
   //simple ascending sort, capital are first: using sort()
   const simpleSort = simpleList.sort();
   console.log(simpleSort);

  //same ascending sort as above, but using a compare function.
  //  function compareFunction(a,b) {
  //   if (a < b) {
  //     return -1;
  //   } else if (a > b) {
  //     return 1;
  //   }
  //  // a must be equal to b
  //  return 0;
  // }
  // const Sort2 = simpleList.sort(compareFunction);
  // console.log(Sort2);

  // //compare function sort, but now in descending order (reverse order):
  // function compareFunction(a,b) {
  //   if (a > b) {
  //     return -1;
  //   } else if (a < b) {
  //     return 1;
  //   }
  //  // a must be equal to b
  //  return 0;
  // }
  // const anotherSort = simpleList.sort(compareFunction);
  // console.log(anotherSort);  
  
  //A sort that disregards the capital "B" in Banana and sorts it as if it's a lowercase "b":
  //The capital B is not physically changed in the array, it just moves its position.
  function compareFunction(a, b) {
    if (a.toLowerCase() < b.toLowerCase()) {
      return -1;
    } else if (a.toLowerCase() > b.toLowerCase()) {
      return 1;
    }
   // a must be equal to b
   return 0;
  }
  const sort3 = simpleList.sort(compareFunction);
  console.log(sort3);

  //Activity: 2 
  // Remember: Sort modifies the original list, maybe do it on a copy of the list)
  // Filter does NOT modify the original array. It creates a new one.
  // function searchList(list, query) {
  //   function stringContains(item) {
  //     //If query is found inside the item, return true 
  //     //Option 1:
  //     // const lower = item.toLowerCase();
  //     // return lower.includes(query.toLowerCase());
  //     //Option 2: chain them
  //     return item.toLowerCase().includes(query.toLowerCase());
  //   }
  //   return list.filter(stringContains);
  // }
  // console.log(searchList(simpleList, "b"));
  // console.log(searchList(simpleList, "an"));
  

  // Activity 3: Use above searchList(), and fix it to take objects instead of strings  

  function searchList(list, query) {
    function stringContains(item) {
      //If query is found inside the item, return true 
      //Option 2: item is now an object from the "hikes" array, not a string
      // console.log(item);
      //item is an object and can't be used with toLowerCase(),
      //however, its properties, such as name, which is a string, can
      return (
        item.name.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        //can't use includes on an array of strings, just a string.
        //find() wants a predicate i.e. function, so we'll use an arrow function to get a tag(which is now a string)
        item.tags.find((tag) => tag.toLowerCase().includes(query.toLowerCase())) 
    );
    }
    //filter is going to call this stringContains function, once for every item in this list  
    return list.filter(stringContains);
  }
  const result = searchList(hikes, "al");
  console.log(result);
  console.log(searchList(hikes, "moderate"));
  console.log(searchList(hikes, "yellowstone"));

//Notes: Sort() changes the original array, but filter() returns a new array, the original one is unchanged.
// sort() illustrates the simplest type of sort: strings ascending. Capitals get sorted before anything else. The sort is case sensitive.
// To do anything more complex we need to provide a compareFunction. MDN gives the following definition for that function:

// compareFunction(a, b)
// return value         sort order
//    > 0	             sort a after b, e.g. [b, a]
//    < 0	             sort a before b, e.g. [a, b]
//    === 0             keep original order of a and

// Another way to sort our list in ascending order would be to provide this compare function:
// However, to sort in descending order we would reverse the < sign to > sign, or we could reverse the -1, 1, locations

// function compareFunction(a,b) {
//   if (a < b) {
//     return -1;
//   } else if (a > b) {
//     return 1;
//   }
//  // a must be equal to b
//  return 0;
// }
// const anotherSort = simpleList.sort(compareFunction);
