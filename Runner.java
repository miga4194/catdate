import java.util.Scanner;

public class Runner
{
    public static int choice = 0;
    
    //input later
    public static void clearScreen(){
        System.out.print("\033[H\033[2J");
        System.out.flush();
    }
    public static String askQuestion(String choice1, String choice2, String choice3){
        Scanner input = new Scanner(System.in); //**
        
        //ask
        while(true){
            System.out.println(); //**
            System.out.println("Choose:");
            System.out.println("1. " + choice1 + " \n2. " + choice2 + " \n3. " + choice3);
            choice = input.nextInt();
            if(choice==1){
                return choice1;
            }else if(choice==2){
                return choice2;
            }else if(choice==3){
                return choice3;
            }
            System.out.println("MATH CAT: Please choose 1, 2, or 3");
        }
    }
    public static void print(String name, String response){
        System.out.println(name + ": " + response);
    }
    public static void cont(){
        Scanner input = new Scanner(System.in); //**
        boolean cont = false;
        while(true){
            System.out.println("Write TRUE to continue...");
            cont = input.nextBoolean();
            if(cont)
                break;
        }
    }
    public static void negResponse(){
        System.out.println("***SCRATTCHHHHHHH***");
        print("MATH CAT (whispers)", "Son you better hope she won't file a restraining order on you...");
    }
    public static void posResponse(){
        System.out.println("***<3<3<3***");
        print("MATH CAT (whispers)", "Son, you're making me proud *tears up*");
    }
    public static void main(String[] args)
    {
        Scanner input = new Scanner(System.in);
        
        print("MATH CAT", "Son. It's time. You're 30 years old, single, two days away from being in terrible debt, and you still live in my basement. You need to get out of the house, and find a good partner who can support and motivate you to improve your life!");
        System.out.println();
        print("MATH CAT", "I've found 3 cats who are currently looking for a partner. Please, for the love of god get a date with at least one of them.");
        System.out.println();
        print("MATH CAT", "The game is simple. Each cat has 3 lives. If you make them angry and choose the wrong dialogue option, they will lose a life. If the cat loses all three lives, you must move on to the next cat. It will be first come first serve, so if you successfully score a date on your first meeting then you will not need to meet the rest of the cats.");
        System.out.println();
        cont();
        clearScreen();
        
        //BLACK CAT
        String hobbyB = "I'm glad you asked. I enjoy… the finer aspects of life. I love going to operas, 5 star Michelin restaurants, and collecting famous paintings… The list goes on and on. Don't you agree?";
        String partnerB = "Well… you know I do enjoy quite a lavish lifestyle. But for so long, I have been without a loving partner who is willing to put up with my unique preferences. You know, the last date I went on, my so-called date didn't even pay for dinner! It wasn't even that expensive, you know, only a couple… thousand dollars? Rather reasonable for a first date if I say so myself.";
        String workB = "Work? Well, who needs work when there's always a money bank near you? I mean, it's not too difficult to find someone to pay for you, I just bat my eyelashes at them and usually they're willing to do whatever I want! Ah, the joys of being naturally elegant and beautiful.";
        Cat black = new Cat("Sapphire",hobbyB,partnerB,workB);
          
            //GREETING
        print(black.getName(), "Greetings. My name is " + black.getName());
        System.out.print("YOU: My name is ");
        String name = input.nextLine();
        Player user = new Player(name);
        System.out.println("Starting lives: " + user.getLives()); //**
        clearScreen(); //**
        print(black.getName(),"Oh. Eugh. You smell terrible, when's the last time you took a shower? aHEm I mean, how are you doing on this fine afternoon, " + user.getName() + "?");
            //response
        String greet1 = askQuestion("Good!","It was okay.","It was horrible! I hate it here!");
        clearScreen(); //**
            //consequence
        print(user.getName(),greet1);
        if(choice == 3){
            print(black.getName(), "I don't enjoy this either, but I'm trying to find like-minded individuals.");
                //lose life 1
            user.loseLife();
            System.out.println();//**
            System.out.println("***SCRATTCHHHHHHH*** Uh oh. She didn't seem to like that.");
             System.out.println("Remaining Lives: " + user.getLives()); //**
        }
            //exit
        System.out.println();//**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 1
        print(user.getName(),user.getAskHobby());
        print(black.getName(),black.getHobby());
            //response
        String q1 = askQuestion("Wow you're one of those spoiled cats.", "Um… sure… you must have a lot of free time.","Amazing! Such elegance! I also love those things!");
        clearScreen(); //**
            //consequence
        print(user.getName(),q1);
        if(choice == 1){
            print(black.getName(), "SPOILED?? I simply have better TASTE than simple buffoons like you! Hmph.");
                //lose life 1
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
        if(choice==3){
            print(black.getName(), "I'm truly glad you agree. If this date is a success, I would love to go on a nice fancy dinner later.");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 2
        System.out.println(user.getName() + ": " + user.getAskPartner());
        System.out.println(black.getName() + ": " + black.getPartner());
                //response
        String q2 = askQuestion("A COUPLE THOUSAND DOLLARS?? That's insane. I can't pay for that. You know in this day and age, people like me (CS majors) are like 1 step away from homelessness!",
            "O-oh. I see. That's… interesting. Ahahaha anyways let's continue.", 
            "Wooow. That's outrageous! You know, if it were me I would pay the entire bill, and also pay for your ride back! That's what a real partner would do.");
        clearScreen(); //**
            //consequence
        print(user.getName(),q2);
        if(choice == 1){
            print(black.getName(), " Excuse me??? What kind of person did the master cat send over? I told them anyone who earns less than $1 000 000 a year is unacceptable! Instead they send over this… this penniless, fatuous, doltish, dim, weak minded, ignorant, cretinous, daft BONEHEAD!");
                //lose life 2
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
        if(choice==3){
            print(black.getName(), "I'm glad you agree. You know, despite your unkempt appearance, your horrid smell and your overall disgusting appearance, it seems you have a minor sense of decorum.");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
                //user says
            print(user.getName(),  "oh. Thanks I guess.");
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 3
        System.out.println(user.getName() + ": " + user.getAskWork());
        System.out.println(black.getName() + ": " + black.getWork());
         //response
        String q3 = askQuestion("Y-you… you don't even work?? Wow. Man. I'm just speechless. You're really just a spoiled little cat huh. You know how much people struggle nowadays?? There's people like me who can't even afford to move out of our parents' houses!",
            "… oh. How convenient.", "You are indeed elegant and beautiful! In fact, you're so beautiful that you could bat your eyelashes at me right now and I bet I would also do whatever you asked for too! I am at your service, milady " + black.getName());
        clearScreen(); //**
            //consequence
        print(user.getName(),q3);
        if(choice == 1){
            print(black.getName(), "Ugh. You're one of those people then. I decided not to judge by appearance for once, but it seems you are exactly the person you appear to be. Poor, smelly, uneducated, the list could go on and on.");
                //lose life 2
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
        if(choice==3){
            print(black.getName(), "Ohohoho. Good, I see you have a good eye for exquisite things. ");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
                //user says
            print(user.getName(),  "oh. Thanks I guess.");
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
        //ENDINGS
        if(user.getLives()==0){
            print(black.getName(), "You have greatly offended me. I simply cannot accept such a mindless fool as my date. Leave, and never show your filthy face around here ever again.");
        }else if(user.getLives()==1 || user.getLives()==2){
            print(black.getName(), "To be frank, you're extremely dull and boring. I see no point in continuing this conversation any further.");
        }else if(user.getLives()==3){
            print(black.getName(), "Such a humble servant I have obtained. Very well. Perhaps we could go out for dinner after this? I have a nice restaurant in mind, it's only a 2 star Michelin restaurant, don't worry.");
        }
        
        
        
        
        //ORANGE CAT
        String hobbyO = "Oh! You know, I really like to hunt down birds and decapitate them! For fun of course, I don't actually eat meat. You know, my favourite birds to hunt are pigeons! Their necks are just so… snappable! Like they go *kerPOW*! Soo epic.";
        String partnerO = "Hmm I think I'm not too picky. As long as my partner isn't boring; I'd consider that to be purrfect! Like, I don't even mind that you're smelly- oh maybe I shouldn't have said that. I mean the bad smell is also unique!";
        String workO = "Oh! As I mentioned, I sell stuff on Ebay! I think my bestseller is… hm no cap maybe Bella's Blissful Bathwater! That one's really popular. Hey, you wanna buy some? I'll give you a discount!";
        Cat orange = new Cat("Bella",hobbyO,partnerO,workO);
          
            //GREETING
        print(orange.getName(), "SUP! I'm " + black.getName());
        print(user.getName(), "My name is " + user.getName());
        System.out.println("Starting lives: " + user.getLives()); //**
        clearScreen(); //**
        print(orange.getName(),"It's a purreasure to meetcha! Oh, judging from your appearance it doesn't seem like you got a lotta that rizz but I guess looks aren't everything! How're you doing?");
            //response
        String greet2 = askQuestion("Good!","Rizz…? I mean, I guess I'm doing okay","Ugh. I can see this isn't gonna go well.");
        clearScreen(); //**
            //consequence
        print(user.getName(),greet1);
        if(choice == 3){
            print(orange.getName(), "Wowza dude! Super rude start!");
                //lose life 1
            user.loseLife();
            System.out.println();//**
            System.out.println("***SCRATTCHHHHHHH*** Uh oh. She didn't seem to like that.");
             System.out.println("Remaining Lives: " + user.getLives()); //**
        }
            //exit
        System.out.println();//**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 1
        print(user.getName(),user.getAskHobby());
        print(orange.getName(),orange.getHobby());
            //response
        String q11 = askQuestion("Excuse me? Decapitation??? What's wrong with you? That's horrible!", "(shocked silence) Oh.","Ooh, do you sell them on Ebay? That's such an interesting hobby!");
        clearScreen(); //**
            //consequence
        print(user.getName(),q11);
        if(choice == 1){
            print(orange.getName(), "What the heck man! Don't give me that cat-titude! I think you're just salty that I have a better hobby than you. I bet you don't even have any hobbies! I bet you just lie at home all day and watch TV.");
                //lose life 1
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
        if(choice==3){
            print(orange.getName(), "OMG YES! I tried to sell them but for some odd reason no one would buy them?? Like, Ebay lowkey fell off, it's just full of boring people.");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 2
        System.out.println(user.getName() + ": " + user.getAskPartner());
        System.out.println(orange.getName() + ": " + orange.getPartner());
                //response
        String q22 = askQuestion("You calling me stinky?? I don't wanna hear that from someone who decapitates birds for fun! I still smell the blood on you!",
            "Oh. I think I'm not boring… ", 
            "Thank you, I appreciate the compliment! You also smell very unique and have a very interesting purrsonality. *winks*");
        clearScreen(); //**
            //consequence
        print(user.getName(),q22);
        if(choice == 1){
            print(orange.getName(), " Hey dude stop judging on the birds! It's giving jealousy vibes, and that's so not cool");
                //lose life 2
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
                //user says
            print(user.getName(),  "(gah- how did she know!)");
        }
        if(choice==3){
            print(orange.getName(), "ATE! I looove that pun! Haha this is going great!");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
                
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 3
        System.out.println(user.getName() + ": " + user.getAskWork());
        System.out.println(orange.getName() + ": " + orange.getWork());
         //response
        String q33 = askQuestion("Ew gross! What kind of business are you running?? Bathwater? You degenerate… and that's coming from me of all people. ",
            "Bathwater…? What the heck? Ok I guess I won't judge considering I'm basically unemployed…", "Ooh can I buy 10 jars? You don't need to give me a discount, I'd love to support your business! ");
        clearScreen(); //**
            //consequence
        print(user.getName(),q33);
        if(choice == 1){
            print(orange.getName(), "HEY! Don't you DARE discredit my business! I've worked HARD on this! You you you ARGH I'm so offended I don't even know what to say! (what the sigma)");
                //lose life 2
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
        if(choice==3){
            print(orange.getName(), "OMG you simp! *blushes* I vibe with that tho~ I'll never turn away paying customers! *blushes again* ");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
        //ENDINGS
        if(user.getLives()==0){
            print(orange.getName(), "Ugh you're so uncool! This date was a cat-astrophe! Hmph. I never want to see your stupid face again.");
        }else if(user.getLives()==1 || user.getLives()==2){
            print(orange.getName(), " Man, I mean like you're not bad… just really really mid. Kinda boring TBH. So average. See ya never.");
        }else if(user.getLives()==3){
            print(orange.getName(), "I totally vibe with you! Let's go gallivanting into the sunset and sell a new product together; I'm thinking of the name Couples Sweet Sweat! ");
        }
        
        
        
            //CALICO CAT
        String hobbyC = "Oh, I like to watch anime! I love sitting down on the sofa and chilling with a nice matcha to watch anime on the tv!";
        String partnerC = "Well, I would love to have someone who I can just hangout with and talk about my hobbies with! You know, sit on the sofa together and stay up till 2am just watching anime.";
        String workC = "I'm a professional game designer. I like to make cozy games! Though sometimes it's really stressful when I'm short on time…";
        Cat calico = new Cat("Lucile",hobbyC,partnerC,workC);
          
            //GREETING
        print(calico.getName(), "Hello! My name is " + calico.getName());
        print(user.getName(), "My name is " + user.getName());
        System.out.println("Starting lives: " + user.getLives()); //**
        clearScreen(); //**
        print(calico.getName(),"How are you doing? ");
            //response
        String greet3 = askQuestion("I'm doing good, thank you.","It's been okay I suppose.","Uh, really bad. I've already had 2 failed date meetings. ");
        clearScreen(); //**
            //consequence
        print(user.getName(),greet1);
        if(choice == 3){
            print(calico.getName(), "Oh, that's unfortunate... I hope this one won't fail!");
                //lose life 1
            user.loseLife();
            System.out.println();//**
            System.out.println("***SCRATTCHHHHHHH*** Uh oh. She didn't seem to like that.");
             System.out.println("Remaining Lives: " + user.getLives()); //**
        }
            //exit
        System.out.println();//**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 1
        print(user.getName(),user.getAskHobby());
        print(calico.getName(),calico.getHobby());
            //response
        String q111 = askQuestion("…Matcha? Matcha's gross, ew. Also anime is so lame, you're such a weeb.", "Oh. Anime is pretty cool I guess.","Wow! I also love anime! I don't drink matcha much, but I have heard good things.");
        clearScreen(); //**
            //consequence
        print(user.getName(),q111);
        if(choice == 1){
            print(calico.getName(), "O-oh… I apologize if I offended you… I understand if it isn't for everyone.");
                //lose life 1
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
        if(choice==3){
            print(calico.getName(), "Yes! Matcha is so amazing. Also I would love to recommend some anime if you're ever interested.");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 2
        System.out.println(user.getName() + ": " + user.getAskPartner());
        System.out.println(calico.getName() + ": " + calico.getPartner());
                //response
        String q222 = askQuestion("Wow. That's such a lame answer to be honest. Really basic. Like, hangout and talk about hobbies? Think of something more interesting!",
            "Oh… that's cool. Hobbies and stuff. Yeah.", 
            "Yes, that also sounds like a happy relationship to me! I stay up till 2am way too often...");
        clearScreen(); //**
            //consequence
        print(user.getName(),q222);
        if(choice == 1){
            print(calico.getName(), " Oh. I'm sorry, I just enjoy a simple lifestyle… if that isn't for you that's also okay.");
                //lose life 2
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
        if(choice==3){
            print(calico.getName(), "Ahaha me too… but now we can do it together!");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
                
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
            //QUESTION 3
        System.out.println(user.getName() + ": " + user.getAskWork());
        System.out.println(calico.getName() + ": " + calico.getWork());
         //response
        String q333 = askQuestion("Oh eugh. Game design is kinda lame these days. Also I don't really like cozy games, they're too boring for me.",
            "Game design? That's pretty interesting.", "Oh wow, game design! You know, I know a bit of coding too! If you ever need help with something I can probably help.");
        clearScreen(); //**
            //consequence
        print(user.getName(),q333);
        if(choice == 1){
            print(calico.getName(), "Game design isn't boring! Also just because you don't like cozy games doesn't mean they're boring! In fact, a lot of people enjoy cozy games.)");
                //lose life 2
            user.loseLife();
            System.out.println();//**
            negResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
        if(choice==3){
            print(calico.getName(), "Oh wow! That's super cool! I'm glad we have similar interests!");
                //gain life 1
            if(user.getLives()!=3)
                user.gainLife();
            posResponse();
            System.out.println("Remaining Lives: " + user.getLives()); //**
        }
            //exit
        System.out.println(); //**
        cont(); //**
        clearScreen(); //**
        
        //ENDINGS
        if(user.getLives()==0){
            print(calico.getName(), " I was trying to be polite but you're really rude, and a complete jerk. Bye.");
        }else if(user.getLives()==1 || user.getLives()==2){
            print(calico.getName(), " Umm… You don't seem interested in anything I'm saying. Sorry I don't think this is gonna work.");
        }else if(user.getLives()==3){
            print(calico.getName(), "I think this could work out! We seem to have aligning interests! Would you be interested in going on more dates soon?");
        }
        // //end
        // System.out.println("Successfully warded off your suitors. ");
    }
}