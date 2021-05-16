const byID = (id) => {
  const DOMByID = document.getElementById(id);
  if (!DOMByID) throw new Error('Not found', id);
  return DOMByID;
};

const createElement = (nameDOM, className) => {
  const newEl = document.createElement(nameDOM);
  newEl.classList.add(className);
  return newEl;
}

export { byID, createElement };
