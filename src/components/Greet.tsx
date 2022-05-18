type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <>
      <h1>
        {props.isLoggedIn
          ? `Welcome ${props.name} message send ${messageCount}`
          : "Welcom Greet"}
      </h1>
    </>
  );
};
