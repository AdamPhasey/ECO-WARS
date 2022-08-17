import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Cards from "../Components/Cards";
import SubmitButton from "../Components/SubmitButton";

const teamData ={
  ECOders: {Amaan: 6, Adam: 8, Carlos: 2, Kendal: 12},
  BAE: {Jem: 0, Paul: 7, Andy: 3, Alex: 11},
  SoC:{Liz: 2, Arshi: 6, Jordan: 9, Kazeem: 13},
}

export default function Submission() {
  return (
    <>
      <header>
        <title>Eco Wars App</title>
      </header>
      <div>
        <img className="" src="../eco-wars.png"/>
        <h1>ECOders Team</h1>
      </div>
      <h1>How did you get into work today?</h1>
      <div>
      {Object.keys(teamData.ECOders).map((key) => (
        <Cards key={key} name={key} score={teamData.ECOders[key]} />
      ))}
      </div>
      <div>
        <h1>Submit your teams results</h1>
        <SubmitButton/>
      </div>
    </>
  );
}
