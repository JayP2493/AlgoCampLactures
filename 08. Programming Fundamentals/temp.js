function Events(dateOfEvents) {
    this.dateOfEvents = dateOfEvents;
}

Events.prototype.bookEvent = function () {
    console.log("Booking Event");
}

function Movie(movieName,movieDate) {
    Events.call(this, movieDate);
    this.movieName = movieName;
}

let abc = new Movie(10,15);