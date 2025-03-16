

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
    }
];