import Section from "../components/Section";
import Task from "../components/Task";

function Context() {
  return (
    <Section level={1}>
      <Task>Title</Task>
      <Section level={2}>
        <Task>Heading</Task>
        <Task>Heading</Task>
        <Task>Heading</Task>
        <Section level={3}>
          <Task>Sub-heading</Task>
          <Task>Sub-heading</Task>
          <Task>Sub-heading</Task>
          <Section level={4}>
            <Task>Sub-sub-heading</Task>
            <Task>Sub-sub-heading</Task>
            <Task>Sub-sub-heading</Task>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

export default Context;
