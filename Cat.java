public class Cat {
    //instances
    private String name;
    private String hobby;
    private String partner;
    private String work;
    
    //constructor
    public Caat(String name, String hobby, String partner, String work){
        this.name = name.toUpperCase();
        this.hobby = hobby;
        this.partner = partner;
        this.work = work;
    }
    
    //set get
    public String getName(){
        return name;
    }
    public String getHobby(){
        return hobby;
    }
    public String getPartner(){
        return partner;
    }
    public String getWork(){
        return work;
    }
    public void setName(String name){
        this.name = name;
    }
    public void setHobby(String hobby){
        this.hobby = hobby;
    }
    public void setPartner(String partner){
        this.partner = partner;
    }
    public void setWork(String work){
        this.work = work;
    }
   
   
}