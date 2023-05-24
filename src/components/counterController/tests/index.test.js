import renderer from "react-test-renderer";
import Counter from "../counter";

it("It should render the snapshot", () => {
  const component = renderer.create(<Counter person="Subash" />);
  let tree = component.toJSON();

  expect(tree).toMatchSnapshot();

  console.log(tree.props);

  // trigger action
  renderer.act(() => {
    tree.props.onMouseEnter();
  });
  //re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // trigger action
  renderer.act(() => {
    tree.props.onMouseLeave();
  });
  //re-render
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
