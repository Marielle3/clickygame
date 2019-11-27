import React from "react";
import Wrapper from "./components/Wrapper";
import JumboTron from "./components/JumboTron";
import Characters from "./components/Characters";
import characters from "./characters.json";

function App() {
  return (
    <Wrapper>
      <JumboTron>Friends List</JumboTron>
      <Characters
        name={characters[0].name}
        image={characters[0].image}
      />
      <Characters
        name={characters[1].name}
        image={characters[1].image}
      />
      <Characters
        name={characters[2].name}
        image={characters[2].image}
      />
       <Characters
        name={characters[3].name}
        image={characters[3].image}
      />
       <Characters
        name={characters[4].name}
        image={characters[4].image}
      />
       <Characters
        name={characters[5].name}
        image={characters[5].image}
      />
       <Characters
        name={characters[6].name}
        image={characters[6].image}
      />
       <Characters
        name={characters[7].name}
        image={characters[7].image}
      />
       <Characters
        name={characters[8].name}
        image={characters[8].image}
      />
       <Characters
        name={characters[9].name}
        image={characters[9].image}
      />
       <Characters
        name={characters[10].name}
        image={characters[10].image}
      />
    </Wrapper>
  );
}

export default App;
