public class Player {
    //instances
    private String name;
    private int lives; // once lives reaches 3, move on (should be lower the better)
    private String askHobby;
    private String askPartner;
    private String askWork;
    
    //constructor
    public Player(String name){
        this.name = name.toUpperCase();
        this.lives = 3;
        this.askHobby = "What hobbies do you have? ";
        this.askPartner = "What are you looking for in this relationship?";
        this.askWork = "What do you do for work?";
    }
    
    //set get
    public String getName(){
        return name;
    }
    public int getLives(){
        return lives;
    }
    public String getAskHobby(){
        return askHobby;
    }
    public String getAskPartner(){
        return askPartner;
    }
    public String getAskWork(){
        return askWork;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setLives(int lives){
        this.lives = lives;
    }
    public void setAskHobby(String askHobby){
        this.askHobby = askHobby;
    }
    public void setAskPartner(String askPartner){
        this.askPartner = askPartner;
    }
    public void setAskWork(String askWork){
        this.askWork = askWork;
    }
    
    //methods
    public void loseLife(){
        lives--;
    }
     public void gainLife(){
        lives++;
    }
}