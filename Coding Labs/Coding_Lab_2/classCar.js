function Car(name = "General", model = "GM", type) {
    this.name = name;
    this.model = model;
    this.speed = "0 km/h";

    if ((this.name) === "Porshe" || (this.name) === "Koenigsegg") {
        this.numOfDoors = 2;
    } else {
        this.numOfDoors = 4;
    }
    this.drive = function(speed) {
        if (speed === 5) {
            this.speed = "250 km/h";
        } else if (speed === 7) {
            this.speed = "77 km/h";
        }
        return this;
    }
    if (type === "trailer") {
        this.numOfWheels = 8;
        this.isSaloon = false;
    } else {
        this.numOfWheels = 4;
        this.isSaloon = true;
    }
}