import * as categories from './categories';

export default function getCategory(componentName: string) {
  const foundCategory = Object.keys(categories).find(category =>
    categories[category].includes(componentName)
  );
  if (!foundCategory) throw new Error(`Unable to find category for component ${componentName}.`);
  const categoryName = foundCategory.replace(/Components$/, '').replace(/([A-Z])/g, ' $1');
  return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
}
