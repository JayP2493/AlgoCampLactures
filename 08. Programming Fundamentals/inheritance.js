class Event {

    constructor(EventDate,SeatNo,typeofEvent,eventDiscription) {
        this.EventDate = EventDate;
        this.SeatNo = SeatNo;
        this.typeofEvent = typeofEvent;
        this.eventDiscription = eventDiscription;
    }

    bookEvent() {
        console.log(this.typeofEvent,this.eventDiscription,"booked on date of ", this.EventDate, " with seat no: ", this.SeatNo);
    }
}

class Movie extends Event {
    constructor(EventDate,SeatNo,movieName) {
        super(EventDate, SeatNo,"Movie",movieName);
    }
}

let deadpool = new Movie("17/10/24",34,"Deadpool");

deadpool.bookEvent();
