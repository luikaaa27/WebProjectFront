import {Recipe} from './recipes';
export const myRecipes: Recipe[] = [
  {
      name: 'Mango Daiquiris',
      id: 16 ,
      categoryId: 4,
      ingredients: '1 ripe mango, peeled, seeded and chopped\n' +
        '\n' +
        '1/4 cup lime juice (2 limes)\n' +
        '\n' +
        '1 teaspoon sugar syrup\n' +
        '\n' +
        '3/4 cup white rum\n' +
        '\n' +
        'Crushed Ice',
      description: 'Place the mango, lime juice, sugar syrup and rum in a blender and process until smooth.\n' +
        'Pour the mixture over a glass full of crushed ice.\n' +
        'Note: To make sugar syrup, heat 1 cup sugar and 1 cup water in a small saucepan until the sugar dissolves.' ,
      rating: 4 ,
      image: 'https://tipsybartender.imgix.net/2018/01/Double-Mango-Daiquiri.jpg',
  },
  {
    name: 'Minestrone Soup',
    id: 17 ,
    categoryId: 2,
    ingredients: '2 tablespoons extra-virgin olive oil\n' +
      '\n' +
      '1 large onion, diced\n' +
      '\n' +
      '4 cloves garlic, minced\n' +
      '\n' +
      '2 stalks celery, diced\n' +
      '\n' +
      '1 large carrot, diced\n' +
      '\n' +
      '1/3 pound green beans, trimmed and cut into 1/2-inch pieces (about 1 1/2 cups)\n' +
      '\n' +
      '1 teaspoon dried oregano\n' +
      '\n' +
      '1 teaspoon dried basil\n' +
      '\n' +
      'Kosher salt and freshly ground pepper\n' +
      '\n' +
      '1 28-ounce can no-salt-added diced tomatoes\n' +
      '\n' +
      '1 14-ounce can crushed tomatoes\n' +
      '\n' +
      '6 cups low-sodium chicken broth\n' +
      '\n' +
      '1 15-ounce can low-sodium kidney beans, drained and rinsed\n' +
      '\n' +
      '1 cup elbow pasta\n' +
      '\n' +
      '1/3 cup finely grated parmesan cheese\n' +
      '\n' +
      '2 tablespoons chopped fresh basil',
    // tslint:disable-next-line:max-line-length
    description: 'Heat the olive oil in a large pot over medium-high heat. Add the onion and cook until translucent, about 4 minutes. Add the garlic and cook 30 seconds. Add the celery and carrot and cook until they begin to soften, about 5 minutes. Stir in the green beans, dried oregano and basil, 3/4 teaspoon salt, and pepper to taste; cook 3 more minutes.\n' +
      // tslint:disable-next-line:max-line-length
      'Add the diced and crushed tomatoes and the chicken broth to the pot and bring to a boil. Reduce the heat to medium low and simmer 10 minutes. Stir in the kidney beans and pasta and cook until the pasta and vegetables are tender, about 10 minutes. Season with salt. Ladle into bowls and top with the parmesan and chopped basil.' ,
    rating: 4 ,
    // tslint:disable-next-line:max-line-length
    image: 'https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco/k%2FPhoto%2FRecipes%2F2019-12-How-To-Classic-Minestrone-Soup%2FHT-Classic-Minestrone-Soup_036',
  }
];
