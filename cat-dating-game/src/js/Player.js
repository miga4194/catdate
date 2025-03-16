class Player {
    constructor(name) {
        this.name = name.toUpperCase();
        this.lives = 3;
        this.askHobby = "What hobbies do you have? ";
        this.askPartner = "What are you looking for in this relationship?";
        this.askWork = "What do you do for work?";
    }

    getName() {
        return this.name;
    }

    getLives() {
        return this.lives;
    }

    getAskHobby() {
        return this.askHobby;
    }

    getAskPartner() {
        return this.askPartner;
    }

    getAskWork() {
        return this.askWork;
    }

    setName(name) {
        this.name = name;
    }

    setLives(lives) {
        this.lives = lives;
    }

    setAskHobby(askHobby) {
        this.askHobby = askHobby;
    }

    setAskPartner(askPartner) {
        this.askPartner = askPartner;
    }

    setAskWork(askWork) {
        this.askWork = askWork;
    }

    loseLife() {
        this.lives--;
    }

    gainLife() {
        this.lives++;
    }
}