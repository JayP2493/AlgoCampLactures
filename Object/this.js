let obj = {
    x: 1,
    y: 2,

    fn: function () {
        let x = 5;
        let y = 4;
        let print = () => {
            console.log(this.x, this.y);
            console.log(x,y);
        }
        print();
    }
}
obj.fn();

sd