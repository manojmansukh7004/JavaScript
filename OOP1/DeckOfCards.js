var rl=require('readline-sync');
var card=require('./utility/DeckCard');
var deck=new card.DeckCard;

class DeckOfCards
{   game(){
        //create decks of Card 
        var cards=deck.deckOfCard();
        console.log(cards);
        
        //Number Of Cards.
        var noOfCards=cards.length;
        console.log(noOfCards);

        //Shuffle Card
        var ShuffleCards=deck.shuffleCard(noOfCards,cards);
        console.log(ShuffleCards);
      
        //Distribute the 9 cards to 4 Player & represent in 2D Array. 
        var players=rl.questionInt("enter the no of Players:");
        var cards=rl.questionInt("Enter the no Of cards distribute:")
        var distribute=deck.diustributeCard(players,cards,ShuffleCards);
        console.log(distribute);
    }     
}
    var play=new DeckOfCards();
    play.game(); 
