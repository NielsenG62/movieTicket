function Order() {
  this.tickets = {};
  this.currentId = 0;
}

Order.prototype.addTicket = function (ticket) {
  ticket.id = this.assignId();
  this.tickets[ticket.id] = ticket;
};

Order.prototype.assignId = function () {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.findTicket = function (id) {
  if (this.tickets[id] != undefined) {
    return this.tickets[id];
  }
  return false;
};

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.getPrice = function () {
  let price = 10;
  if (this.time < 12) {
    price -= 2;
  } else if (this.time >= 17) {
    price += 2;
  }
  if (this.age >= 65 || this.age <= 5) {
    price -= 2;
  }
  if (this.isNewMovie() === false) {
    price -= 2;
  }
  this.cost = price;
};

Ticket.prototype.isNewMovie = function () {
  const newMovies = ["Ambulance", "Sonic The Hedgehog 2", "Dog"];
  for (let i = 0; i < newMovies.length; i++) {
    if (newMovies[i] === this.movie) {
      console.log("true");
      return true;
    }
  }
  return false;
};

// UI Logic
function buildUI(order) {
  let ticketList = $("#results");
  let html = "";
  Object.keys(order.tickets).forEach(function (key) {
    const ticket = order.findTicket(key);
    if (ticket.time > 12) {
      ticket.time -= 12;
      ticket.time += "pm";
    }
    if (ticket.age >= 65) {
      ticket.age = "Senior";
    } else if (ticket.age <= 5) {
      ticket.age = "Child";
    }
    html +=
      "<li id=" +
      ticket.id +
      "> <p> Moive: " +
      ticket.movie +
      "</p> <p>Age: " +
      ticket.age +
      "</p> <p>Time: " +
      ticket.time +
      "</p> <p> Cost: $" +
      ticket.cost +
      "</p></li>";
  });
  ticketList.html(html);
}

let order = new Order();
$(document).ready(function () {
  $("#input-form").submit(function (event) {
    event.preventDefault();
    const age = $("#age-input").val();
    const movie = $("#movie-input").val();
    const time = $("#time-input").val();
    const ticket = new Ticket(movie, time, age);
    ticket.getPrice();
    order.addTicket(ticket);
    buildUI(order);
  });
});
