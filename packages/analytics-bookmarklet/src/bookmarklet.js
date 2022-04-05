// ==Bookmarklet==
// @style !loadOnce data:text/css,.recipe:not(span) %7b border: 1px dashed yellow;
// @style !loadOnce data:text/css,span.recipe %3e * %7b border: 1px dashed yellow;
// @style !loadOnce data:text/css,.not-recipe:not(span) %7b border: 1px dashed red;
// @style !loadOnce data:text/css,span.not-recipe %3e * %7b border: 1px dashed red;
// @style !loadOnce https://cdn.jsdelivr.net/npm/toastify-js/src/toastify.min.css
// @script !loadOnce https://cdn.jsdelivr.net/npm/toastify-js
// ==/Bookmarklet==

/* eslint-disable no-underscore-dangle */
/* eslint-disable no-proto */
/* eslint-disable no-param-reassign */

function getFiberNode(el) {
  const key = Object.keys(el).find(k => k.startsWith('__reactInternalInstance$'));
  return key ? el[key] : null;
}

function findClosestStyledComponent(el) {
  let fiberNode = getFiberNode(el);

  while (fiberNode && fiberNode.return) {
    fiberNode = fiberNode.return;

    if (
      typeof fiberNode.elementType === 'object' &&
      fiberNode.elementType &&
      'withComponent' in fiberNode.elementType
    )
      return fiberNode.type;

    if (typeof fiberNode.elementType === 'string') return null;
  }

  return null;
}

function walkTheDOM(node, func) {
  func(node);
  node = node.firstChild;
  while (node) {
    walkTheDOM(node, func);
    node = node.nextSibling;
  }
}

let version;

walkTheDOM(document.body, node => {
  if (node.nodeType === 3) return;

  const Component = findClosestStyledComponent(node);

  const ownedByRecipe = !Component ? node.parentElement.ownedByRecipe : Boolean(Component.__recipe);

  if (!version && Component && Component.__recipe) version = `v${Component.__recipe}`;

  node.ownedByRecipe = ownedByRecipe;

  if (Component) node.classList.add(ownedByRecipe ? 'recipe' : 'not-recipe');
});

const recipeCount = document.querySelectorAll(`.recipe`).length;
const nonRecipeCount = document.querySelectorAll(`.not-recipe`).length;
const total = recipeCount + nonRecipeCount;
const usage = Math.trunc((100 / total) * recipeCount);

window
  .Toastify({
    text: `<div><div>Recipe: ${
      version || 'unknown version'
    }</div><div>Recipe usage: ${usage}%</div><div>Recipe instances: ${recipeCount}</div><div>Other styled instances: ${nonRecipeCount}</div></div>`,
    duration: 100000,
    gravity: 'bottom',
    position: 'right',
    backgroundColor: '#0f3443',
  })
  .showToast();
