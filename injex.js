var cards = ['Jack', 8, 2, 6, 'King', 5, 3, 'King', 'Queen', 'Queen', 'King']
<!-- Requried Output = [2,3,5,6,8,'Jack','Queen','King']
cards.sort();
var newArr = []
var king = [];
for(var i = 0; i < cards.length; i++){
    if(cards[i] != "King" ){
        newArr.push(cards[i])
        continue;
    }
    if(cards[i] == "King" ){
        king.push(cards[i]);
    }
}
var result = [...newArr,...king];
console.log(result)


