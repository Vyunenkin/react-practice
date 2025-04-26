import { useEffect, useState } from "react";

export default function Greeting(props) {
  const [name, setName] = useState(props.name);
  const [changed, setChanged] = useState(false);

  useEffect(() => {
    if (props.name !== name) {
      setName(props.name);
      setChanged(true);
    }
  }, [props.name]);

  return (
    <div className="greeting">
      {changed ? (
        <h2>Привет, у тебя поменялось имя, теперь ты {name}!</h2>
      ) : (
        <h2>Привет, {name}!</h2>
      )}
    </div>
  );
}
