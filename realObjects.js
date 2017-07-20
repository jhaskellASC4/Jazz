function Car(color, weight) (
    this.color = color;
    this.weight = weight;
}

var jeep = new Car("black", 1);

function Player(team, position, number) {
    this.team = team;
    this.position = position;
    this.number = number;
}

var jamesHarden = new Player("Rockets", "Point Guard", 13)

function Pants(Lenght, style, waist) {
    this.Lenght = Lenght;
    this.style = style;
    this.waist = waist;
}

var Jeans = new Pants("36", "Taper", "34")

console.log("Pants are a great invention" + Pants.Lenght)