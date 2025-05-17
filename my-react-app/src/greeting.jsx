import { useEffect, useRef } from "react";

export default function Greeting({ name }) {
  const prevName = useRef(name);

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div className="greeting">
      {prevName.current !== name ? (
        <h2>Привет, у тебя поменялось имя, теперь ты {name}!</h2>
      ) : (
        <h2>Привет, {name}!</h2>
      )}
    </div>
  );
}
