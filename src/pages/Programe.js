import HeroSectionPrograme from "../components/HeroSectionPrograme";
import Menu from "../components/Menu";
import MenuOnMob from "../components/MenuOnMob";

import ProgrameCard from "../components/ProgrameCard";

const Programe = () => {
  const h1 = (
    <h1>
      Programes <br />
      &Certificates
    </h1>
  );

  return (
    <div
      style={{
        backgroundColor: "#f3eade",
        position: "relative",
        paddingBottom: "40px",
      }}
    >
      <MenuOnMob />
      <Menu />
      <div>
        <HeroSectionPrograme textH1={h1} />
        <div className="the-cool">
          <ProgrameCard />
          <ProgrameCard />
          <ProgrameCard />
          <ProgrameCard />
          <ProgrameCard />
          <ProgrameCard />
          <ProgrameCard />
          <ProgrameCard />
        </div>
      </div>
    </div>
  );
};

export default Programe;
