//The purpose of this comp is to show that render(<Greeting />)
//renders the entire comp tree.

const Output = (props) => {
  return <p>{props.children}</p>;
};

export default Output;
