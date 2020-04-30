export interface Recipe {
  name: string;
  id: number;
  categoryId: number;
  ingredients: string;
  description: string;
  rating: number;
  image: string;
}
export const RECIPES: Recipe[] = [
  {
    name: 'Garlic Pita Bread Bites',
    id: 6,
    categoryId: 0,
    ingredients: '4 medium-size whole wheat pitas\n' +
      '\n' +
      '4 medium-size white pitas\n' +
      '\n' +
      '4 tablespoons unsalted butter\n' +
      '\n' +
      '6 cloves garlic, minced\n' +
      '\n' +
      '3 tablespoons minced fresh parsley\n' +
      '\n' +
      '1/4 cup grated Parmesan\n' +
      '\n' +
      'Kosher salt and freshly cracked black pepper',
    description: 'Preheat the oven to 350 degrees F. Cut the pitas into 6 wedges. \n' +
      // tslint:disable-next-line:max-line-length
      'In a medium saucepan, add the butter and garlic. Set over medium heat and warm through until the butter melts' +
      ' and the garlic becomes fragrant, ' +
      '5 to 6 minutes. ' +
      'Add the parsley and mix well.\n' +
      // tslint:disable-next-line:max-line-length
      'Place the pita wedges in a large bowl and pour the garlic butter over the top. ' +
      'Toss well to combine and coat everything evenly. ' +
      'Spread the pita wedges out evenly on a sheet tray and dust with the grated Parmesan. ' +
      'Bake in the oven until golden and crispy, 12 to 15 minutes.' +
      ' Remove from the oven and taste. Adjust seasonings with salt and pepper, if necessary. Serve warm.',
    rating : 4,
    image: 'https://vaya.in/recipes/wp-content/uploads/2019/03/Garlic-Pita-Bread-Bites.jpg',
  },
  {
    name: 'Chocolate Cake',
    id: 7,
    categoryId: 1,
    ingredients: 'Cooking spray\n' +
      '\n' +
      '1 cup unsweetened cocoa powder (natural or Dutch process)\n' +
      '\n' +
      '2 1/2 cups all-purpose flour\n' +
      '\n' +
      '2 cups sugar\n' +
      '\n' +
      '1 1/2 teaspoons baking powder\n' +
      '\n' +
      '1 teaspoon baking soda\n' +
      '\n' +
      '1 teaspoon salt\n' +
      '\n' +
      '3 large eggs, at room temperature\n' +
      '\n' +
      '3/4 cup vegetable oil\n' +
      '\n' +
      '1/2 cup sour cream\n' +
      '\n' +
      '2 teaspoons vanilla extract',
    // tslint:disable-next-line:max-line-length
    description: 'Preheat the oven to 350 degrees F. ' +
      'Coat two 9-inch-round cake pans with cooking spray ' +
      'and line the bottoms with parchment paper.\n' +
      // tslint:disable-next-line:max-line-length
      'Whisk the cocoa powder and 1 1/2 cups boiling water in a ' +
      'medium bowl until smooth; set aside. Whisk the flour, sugar, ' +
      'baking powder, baking soda and salt in a large bowl until combined. ' +
      'Add the eggs, vegetable oil, sour cream and vanilla and beat with a' +
      ' mixer on medium speed until smooth, about 1 minute.' +
      ' Reduce the mixer speed to low; beat in the cocoa mixture in ' +
      'a steady stream until just combined, then finish mixing ' +
      'with a rubber spatula. (The batter will be thin.)\n' +
      // tslint:disable-next-line:max-line-length
      'Divide the batter between the prepared pans ' +
      'and tap the pans against the counter to help the batter settle.' +
      ' Bake until a toothpick inserted into the middle comes out clean,' +
      ' 30 to 40 minutes. Transfer to racks and let cool 10 minutes, ' +
      'then run a knife around the edge of the pans and turn the cakes out ' +
      'onto the racks to cool completely. Remove the parchment. ' +
      'Trim the tops of the cakes with a long serrated knife to make' +
      ' them level, if desired.',
    rating: 5,
    // tslint:disable-next-line:max-line-length
    image: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcdn-image.foodandwine.com%2Fsites%2Fdefault%2Ffiles%2F1532533774%2Fmoms-chocolate-cake-XL-RECIPE0918.jpg',
  },
  {
    name: 'Chicken Legs',
    id: 8,
    categoryId: 3,
    ingredients: '1 cup seasoned flour\n' +
      '\n' +
      '2 eggs\n' +
      '\n' +
      '3 cups Cheerios (processed to powder)\n' +
      '\n' +
      '6 chicken legs\n' +
      '\n' +
      '1/4 cup canola oil ',
    // tslint:disable-next-line:max-line-length
    description: 'Set out 3 shallow containers on counter and fill 1 with the flour, 1 with eggs and 1 with Cheerios. Dip each chicken leg to coat in first the flour, shaking off the excess, then the egg, and last the Cheerios. Heat canola oil in pan and place the coated chicken legs side by side in a pan turning to brown evenly. Cook 20 to 25 minutes until legs are cooked through.',
    rating: 5,
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-190808-baked-drumsticks-0217-landscape-pf-1567089281.jpg',
  },
  {
    name: 'Apple cake',
    id: 9,
    categoryId: 1,
    ingredients: 'Cake:\n' +
      '2 tablespoons unsalted butter, softened\n' +
      '\n' +
      '3 cups plus 2 tablespoons all-purpose flour \n' +
      '\n' +
      '2 cups granulated sugar \n' +
      '\n' +
      '1 1/2 cups vegetable oil \n' +
      '\n' +
      '3 large eggs \n' +
      '\n' +
      '1/2 cup orange juice \n' +
      '\n' +
      '1 teaspoon vanilla extract \n' +
      '\n' +
      '1 teaspoon baking soda \n' +
      '\n' +
      '1/2 teaspoon ground cinnamon \n' +
      '\n' +
      '1/2 teaspoon kosher salt \n' +
      '\n' +
      '2 to 2 1/2 cups peeled, cored and finely diced sweet apples\n' +
      '\n' +
      '1 cup walnuts, finely chopped \n' +
      '\n' +
      'Glaze:\n' +
      '3/4 cup granulated sugar\n' +
      '\n' +
      '6 tablespoons (3/4 stick) unsalted butter \n' +
      '\n' +
      '1/3 cup buttermilk \n' +
      '\n' +
      '1/2 teaspoon baking soda  ',
    // tslint:disable-next-line:max-line-length
    description: 'For the cake: Preheat the oven to 325 degrees F. Mix together the softened butter with 2 tablespoons of the flour to make a paste. In a 10-inch Bundt pan, paint on the flour and butter paste with a pastry brush until the pan is well coated.\n' +
      // tslint:disable-next-line:max-line-length
      'Using an electric mixer, beat the sugar, oil and eggs until smooth. Add the orange juice and vanilla extract and mix well. In another bowl, sift together the baking soda, cinnamon, salt and remaining 3 cups flour. Add the flour mixture to the sugar mixture and continue to beat well. Stir in the apples and walnuts.\n' +
      // tslint:disable-next-line:max-line-length
      'Pour the batter into the pan and bake until a toothpick inserted in the cake comes out clean, about 1 hour 30 minutes. Remove the cake from the oven and let it cool in the pan for 15 minutes. Turn the cake out onto a cake plate.\n' +
      // tslint:disable-next-line:max-line-length
      'For the glaze: Combine the sugar, butter, buttermilk and baking soda in a large saucepan and bring to a boil. Boil the mixture until it thickens slightly and begins to turn a light brown, 5 to 10 minutes. Remove from the heat.\n' +
      // tslint:disable-next-line:max-line-length
      'Using a toothpick, punch 15 to 20 holes in the top of the cake and pour the glaze over the cake. Let the cake set and cool before serving. Store the cake in an airtight cake carrier in the refrigerator for up to 2 weeks.',
    rating: 5,
    image: 'https://kirbiecravings.com/wp-content/uploads/2019/11/4-ingredient-apple-cake-5.jpg',
  },
  {
    name: 'Strawberry smoothie',
    id: 10,
    categoryId: 4,
    // tslint:disable-next-line:max-line-length
    description: 'Blend 2 cups strawberries, 1 cup crumbled pound cake, 1 1/2 cups each milk and ice, and sugar to taste. Top with whipped cream and more strawberries.',
    ingredients: ' 1/4 cup Smucker\'s® Orchard\'s Finest® Pacific Mountain Strawberry Preserves\n' +
      '\n' +
      '1/2 cup orange juice\n' +
      '\n',
    rating: 5,
    image: 'https://www.dinneratthezoo.com/wp-content/uploads/2018/05/strawberry-banana-smoothie-4.jpg',
  },
  {
    name: 'Apple Donuts',
    id: 11,
    categoryId: 0,
    // tslint:disable-next-line:max-line-length
    description: 'Slice the top and bottom from each apple and discard. Slice the apples into 1/2-inch circles. Use a biscuit cutter or small melon baller to cut a hole in the center of each to make a "donut."\n' +
      // tslint:disable-next-line:max-line-length
      'Put the chocolate-hazelnut spread and peanut butter in separate pastry bags (or put in separate ziptop bags and snip off a corner).\n' +
      // tslint:disable-next-line:max-line-length
      'Top the apple rings with either the chocolate-hazelnut spread, peanut butter or yogurt. (Pipe the chocolate-hazelnut spread or peanut butter, then spread carefully with a knife or offset spatula; spread the yogurt with a spoon.) Garnish each with a variety of the toppings.',
    ingredients: '3 apples\n' +
      '\n' +
      '1/3 cup chocolate-hazelnut spread \n' +
      '\n' +
      '1/3 cup peanut butter \n' +
      '\n' +
      '1/3 cup strawberry Greek yogurt \n' +
      '\n' +
      'Suggested toppings: small slices of strawberries, sprinkles, granola and chocolate chips\n' +
      '\n',
    rating: 5,
    // tslint:disable-next-line:max-line-length
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/8/8/0/KC1406H_Apple-Donuts_s4x3.jpg.rend.hgtvcom.826.620.suffix/1502227829900.jpeg',
  },
  {
    name: 'Breakfast Burrito',
    id: 12,
    categoryId: 0,
    // tslint:disable-next-line:max-line-length
    description: 'Heat the canola oil in a large nonstick skillet over a medium-high heat. Cook the onions and peppers until onions are softened and peppers are slightly charred, about 8 minutes. Add black beans and red pepper flakes and cook until warmed through, another 3 minutes. Season with salt and pepper and transfer to a dish.\n' +
      // tslint:disable-next-line:max-line-length
      'Whisk together the eggs and egg whites then stir in the cheese. Spray the skillet with cooking spray, and reheat the skillet over a medium heat. Reduce heat to low and add eggs, scrambling until cooked through, about 3 minutes. Spread each tortilla with 1 tablespoon each sour cream (or yogurt) and salsa, then layer with 1/4 of the black bean mixture, 1/4 of the scrambled eggs, some diced tomato and 1/4 of the avocado. Season, to taste, with hot sauce. Roll up burrito-style and serve.',
    ingredients: '2 teaspoons canola oil\n' +
      '\n' +
      '1/2 small red onion, diced (1 cup)\n' +
      '\n' +
      '1 red bell pepper, seeded and diced\n' +
      '\n' +
      '1 cup drained, rinsed canned black beans, preferably low-sodium\n' +
      '\n' +
      '1/4 teaspoon chili flakes\n' +
      '\n' +
      'Salt and freshly ground black pepper\n' +
      '\n' +
      '4 eggs and 4 egg whites\n' +
      '\n' +
      '1/3 cup (about 1 1/2 ounce) shredded pepper Jack cheese\n' +
      '\n' +
      'Nonstick cooking spray\n' +
      '\n' +
      '4 (10 inch) whole wheat tortillas (burrito size)\n' +
      '\n' +
      '1/4 cup reduced fat-free sour cream or 2 percent plain Greek yogurt\n' +
      '\n' +
      '1/4 cup salsa\n' +
      '\n' +
      '1 large tomato, (4 ounces) seeded and diced\n' +
      '\n' +
      '1 small avocado (4 ounces), cubed\n' +
      '\n' +
      'Hot sauce',
    rating: 5,
    // tslint:disable-next-line:max-line-length
    image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/22/0/CCHAP-110F_Breakfast-Burrito_s4x3.jpg.rend.hgtvcom.826.620.suffix/1382539589470.jpeg',
  },
  {
    name: 'Sugar Cookies',
    id: 13,
    categoryId: 1,
    // tslint:disable-next-line:max-line-length
    description: 'Sift together flour, baking powder, and salt. Set aside. ' +
      'Place butter and sugar in large bowl of electric stand mixer and beat until light in color.' +
      ' Add egg and milk and beat to combine. Put mixer on low speed, gradually add flour, and beat until mixture pulls away from the side of the bowl.' +
      ' Divide the dough in half, wrap in waxed paper, and refrigerate for 2 hours.\n' +
      'Preheat oven to 375 degrees F.\n' +
      // tslint:disable-next-line:max-line-length
      'Sprinkle surface where you will roll out dough with powdered sugar.' +
      ' Remove 1 wrapped pack of dough from refrigerator at a time, sprinkle rolling pin with powdered sugar, ' +
      'and roll out dough to 1/4-inch thick. Move the dough around and check underneath frequently to make sure it is not sticking. ' +
      'If dough has warmed during rolling, place cold cookie sheet on top for 10 minutes to chill. Cut into desired shape, place at least 1-inch apart on greased baking sheet, parchment, or silicone baking mat, and bake for 7 to 9 minutes or until cookies are just beginning to turn brown around the edges, rotating cookie sheet halfway through baking time. Let sit on baking sheet for 2 minutes after removal from oven and then move to complete cooling on wire rack. Serve as is or ice as desired. Store in airtight container for up to 1 week.',
    ingredients: '3 cups all-purpose flour\n' +
      '\n' +
      '3/4 teaspoon baking powder\n' +
      '\n' +
      '1/4 teaspoon salt\n' +
      '\n' +
      '1 cup unsalted butter, softened\n' +
      '\n' +
      '1 cup sugar\n' +
      '\n' +
      '1 egg, beaten\n' +
      '\n' +
      '1 tablespoon milk\n' +
      '\n' +
      'Powdered sugar, for rolling out dough',
    rating: 5,
    // tslint:disable-next-line:max-line-length
    image: 'https://www.cookingclassy.com/wp-content/uploads/2020/02/soft-sugar-cookies-5.jpg',
  },
  {
    name: 'French Dip Sandwiches',
    id: 14,
    categoryId: 0,
    // tslint:disable-next-line:max-line-length
    description: 'In a large, shallow skillet over moderate heat, melt butter. Add shallots to butter and saute 2 minutes. Add flour to butter and shallot and cook a minute longer. Whisk in sherry and cook liquid out. Whisk in consomme in a slow stream. Bring sauce to a bubble and allow to simmer over low heat until ready to serve sandwiches.\n' +
      // tslint:disable-next-line:max-line-length
      'Pile meat loosely across your cutting board or a large work surface. Season meat with grill seasoning or salt and black pepper. Set out 4 ramekins or small soup cups for dipping sauce, 4 dinner plates and 4 split torpedo rolls. To assemble, using a pair of kitchen tongs, dip meat into loose au jus sauce and pile into rolls. Set ramekins or cups with extra dipping sauce along side the sandwiches.',
    ingredients: '2 tablespoons butter\n' +
      '\n' +
      '1 shallot, chopped\n' +
      '\n' +
      '1 tablespoon all-purpose flour\n' +
      '\n' +
      '1 jigger dry sherry, optional\n' +
      '\n' +
      '2 cans beef consomme, found on broth and soups aisle or beef broth\n' +
      '\n' +
      '1 1/2 pounds deli sliced roast beef\n' +
      '\n' +
      'Grill seasoning blend for steak, such as Montreal Steak Seasoning Blend, or, coarse salt and pepper\n' +
      '\n' +
      '4 torpedo sandwich rolls, split',
    rating: 5,
    // tslint:disable-next-line:max-line-length
    image: 'https://www.foxvalleyfoodie.com/wp-content/uploads/2017/01/easy-crock-pot-french-dip-sandwiches-recipe.jpg',
  },
  {
    name: 'Instant Pot Beef Stew',
    id: 15,
    categoryId: 1,
    // tslint:disable-next-line:max-line-length
    description: 'Add the oil to the Instant Pot® and set to saute (see Cook\'s Note).\n' +
      // tslint:disable-next-line:max-line-length
      'Meanwhile, toss the beef with the flour, 2 teaspoons salt, and a generous amount of pepper in a medium bowl. Add the meat and all the flour to the Instant Pot® in a single layer and cook, undisturbed, until golden brown on the bottom, about 3 minutes. Stir once and allow to brown for another 2 to 3 minutes. Add the tomato paste and stir to coat. Add the wine and bring to a boil. Cook for 1 minute, scraping up browned bits from the bottom of the pot with a wooden spoon.\n' +
      // tslint:disable-next-line:max-line-length
      'Add the carrots, celery, thyme and onions and stir to coat. Follow the manufacturer\'s guide for locking the lid and set to pressure cook on high for 40 minutes. After the pressure cycle is complete follow the manufacturer\'s guide for quick release and wait until the quick release cycle is complete. Careful of any remaining steam, unlock and remove the lid. ',
    ingredients: '1 tablespoon vegetable oil\n' +
      '\n' +
      '2 1/2 pounds boneless beef chuck roast, trimmed and cut into 1-inch cubes\n' +
      '\n' +
      '2 tablespoons all-purpose flour\n' +
      '\n' +
      'Kosher salt and freshly ground black pepper\n' +
      '\n' +
      '2 tablespoons tomato paste\n' +
      '\n' +
      '1/3 cup dry red wine\n' +
      '\n' +
      '3 carrots, cut into 2-inch pieces\n' +
      '\n' +
      '3 celery ribs, cut into 1-inch pieces\n' +
      '\n' +
      '1 sprig fresh thyme\n' +
      '\n' +
      '1 cup frozen pearl onions',
    rating: 5,
    // tslint:disable-next-line:max-line-length
    image: 'https://www.saltandlavender.com/wp-content/uploads/2018/10/instant-pot-beef-stew-4.jpg',
  },
];
