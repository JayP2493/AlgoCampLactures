function Event(EventDate,SeatNo,typeofEvent,eventDiscription) {
    this.EventDate = EventDate;
    this.SeatNo = SeatNo;
    this.typeofEvent = typeofEvent;
    this.eventDiscription = eventDiscription;
}

Event.prototype.bookEvent = function() {
    console.log(this.typeofEvent,this.eventDiscription,"booked on date of ", this.EventDate, " with seat no: ", this.SeatNo)
}

function Movie (movieName,Date,SeatNo) {
    Event.call(this, Date,SeatNo,"Movie", movieName);
}

Movie.prototype = Object.create(Event.prototype);
// Movie.prototype.__proto__ = Event.prototype; // this is other method

let a = new Movie("DeadPool","17/10/24",34);
a.bookEvent();