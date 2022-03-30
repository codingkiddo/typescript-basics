interface HelloProps {
    name: string;
  };
  
  const Hello = (props: HelloProps) => (
    <div>Hello, {props.name}</div>
  );
  
var element = <Hello name="Vinod" />