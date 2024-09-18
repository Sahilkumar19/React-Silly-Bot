function BotTransformations(message) {
  if (!message.trim()) {
    return "Please enter a message.";
  }

  const transformations = [
    (msg) => `Word count: ${msg.split(' ').filter(Boolean).length}`,
    (msg) => `Vowel count: ${msg.match(/[aeiouAEIOU]/g)?.length || 0}`,
    (msg) => `Most frequent letter: ${getMostFrequentLetter(msg)}`,
    (msg) => `Reversed text: ${msg.split('').reverse().join('')}`,
    (msg) => `Uppercase: ${msg.toUpperCase()}`,
    (msg) => `Lowercase: ${msg.toLowerCase()}`,
    (msg) => `Palindrome check: ${isPalindrome(msg) ? "Yes" : "No"}`,
    (msg) => `Word frequency: ${JSON.stringify(getWordFrequency(msg))}`,
    (msg) => `Remove whitespace: ${msg.replace(/\s+/g, '')}`,
    (msg) => `Alternating case: ${alternateCase(msg)}`,
    (msg) => `Shuffled words: ${shuffleWords(msg)}`,
    (msg) => `Random response: ${getRandomResponse()}`,
  ];

  // Pick a random transformation
  const transform = transformations[Math.floor(Math.random() * transformations.length)];
  return transform(message);
}

function getMostFrequentLetter(str) {
  const frequency = {};
  let maxFreq = 0;
  let mostFrequent = '';
  for (const char of str) {
    if (char.match(/[a-zA-Z]/)) {
      frequency[char.toLowerCase()] = (frequency[char.toLowerCase()] || 0) + 1;
      if (frequency[char.toLowerCase()] > maxFreq) {
        maxFreq = frequency[char.toLowerCase()];
        mostFrequent = char;
      }
    }
  }
  return mostFrequent || 'None';
}

function isPalindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, '').toLowerCase();
  return cleanStr === cleanStr.split('').reverse().join('');
}

function getWordFrequency(str) {
  const words = str.toLowerCase().match(/\b\w+\b/g) || [];
  return words.reduce((freq, word) => {
    freq[word] = (freq[word] || 0) + 1;
    return freq;
  }, {});
}

function alternateCase(str) {
  return str
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join('');
}

function shuffleWords(str) {
  const words = str.split(' ');
  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }
  return words.join(' ');
}

function getRandomResponse() {
  const responses = [
    "That's interesting!",
    "Tell me more!",
    "I didn't know that!",
    "Fascinating!",
    "Hmm, I see.",
  ];
  return responses[Math.floor(Math.random() * responses.length)];
}

export default BotTransformations;
