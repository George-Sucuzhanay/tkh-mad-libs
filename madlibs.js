function madlibs () {
    let storyOne = ""
    let storyTwo = ""
    let player = prompt("Would you like Story One or Story Two?")
    if (player == "storyOne") {
      let adj = prompt("type an adjective")
      let place = prompt("type a general place")
      let vehicle = prompt("type a vehicle name (plural)")
      let game = prompt("type the name of a game")
      let noun = prompt("type a plural noun")
      let verb = prompt("type an 'ing' verb")
      let verbTwo = prompt("type another 'ing' verb")
      let food = prompt("type a food name (plural)")
      let sport = prompt("type the name of a sport")
      let verbThree = prompt("type another 'ing' verb")
      let emotion = prompt("type an emotion")
      let num = prompt("type a number")
      storyOne = alert ("A vacation is when you take a trip to some " + adj + " place near an amazing " + place + ". A good vacation place is one where you can ride " + vehicle + " or play " + game + " or go hunting for " + noun + ". I like to spend my time " + verb + " or " + verbTwo + ". When parents go on a vacation, they spend their time eating three " + food + " a day. Usually, fathers play " + sport + ", and mothers spend their time " + verbThree + ". Adults need vacations more than kids because adults are always very " + emotion + " because they have to work " + num + " hours every day all year just to afford their vacations!")
    }
    else if (player == "storyTwo") {
      let adj = prompt("type an adjective");
      let place = prompt("type a famous place");
      let noun = prompt("type a plural noun");
      let adjTwo = prompt("type another adjective");
      let food = prompt("type a food (plural)");
      let emotion = prompt("type an emotion");
      let verb = prompt("type an 'ing' verb");
      let placeTwo = prompt("type a common place");
      let adjThree = prompt("type another adjective");
      let nounTwo = prompt("type a noun");
      let adjFour = prompt("type another adjective");
      let nounThree = prompt("type another noun");
      let family = prompt("type a family member");
      let adjFive = prompt("type another adjective");
      storyTwo = alert("Today we took a " + adj + " fieldtrip to" + place + ". They're famous for making " + noun+ " and for cooking " + adjTwo + food + ". Eating all that food made me feel " + emotion + ". Next we enjoyed the local tradition of "+ verb + " in the middle of the " + placeTwo+ "! Finally, we went shopping for souvenirs. I bought a  " + adjThree + nounTwo + " for myself, and a "+ adjFour + nounTwo + " for my favorite " + family + ". I'll definitely never forget this " + adjFive + " trip!");
  
    }
}
madlibs()