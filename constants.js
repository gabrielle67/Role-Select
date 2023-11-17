// strings and lists

// Example player data
const exampleData = [
    { name: "Player 1", preferences: ["Tank", "DPS", "Support"] },
    { name: "Player 2", preferences: ["DPS", "Support"] },
    { name: "Player 3", preferences: ["Support"] },
    { name: "Player 4", preferences: ["Tank", "DPS"] },
    { name: "Player 5", preferences: ["DPS", "Support"] },
    { name: "Player 6", preferences: ["Tank", "Support"] },
    { name: "Player 7", preferences: ["Tank"] },
    { name: "Player 8", preferences: ["DPS", "Support"] },
    { name: "Player 9", preferences: ["Tank", "DPS", "Support"] },
    { name: "Player 10", preferences: ["DPS", "Support"] },
  ];

  const exampleData2 = [
    { name: "Player 1", preferences: ["DPS", "Support"] },
    { name: "Player 2", preferences: ["DPS", "Support"] },
    { name: "Player 3", preferences: ["DPS", "Support"] },
    { name: "Player 4", preferences: ["Tank", "DPS"] },
    { name: "Player 5", preferences: ["DPS", "Support"] },
    { name: "Player 6", preferences: ["DPS","Support"] },
    { name: "Player 7", preferences: ["DPS", "Tank"] },
    { name: "Player 8", preferences: ["DPS", "Support"] },
    { name: "Player 9", preferences: ["DPS", "Support"] },
    { name: "Player 10", preferences: ["DPS", "Support"] },
  ];

  const exampleNoTanks = [
    { name: "Player 1", preferences: ["DPS", "Support"] },
    { name: "Player 2", preferences: ["DPS", "Support"] },
    { name: "Player 3", preferences: ["DPS", "Support"] },
    { name: "Player 4", preferences: ["DPS"] },
    { name: "Player 5", preferences: ["DPS", "Support"] },
    { name: "Player 6", preferences: ["DPS","Support"] },
    { name: "Player 7", preferences: ["DPS",] },
    { name: "Player 8", preferences: ["DPS", "Support"] },
    { name: "Player 9", preferences: ["DPS", "Support"] },
    { name: "Player 10", preferences: ["DPS", "Support"] },
  ];

  const exampleExcessiveSolo = [
    { name: "Player 1", preferences: ["DPS", "Support"] },
    { name: "Player 2", preferences: ["DPS", "Support"] },
    { name: "Player 3", preferences: ["DPS", "Support"] },
    { name: "Player 4", preferences: ["Tank"] },
    { name: "Player 5", preferences: ["DPS", "Support"] },
    { name: "Player 6", preferences: ["Tank"] },
    { name: "Player 7", preferences: ["Tank",] },
    { name: "Player 8", preferences: ["Tank"] },
    { name: "Player 9", preferences: ["Tank"] },
    { name: "Player 10", preferences: ["Tank"] },
  ];

const roleOptions = [
  'Tank',
  'DPS',
  'Support'
]

const emojis = [
  '🛡️',
  '🔫',
  '💉'
]

const createTeamDescription = 'Takes role preferences of 10 players and creates 2 teams of 5 with 1 Tank, 2 DPS, and 2 Supports';
const createTeamMessage = 'React to this message to select your roles within the next 30 seconds.\n\n🛡️ Tank\n🔫 DPS\n💉 Support';

exports.exampleData = exampleData;
exports.exampleData2 = exampleData2;
exports.exampleNoTanks = exampleNoTanks;
exports.exampleExcessiveSolo = exampleExcessiveSolo;

exports.roleOptions = roleOptions;
exports.emojis = emojis;

exports.createTeamMessage = createTeamMessage;
exports.createTeamDescription = createTeamDescription;