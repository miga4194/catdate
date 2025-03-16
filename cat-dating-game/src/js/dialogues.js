
/*
const dialogues = [
    {
        id: 1,
        text: "Welcome to the Cat Dating Game! Are you ready to meet some fabulous cats?",
        image: "assets/images/master.png",
        choices: [
            { text: "Yes, let's go!", nextId: 2 },
            { text: "No, I'm not ready.", nextId: 3 }
        ]
    },
    {
        id: 2,
        text: "Great! The first cat is Sapphire. She's a sophisticated cat who loves the finer things in life.",
        image: "assets/images/black.png",
        choices: [
            { text: "Ask about her hobbies.", nextId: 4 },
            { text: "Ask about her partner.", nextId: 5 }
        ]
    },
    {
        id: 3,
        text: "No worries! Take your time. Let me know when you're ready.",
        image: "assets/images/bg.png",
        choices: [
            { text: "I'm ready now!", nextId: 1 }
        ]
    },
    {
        id: 4,
        text: "Sapphire: I enjoy going to operas and collecting famous paintings.",
        image: "assets/images/black.png",
        choices: [
            { text: "That's interesting!", nextId: 6 },
            { text: "I don't like operas.", nextId: 7 }
        ]
    },
    {
        id: 5,
        text: "Sapphire: I'm looking for someone who can appreciate my lifestyle.",
        image: "assets/images/black.png",
        choices: [
            { text: "I can do that!", nextId: 6 },
            { text: "Sounds too fancy for me.", nextId: 7 }
        ]
    },
    {
        id: 6,
        text: "Sapphire: I'm glad to hear that! Let's see where this goes.",
        image: "assets/images/blackPos.png",
        choices: [
            { text: "Continue to the next cat.", nextId: 8 }
        ]
    },
    {
        id: 7,
        text: "Sapphire: That's too bad. Maybe the next cat will be more your style.",
        image: "assets/images/blackNeg.png",
        choices: [
            { text: "Continue to the next cat.", nextId: 8 }
        ]
    },
    {
        id: 8,
        text: "Next up is Bella, the adventurous cat who loves to hunt!",
        image: "assets/images/orange.png",
        choices: [
            { text: "Ask about her hobbies.", nextId: 9 },
            { text: "Ask about her partner.", nextId: 10 }
        ]
    },
    {
        id: 9,
        text: "Bella: Oh! You know, I really like to hunt down birds and decapitate them! For fun of course, I don't actually eat meat. You know, my favourite birds to hunt are pigeons!",
        image: "assets/images/orange.png",
        choices: [
            { text: "That's horrible!", nextId: 11 },
            { text: "(shocked silence)", nextId: 12 },
            { text: "Interesting hobby! Do you sell them on Ebay?", nextId: 13 }
        ]
    },
    {
        id: 10,
        text: "Bella: Hmm I think I'm not too picky. As long as my partner isn't boring! Like, I don't even mind that you're smelly- oh maybe I shouldn't have said that.",
        image: "assets/images/orangePos.png",
        choices: [
            { text: "You calling me stinky?!", nextId: 11 },
            { text: "Oh... I'm not boring...", nextId: 12 },
            { text: "Thanks! You have an interesting personality too!", nextId: 13 }
        ]
    },
    {
        id: 11,
        text: "Bella: Ugh you're so uncool! This date was a cat-astrophe!",
        image: "assets/images/orangeNeg.png",
        choices: [
            { text: "Move on to the next cat...", nextId: 14 }
        ]
    },
    {
        id: 12,
        text: "Bella: Man, I mean like you're not bad... just really really mid. Kinda boring TBH.",
        image: "assets/images/orange.png",
        choices: [
            { text: "Continue to the next cat...", nextId: 14 }
        ]
    },
    {
        id: 13,
        text: "Bella: OMG you totally get me! Let's go gallivanting into the sunset together!",
        image: "assets/images/orangePos.png",
        choices: [
            { text: "Accept Bella's offer", nextId: 15 },
            { text: "Politely decline and meet the next cat", nextId: 14 }
        ]
    },
    {
        id: 14,
        text: "Next up is Lucile, a game designer who loves anime!",
        image: "assets/images/calico.png",
        choices: [
            { text: "Ask about her hobbies.", nextId: 16 },
            { text: "Ask about her partner.", nextId: 17 }
        ]
    },
    {
        id: 16,
        text: "Lucile: Oh, I like to watch anime! I love sitting down on the sofa and chilling with a nice matcha to watch anime on the tv!",
        image: "assets/images/calico.png",
        choices: [
            { text: "Matcha? Gross. Anime is so lame, you're such a weeb.", nextId: 18 },
            { text: "Oh. Anime is pretty cool I guess.", nextId: 19 },
            { text: "Wow! I also love anime! I've never tried matcha though.", nextId: 20 }
        ]
    },
    {
        id: 17,
        text: "Lucile: Well, I would love to have someone who I can just hangout with and talk about my hobbies with! You know, sit on the sofa together and stay up till 2am just watching anime.",
        image: "assets/images/calicoPos.png",
        choices: [
            { text: "That's such a lame answer. Think of something more interesting!", nextId: 18 },
            { text: "Oh... that's cool. Hobbies and stuff.", nextId: 19 },
            { text: "That sounds perfect! Late night anime sessions are the best!", nextId: 20 }
        ]
    },
    {
        id: 18,
        text: "Lucile: I was trying to be polite but you're really rude, and a complete jerk. Bye.",
        image: "assets/images/calicoNeg.png",
        choices: [
            { text: "Game Over - Start Again", nextId: 1 }
        ]
    },
    {
        id: 19,
        text: "Lucile: Umm... You don't seem interested in anything I'm saying. Sorry I don't think this is gonna work.",
        image: "assets/images/calicoNeg.png",
        choices: [
            { text: "Game Over - Start Again", nextId: 1 }
        ]
    },
    {
        id: 20,
        text: "Lucile: I think this could work out! We seem to have aligning interests! Would you be interested in going on more dates soon?",
        image: "assets/images/calicoPos.png",
        choices: [
            { text: "Yes! Let's watch anime together!", nextId: 21 },
            { text: "Thanks, but I'll pass", nextId: 1 }
        ]
    },
    {
        id: 21,
        text: "Congratulations! You've successfully found a match! Would you like to play the full version with more features?",
        image: "assets/images/master.png",
        choices: [
            { text: "Yes, take me to the full version!", nextId: 22 },
            { text: "No, start over", nextId: 1 }
        ]
    },
    {
        id: 22,
        text: "Opening the full version in a new tab...",
        image: "assets/images/master.png",
        choices: [
            { text: "Start Over", nextId: 1 }
        ],
        onEnter: () => {
            window.open('https://codehs.com/sandbox/id/catdate-wxv04R/run', '_blank');
        }
    }
];
*/

const dialogues = [
    {
        id: 1,
        text: "MATH CAT: Son. It's time. You're 30 years old, single, two days away from being in terrible debt, and you still live in my basement. You need to get out of the house!",
        image: "assets/images/master.png",
        choices: [
            { text: "Continue", nextId: 2 }
        ]
    },
    {
        id: 2,
        text: "First up is Sapphire. She's a sophisticated black cat who works at the money bank.",
        image: "assets/images/master.png",
        choices: [
            { text: "Ready to meet her", nextId: 3 }
        ]
    },
    {
        id: 3,
        text: "Sapphire: Greetings. My name is SAPPHIRE. Oh. Eugh. You smell terrible, when's the last time you took a shower? aHEm I mean, how are you doing on this fine afternoon?",
        image: "assets/images/black.png",
        choices: [
            { text: "Good!", nextId: 4 },
            { text: "It was okay.", nextId: 4 },
            { text: "It was horrible!", nextId: 5 }
        ]
    },
    {
        id: 4,
        text: "Sapphire: *adjusts monocle* Well then, shall we get to know each other better?",
        image: "assets/images/black.png",
        choices: [
            { text: "Ask about her hobbies", nextId: 6 },
            { text: "Ask about what she wants in a partner", nextId: 7 },
            { text: "Ask about her work", nextId: 8 }
        ]
    },
    {
        id: 5,
        text: "Sapphire: *scoffs* Well with that attitude, I don't see this going anywhere.",
        image: "assets/images/blackNeg.png",
        choices: [
            { text: "Move on to next cat", nextId: 9 }
        ]
    },
    {
        id: 6,
        text: "Sapphire: I enjoy going to operas and collecting famous paintings. The finer things in life, you know?",
        image: "assets/images/black.png",
        choices: [
            { text: "That's interesting!", nextId: 10 },
            { text: "Sounds boring...", nextId: 11 }
        ]
    },
    {
        id: 7,
        text: "Sapphire: I'm looking for someone who can appreciate my sophisticated lifestyle and has good taste.",
        image: "assets/images/black.png",
        choices: [
            { text: "I can definitely appreciate that!", nextId: 10 },
            { text: "Sounds too fancy for me.", nextId: 11 }
        ]
    },
    {
        id: 8,
        text: "Sapphire: I work at the prestigious Money Bank. I'm quite successful, if I do say so myself.",
        image: "assets/images/black.png",
        choices: [
            { text: "That's impressive!", nextId: 10 },
            { text: "Sounds boring...", nextId: 11 }
        ]
    },
    {
        id: 9,
        text: "Next up is Bella, a very... unique orange cat who sells stuff on eBay.",
        image: "assets/images/master.png",
        choices: [
            { text: "Let's meet her", nextId: 12 }
        ]
    },
    {
        id: 10,
        text: "Sapphire: I'm glad you understand class. Perhaps we could attend an opera together sometime?",
        image: "assets/images/blackPos.png",
        choices: [
            { text: "Accept Sapphire's offer", nextId: 20 },
            { text: "Politely decline and meet next cat", nextId: 9 }
        ]
    },
    {
        id: 11,
        text: "Sapphire: *adjusts monocle in disgust* I see we're not compatible at all.",
        image: "assets/images/blackNeg.png",
        choices: [
            { text: "Move on to next cat", nextId: 9 }
        ]
    },
    {
        id: 12,
        text: "Bella: SUP! I'm BELLA! It's a purreasure to meetcha! Oh, judging from your appearance it doesn't seem like you got a lotta that rizz but I guess looks aren't everything!",
        image: "assets/images/orange.png",
        choices: [
            { text: "Ask about her hobbies", nextId: 13 },
            { text: "Ask about what she wants in a partner", nextId: 14 },
            { text: "Ask about her work", nextId: 15 }
        ]
    },
    {
        id: 13,
        text: "Bella: Oh! You know, I really like to hunt down birds and decapitate them! For fun of course, I don't actually eat meat. You know, my favourite birds to hunt are pigeons!",
        image: "assets/images/orange.png",
        choices: [
            { text: "That's horrible!", nextId: 16 },
            { text: "(shocked silence)", nextId: 17 },
            { text: "Interesting hobby! Do you sell them on eBay?", nextId: 18 }
        ]
    },
    {
        id: 14,
        text: "Bella: Hmm, I just want someone who isn't boring! Like, I don't even mind that you're smelly- oh maybe I shouldn't have said that.",
        image: "assets/images/orange.png",
        choices: [
            { text: "You calling me stinky?!", nextId: 16 },
            { text: "Oh... I'm not boring...", nextId: 17 },
            { text: "Thanks! You have an interesting personality too!", nextId: 18 }
        ]
    },
    {
        id: 15,
        text: "Bella: I sell stuff on eBay! Mostly bird parts- I MEAN COLLECTIBLES! Yeah, collectibles...",
        image: "assets/images/orange.png",
        choices: [
            { text: "That's disturbing...", nextId: 16 },
            { text: "Uh... interesting business model...", nextId: 17 },
            { text: "Cool! I love entrepreneurs!", nextId: 18 }
        ]
    },
    {
        id: 16,
        text: "Bella: Ugh you're so uncool! This date was a cat-astrophe!",
        image: "assets/images/orangeNeg.png",
        choices: [
            { text: "Move on to next cat...", nextId: 19 }
        ]
    },
    {
        id: 17,
        text: "Bella: Man, I mean like you're not bad... just really really mid. Kinda boring TBH.",
        image: "assets/images/orange.png",
        choices: [
            { text: "Continue to the next cat...", nextId: 19 }
        ]
    },
    {
        id: 18,
        text: "Bella: OMG you totally get me! Let's go gallivanting into the sunset together!",
        image: "assets/images/orangePos.png",
        choices: [
            { text: "Accept Bella's offer", nextId: 30 },
            { text: "Politely decline and meet the next cat", nextId: 19 }
        ]
    },
    {
        id: 19,
        text: "Next up is Lucile, a game designer who loves anime!",
        image: "assets/images/master.png",
        choices: [
            { text: "Let's meet her", nextId: 20 }
        ]
    },
    {
        id: 20,
        text: "Lucile: Hi! I'm LUCILE! *adjusts glasses* How are you doing today?",
        image: "assets/images/calico.png",
        choices: [
            { text: "Ask about her hobbies", nextId: 21 },
            { text: "Ask about what she wants in a partner", nextId: 22 },
            { text: "Ask about her work", nextId: 23 }
        ]
    },
    {
        id: 21,
        text: "Lucile: Oh, I like to watch anime! I love sitting down on the sofa and chilling with a nice matcha to watch anime on the tv!",
        image: "assets/images/calico.png",
        choices: [
            { text: "Matcha? Gross. Anime is so lame, you're such a weeb.", nextId: 24 },
            { text: "Oh. Anime is pretty cool I guess.", nextId: 25 },
            { text: "Wow! I also love anime! I've never tried matcha though.", nextId: 26 }
        ]
    },
    {
        id: 22,
        text: "Lucile: Well, I would love to have someone who I can just hangout with and talk about my hobbies with! You know, sit on the sofa together and stay up till 2am just watching anime.",
        image: "assets/images/calico.png",
        choices: [
            { text: "That's such a lame answer. Think of something more interesting!", nextId: 24 },
            { text: "Oh... that's cool. Hobbies and stuff.", nextId: 25 },
            { text: "That sounds perfect! Late night anime sessions are the best!", nextId: 26 }
        ]
    },
    {
        id: 23,
        text: "Lucile: I'm a game designer! I love creating worlds and stories for others to enjoy!",
        image: "assets/images/calico.png",
        choices: [
            { text: "Games are for kids. Get a real job!", nextId: 24 },
            { text: "That's... nice I guess.", nextId: 25 },
            { text: "That's amazing! I love video games!", nextId: 26 }
        ]
    },
    {
        id: 24,
        text: "Lucile: I was trying to be polite but you're really rude, and a complete jerk. Bye.",
        image: "assets/images/calicoNeg.png",
        choices: [
            { text: "Game Over - Start Again", nextId: 1 }
        ]
    },
    {
        id: 25,
        text: "Lucile: Umm... You don't seem interested in anything I'm saying. Sorry I don't think this is gonna work.",
        image: "assets/images/calicoNeg.png",
        choices: [
            { text: "Game Over - Start Again", nextId: 1 }
        ]
    },
    {
        id: 26,
        text: "Lucile: I think this could work out! We seem to have aligning interests! Would you be interested in going on more dates soon?",
        image: "assets/images/calicoPos.png",
        choices: [
            { text: "Yes! Let's watch anime together!", nextId: 31 },
            { text: "Thanks, but I'll pass", nextId: 1 }
        ]
    },
    {
        id: 30,
        text: "Congratulations! You and Bella will make a purr-fect couple! Would you like to play the full version with more features?",
        image: "assets/images/master.png",
        choices: [
            { text: "Yes, take me to the full version!", nextId: 32 },
            { text: "No, start over", nextId: 1 }
        ]
    },
    {
        id: 31,
        text: "Congratulations! You and Lucile will have many cozy anime nights together! Would you like to play the full version with more features?",
        image: "assets/images/master.png",
        choices: [
            { text: "Yes, take me to the full version!", nextId: 32 },
            { text: "No, start over", nextId: 1 }
        ]
    },
    {
        id: 32,
        text: "Opening the full version in a new tab...",
        image: "assets/images/master.png",
        choices: [
            { text: "Start Over", nextId: 1 }
        ],
        onEnter: () => {
            window.open('https://codehs.com/sandbox/id/catdate-wxv04R/run', '_blank');
        }
    }
];