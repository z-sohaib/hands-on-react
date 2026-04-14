import { LevelContext } from "../context/LevelContext";

export default function Section({ level, children }) {
  return (
    <LevelContext value={level}>
      <section className="section">{children}</section>
    </LevelContext>
  );
}
