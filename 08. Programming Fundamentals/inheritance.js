let event = {
    event: "xyz",

    book: function () {
        console.log('Book Ticket of ', this.event);
    }
}

let movie = {
    event: "movie"
}
let comedy = {
    event: "comedy"
}
let concert = {
    event: "concert"
}
event.book.call(movie);
event.book.call(comedy);
event.book.call(concert);