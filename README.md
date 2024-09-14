# React-Silly-Bot

### Web Development Homework 1: Create a React Chat Interface with a Simple Bot

#### **Problem Statement:**

You are required to design a **React-based chat interface** that mimics the look and feel of popular messaging platforms like Discord or Slack. The chat interface will only support a **single human user**, and there is **no backend** involved. The user will interact with a **bot** that performs text transformations on their input and responds with the result in the chat interface.

#### **Objectives:**
- Build a **simple chat interface** with React that allows users to send messages and receive responses.
- The bot will perform various transformations on the user's input text such as:
  - **Counting words** in the message.
  - **Counting vowels and consonants**.
  - **Finding the most frequent letter**.
  - **Reversing the text**.
  - **Jumbling the words**.
  - **Convert text to uppercase**: The bot replies with the entire message converted to uppercase.
  - **Convert text to lowercase**: The bot replies with the entire message converted to lowercase.
  - **Capitalize each word**: The bot capitalizes the first letter of each word in the message.
  - **Count the number of characters**: The bot counts and returns the total number of characters (including spaces).
  - **Remove all vowels**: The bot removes all vowels from the message.
  - **Remove all consonants**: The bot removes all consonants from the message.
  - **Repeat each word twice**: The bot repeats each word in the message twice.
  - **Replace spaces with underscores**: The bot replaces every space in the message with an underscore (`_`).
  - **Shuffle characters in each word**: The bot shuffles the letters in each word but keeps the word order intact.
- The user should see their message displayed in the chat window, followed by the bot’s response based on the transformation. 

#### **Instructions:**

1. **App Structure:**
   - Use **React** to create the app. You are allowed to use **functional components** and **hooks** such as `useState` and `useEffect`.
   - The app should have a simple **input field** where the user can type messages and a **send button** to submit the message.
   - Display the user's message in the chat window immediately after submission.
   - The bot should reply within a short delay (e.g., 1 second) after receiving the user's message.
   
2. **Bot Functionality:**
   - The bot should randomly choose one of the transformations listed above and apply it to the user’s message before responding. Bot should tell what transformation it applied.
   - The bot's response should be displayed in the chat window just like a real-time conversation.
   - You do **not** need to create complex AI behavior. Simple transformations like reversing the text or counting words are sufficient, as given in the transformation examples above. Do any 5 transformations.
   
3. **Design Guidelines:**
   - The chat interface should visually resemble modern chat apps like Slack or Discord.
   - Use **CSS** to style the messages, making sure the user's messages and the bot's messages are distinguishable.
   - The chat should have a scrolling window that shows the history of the conversation.
   - Add basic **input validation** to ensure that the user doesn’t send empty or invalid messages.

4. **Features to Implement:**
   - **Send message feature**: User types a message and sends it by clicking a button or pressing Enter.
   - **Bot response feature**: The bot responds to every message after a small delay with a transformed version of the message.
   - **Message display**: Show both the user’s and bot’s messages in a chat history.
   - **Scroll feature**: The chat window should scroll down when new messages are added.

5. **Dos and Don’ts:**
   - **Do** focus on frontend only; no backend or database is required.
   - **Do** style your app to make it clean and easy to use.
   - **Do** ensure the app works in any modern browser.
   - **Do** use only React and standard web technologies like HTML, CSS, and JavaScript.
   - **Don’t** use any external APIs or libraries that manage chat or message processing.
   - **Don’t** implement advanced machine learning or natural language processing; simple text transformations are enough.
   - **Don’t** worry about persisting chat history across page reloads.

6. **Grading Criteria:**
   - **Functionality**: How well does your app work according to the specifications?
   - **User Interface**: Is the chat interface visually appealing and intuitive to use?
   - **Code Quality**: Is the code well-structured and commented where necessary?
   - **Creativity**: Did you implement any extra features (e.g., different bot behaviors) or unique design elements?

#### **Submission:**
- Submit the full project as a **GitHub repository**. Include clear instructions in the `README.md` on how to run the app.
- The deadline for submission is **[Thursday, Sep 19, 2024]**.

#### **Bonus:**
You can earn extra points if you add one or more of the following:
- **Multiple bots** that each perform a different transformation.
- A **random bot name** that changes with every message or specific to a transformation (e.g., “HelperBot” or “TextBot”).
- **Theme switcher** (e.g., dark mode/light mode).


#### **Team Information:**
Instructor : Amber Jain & Jeet Mukharji
Team Name : SuDoCoder
Team Member : Sahil Kumar & Nagmani Kumar

