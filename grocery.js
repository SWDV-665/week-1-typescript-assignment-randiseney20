var Grocery = /** @class */ (function () {
    function Grocery(listOwner, lists) {
        this.listOwner = listOwner;
        this.lists = lists;
        this.name = listOwner + " " + lists;
    }
    return Grocery;
}());
function grocery(list) {
    return "This grocery list belongs to " + list.listOwner + " and includes the following list Items: " + list.lists.toString();
}
var list1 = new Grocery("Randi", ['Apple', 2, 'Orange', 3, 'Banana', 1]);
document.body.textContent = grocery(list1);
