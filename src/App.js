import react, { useState } from "react";
import InputForm from "./components/inputForm";
import DisplayForm from "./components/displayForm";
import "./styles/index.css";

function App() {
  const [state, setState] = useState({
    personal: {
      fullName: "Chuckles McCodeMaster",
      title: "Full Stack Developer",
      mail: "real-john@notfake.com",
      location: "Real City / Fake Country",
      description: `An incredibly inept full stack developer with an uncanny ability to make a mess of even the simplest coding tasks. 
          Specialized in creating innovative bugs and programming blunders.`,
    },
    work: [
      {
        company: "Disastrous Bytes Co.",
        title: "Full-Stack Developer",
        start: "2019",
        end: "2019",
        description: `Designed and developed e-commerce websites that were so broken, customers couldn't even get to the checkout page.
          Worked closely with clients to misunderstand their requirements and deliver solutions that were light years away from what they needed.`,
      },
      {
        company: "Bug-O-Matic 3000 Co.",
        title: "Senior Error Generator",
        start: "2020",
        end: "2020",
        description: `Collaborated with the marketing team to create ad campaigns that left users scratching their heads and wondering if they had accidentally stumbled onto an avant-garde art website.`,
      },
    ],

    education: [
      {
        department: "Master of the Universe in Computer Science",
        school: "Supreme University of Infinite Wisdom",
        start: "2012",
        end: "2013",
        description:
          "Specialized in advanced coding techniques that haven't been discovered yet, but I'm keeping them secret to avoid causing mass hysteria.",
      },
      {
        department: "Bachelor of Disasters in Computer Science",
        school: "Catastrophic University",
        start: "2009",
        end: "2012",
        description:
          "Specialized in crafting code that defied all logic and caused professors to question their career choices.",
      },
    ],
  });

  function onChangeHandler(e) {
    const category = e.target.getAttribute("data-category");
    const field = e.target.getAttribute("data-field");
    const number = e.target.getAttribute("data-position");
    if (!number) {
      setState((prevState) => ({
        ...prevState,
        [category]: {
          ...prevState[category],
          [field]: e.target.value,
        },
      }));
    } else {
      setState((prevState) => {
        const newCategory = [...prevState[category]];
        newCategory[number][field] = e.target.value;
        return { ...prevState, [category]: newCategory };
      });
    }
  };

  function buttonHandler(e) {
    const [type, category] = e.target.getAttribute("data-category").split("-");
    setState((prevState) => {
      if (type === "add") {
        const keys = Object.keys(prevState[category][0]);
        const keysObject = {};
        for (let key of keys) {
          keysObject[key] = "";
        }
        const newCategory = [...prevState[category], keysObject];
        return { [category]: newCategory };
      } else if (type === "delete") {
        const newCategory = prevState[category].slice(0, -1);
        return { [category]: newCategory };
      } else return null;
    });
  }

  return (
    <div className="app">
      <InputForm
        personal={state.personal}
        work={state.work}
        education={state.education}
        handler={onChangeHandler}
        buttonHandler={buttonHandler}
      />
      <DisplayForm
        personal={state.personal}
        work={state.work}
        education={state.education}
      />
    </div>
  );
}

export default App;
