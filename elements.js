const createEl = (el, props) => {
  const { children, isList, ...rest } = props;

  if(isList === true){
    return React.createElement(el, rest, children);
  }

  if (Array.isArray(children)) {
    return React.createElement(el, rest, ...children);
  }

  return React.createElement(el, rest, children);
};

const Element = (el, props) => {
  return createEl(el, props)
};

const Division = (props) => {
  return createEl("div", props)
};

const BreakLine = () => React.createElement("br");
const Image = (props) => React.createElement("img", props);

const Paragraph = (props) => {
  return createEl("p", props)
};

const Heading = (props) => {
  const { level = 1, ...rest } = props;
  return createEl(`h${level}`, rest)
};

const Span = (props) => {
  return createEl("span", props)
};

const Button = (props) => {
  return createEl("button", props)
};
