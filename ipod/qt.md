import "./styles.css";

export default function App() {
  return (
    <div>
      {/* Remove the code given below */}

      <h1>Welcome Ninja!!</h1>
      <p>Write your code here!</p>
      <p>Feel free to change the directory structure and CSS to your liking.</p>
      <p>Do not delete any .json file from CodeSandbox</p>
      <h2>Problem Statement:</h2>
      <p>
        Build an iPod using React.js. The following are the instructions:
        <br />
        <ul>
          <li>
            {" "}
            Build a menu of options like you see such as Settings, Games, Music
            etc
          </li>
          <li> On clicking of the centre button go inside the menu</li>
          <li>
            {" "}
            Clicking on the menu should hide the menu and open a screen of that
            particular option, like settings, games etc
          </li>
          <li>
            {" "}
            Click and hold on the circular menu and move the mouse in a circular
            fashion inside the menu boundary (white circle is the menu) to
            navigate in the iPod menu
          </li>
          <li>
            {" "}
            Clicking on <b>“Menu”</b> should take you back to the main menu
          </li>
          <li>
            {" "}
            (Optionally) can create sub menu inside menu like in Music option,
            it has sub menu with options <b>“All songs”</b>, <b>“Artists”</b>{" "}
            etc
          </li>
        </ul>
        <br />
        Try to build it yourself first, if anyone is having any difficulty
        please view the hints document.
        <br />
        <br />
        Final project video -{" "}
        <a
          href="https://www.youtube.com/watch?v=i51oAF7ibmo&feature=youtu.be"
          target="_blank"
        >
          Link
        </a>
        <br />
        Hints link -{" "}
        <a
          href="https://docs.google.com/document/d/1BV9ek7XDSFGiVVvV_iZ3nmJNknrs3WG1b2tfjkP5XNg/edit?usp=sharing"
          target="_blank"
        >
          Link
        </a>
      </p>

      {/* Remove the above code and start from here */}
    </div>
  );
}
