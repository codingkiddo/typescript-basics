interface HelloProps {
    name: string;
  };
  
  const Hello = (props: HelloProps) => (
    <div>Hello, {props.name}</div>
  );