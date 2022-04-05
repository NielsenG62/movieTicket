```javascript
Describe Order()

Test: "Creates an empty Order Object"
Code: const order = new Order()


Describe Ticket()

Test: "Creates a Ticket Object"
Code: const ticket = new Ticket("The Other Guys", 12, 25)
console.log(ticket)
Expected Output: {movie: "The Other Guys", time: 12 , age: 25}

Describe Ticket.prototype.getPrice()

Test: "Get the price of a ticket object"
Code: const ticket = new Ticket("The Other Guys", 12, 25)
ticket.getPrice()
console.log(ticket.cost)

Describe: Ticket.prototype.isNewMovie()

Test: "It should increase the price if the movie is on the new movie list"
Code: const ticket = new Ticket("Dog", 12, 25)
      ticket.getPrice()
Expected Output:


ticket{movie: , time: , age:,}
```
