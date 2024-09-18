import React from 'react';

const BotTransformations = ({ text }) => {
  const transformations = [
    {
      name: "Count Words",
      func: (text) => `Word count: ${text.trim().split(/\s+/).length}`,
    },
    {
      name: "Count Vowels and Consonants",
      func: (text) => {
        const vowels = text.match(/[aeiouAEIOU]/g)?.length || 0;
        const consonants = text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
        return `Vowels: ${vowels}, Consonants: ${consonants}`;
      },
    },
    {
      name: "Most Frequent Letter",
      func: (text) => {
        const frequency = {};
        let maxFreq = 0;
        let maxChar = "";

        for (let char of text.replace(/\s/g, "").toLowerCase()) {
          frequency[char] = (frequency[char] || 0) + 1;
          if (frequency[char] > maxFreq) {
            maxFreq = frequency[char];
            maxChar = char;
          }
        }
        return `Most frequent letter: ${maxChar} (appeared ${maxFreq} times)`;
      },
    },
    {
      name: "Reverse Text",
      func: (text) => `Reversed: ${text.split("").reverse().join("")}`,
    },
    {
      name: "Jumble Words",
      func: (text) => {
        const words = text.split(" ");
        const jumbled = words.map((word) =>
          word.split("").sort(() => 0.5 - Math.random()).join("")
        );
        return `Jumbled: ${jumbled.join(" ")}`;
      },
    },
    {
      name: "Uppercase",
      func: (text) => `Uppercase: ${text.toUpperCase()}`,
    },
    {
      name: "Lowercase",
      func: (text) => `Lowercase: ${text.toLowerCase()}`,
    },
    {
      name: "Capitalize Each Word",
      func: (text) =>
        `Capitalized: ${text
          .toLowerCase()
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")}`,
    },
    {
      name: "Count Characters",
      func: (text) => `Character count (including spaces): ${text.length}`,
    },
    {
      name: "Remove All Vowels",
      func: (text) => `Without vowels: ${text.replace(/[aeiouAEIOU]/g, "")}`,
    },
    {
      name: "Remove All Consonants",
      func: (text) => `Without consonants: ${text.replace(/[^aeiouAEIOU\s]/g, "")}`,
    },
    {
      name: "Repeat Each Word Twice",
      func: (text) =>
        `Repeated words: ${text
          .split(" ")
          .map((word) => `${word} ${word}`)
          .join(" ")}`,
    },
    {
      name: "Replace Spaces with Underscores",
      func: (text) => `With underscores: ${text.replace(/\s/g, "_")}`,
    },
    {
      name: "Shuffle Characters in Each Word",
      func: (text) => {
        const words = text.split(" ");
        const shuffled = words.map((word) =>
          word.split("").sort(() => Math.random() - 0.5).join("")
        );
        return `Shuffled: ${shuffled.join(" ")}`;
      },
    },
  ];

  const getRandomTransformation = (text) => {
    const randomIndex = Math.floor(Math.random() * transformations.length);
    const transformation = transformations[randomIndex];
    return { result: transformation.func(text), transformationName: transformation.name };
  };

  const { result, transformationName } = getRandomTransformation(text);

  return (
    <div>
      <p>Transformation applied: {transformationName}</p>
      <p>{result}</p>
    </div>
  );
};

export default BotTransformations;
