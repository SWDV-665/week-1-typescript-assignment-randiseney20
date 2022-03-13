class Grocery {
    name: string;
    constructor(
      public listOwner: string,
      public lists: (string | number) []
    ) {
      this.name = listOwner + " " + lists;
    }
  }
   
  interface GroceryList {
    listOwner: string;   
    lists: (string | number) [];
  }
   
  function grocery(list: GroceryList) {
    return "This grocery list belongs to " + list.listOwner + " and includes the following list Items: "+ list.lists.toString()
  }
   
  let list1 = new Grocery("Randi", ['Apple', 2, 'Orange', 3, 'Banana', 1]);
 
   
  document.body.textContent = grocery(list1);
  