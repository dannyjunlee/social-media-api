const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Grace',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
  ];

const thoughts = [
    'I am so freakin awesome',
    'Social media is Big Brother and we are just puppets controlled by the government.',
    'I lift weights. Do you even lift bro?',
    'Coding is the future!',
    'What if all the Twitter employees that got fired/laid off/left joined together and created an Elon Musk-free new Twitter?',
    'It is called football, not soccer. American football is just American football, and football is the global sport.',
    'Sports betting cultivates an unhealthy environment for professional sports.',
    'The stock market will, over a long enough period of time, always rise due to the fact that America is the powerhouse of the economic world and the strength and significance of the dollar is too powerful.',
    'Crypto will fall because it has no inherent material value unless governments decide to utilize and govern it, in which case it will still lose value because it is initially attractive due to its decentralized, non-governed attributes.',
    'eSports, despite its immense growth over the past decade, is still limited by its surrounding stereotypes, relatively limited viewer pool, and relatively lower sponsorship.',
    'Many people support the underdog story because they relate due to it seeming like the world always has someone better than you out there, so support of the underdog is your mind trying to trick or tell you that you can still "win" despite being against all odds in your own life.',
    'Capitalism does indeed allow for the rich to get richer, but due to the constantly changing political environment and regimes, the middle-class can always claim a stake in the pot provided enough diligence and perseverence. However, the lower-class tends to suffer due to the fact that there is limited supply compared to incessantly increasing demands.',
    'K-Pop is globally prevalent, but its popularity is unhealthy due to the fact that it promotes external beauty moreso than good music. Many K-Pop stars enter lengthy (typically 7 years initially) contracts at the beginning of their careers and simply train for most of that time until they are granted an opportunity to debut. If they do not succeed, they are left with crippling debt. Even if they do succeed, more often than not, that success goes towards paying off the debt and so many stars retire with little saved or even debt piled up, leading to depression and even suicide.'
];

const reactions = [
    ':happy:',
    ':angry:',
    ':thumbsup:',
    ':sunglasses:',
    ':wink:',
    'OMG ur SO KEWL',
    'I totally agree with you!',
    'I disagree with what you said.',
    'I feel this topic is up for debate.',
    'Interesting!'
];

// Helper function to get random item from array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get random full name
const getRandomName = () => `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Get random thoughts with reactions attached
const getRandomThoughts = (x) => {
    let results = [];
    for (let i = 0; i < x; i++) {
        results.push({
            thoughtText: getRandomArrItem(thoughts),
            username: getRandomName(),
            reactions: [...getReactions(3)]
        });
    };
    return results;
};

const getReactions = (x) => {
    if (x === 1) {
        return getRandomArrItem(reactions);
    };

    const results = [];

    for (let i = 0; i < x; i++) {
        results.push({
            reactionBody: getRandomArrItem(reactions),
            username: getRandomName()
        });
    };

    return results;
};

module.exports = { getRandomThoughts, getRandomName };