$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GearTest.feature");
formatter.feature({
  "line": 1,
  "name": "Gear Page Test",
  "description": "",
  "id": "gear-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3678048100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should add product to cart successfully",
  "description": "",
  "id": "gear-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on Gear menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click on Bags tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Overnight Duffle",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I should see product name Overnight Duffle on that product page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I change Qty to 3",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on Add to Cart",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see You added Overnight Duffle to your shopping cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping cart link into that message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see product name Overnight Duffle",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see Qty is 3",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see price is $135.00",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I change Qty 5",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on Update Shopping cart",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should see price $225.00",
  "keyword": "Then "
});
formatter.match({
  "location": "GearTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 70144100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iMouseHoverOnGearMenu()"
});
formatter.result({
  "duration": 2179263299,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnBagsTab()"
});
formatter.result({
  "duration": 827560600,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnOvernightDuffle()"
});
formatter.result({
  "duration": 928153299,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeProductNameOvernightDuffleOnThatProductPage()"
});
formatter.result({
  "duration": 105966100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    }
  ],
  "location": "GearTestSteps.iChangeQtyTo(int)"
});
formatter.result({
  "duration": 242816100,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnAddToCart()"
});
formatter.result({
  "duration": 72180400,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeYouAddedOvernightDuffleToYourShoppingCart()"
});
formatter.result({
  "duration": 1557906599,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnShoppingCartLinkIntoThatMessage()"
});
formatter.result({
  "duration": 1770953300,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iShouldSeeProductNameOvernightDuffle()"
});
formatter.result({
  "duration": 26915800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    }
  ],
  "location": "GearTestSteps.iShouldSeeQtyIs(int)"
});
formatter.result({
  "duration": 42818100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "135",
      "offset": 23
    },
    {
      "val": "00",
      "offset": 27
    }
  ],
  "location": "GearTestSteps.iShouldSeePriceIs$(int,int)"
});
formatter.result({
  "duration": 344847199,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5",
      "offset": 13
    }
  ],
  "location": "GearTestSteps.iChangeQty(int)"
});
formatter.result({
  "duration": 154764899,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnUpdateShoppingCart()"
});
formatter.result({
  "duration": 65023000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "225",
      "offset": 20
    },
    {
      "val": "00",
      "offset": 24
    }
  ],
  "location": "GearTestSteps.iShouldSeePrice$(int,int)"
});
formatter.result({
  "duration": 3734685001,
  "status": "passed"
});
formatter.after({
  "duration": 727444600,
  "status": "passed"
});
formatter.uri("MenTest.feature");
formatter.feature({
  "line": 1,
  "name": "Men Page Test",
  "description": "",
  "id": "men-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2025489499,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User Should Add Product to Cart Successfully",
  "description": "",
  "id": "men-page-test;user-should-add-product-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@sanity"
    },
    {
      "line": 3,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover Men menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I mouse hover on Bottoms menu",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Pant menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I mouse hover on product name Cronus Yoga Pant and click on size 32",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I mouse hover on Cronus Yoga Pant and click on colour Black",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I mouse hover on Cronus Yoga Pant and click on Add To Cart Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I should see message You added Cronus Yoga Pant to your shopping cart.",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I click on Shopping cart link into that message",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see text Shopping cart",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I should see that product name Cronus Yoga Pant",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see product size is 32",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should see product colour Black",
  "keyword": "And "
});
formatter.match({
  "location": "GearTestSteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 22800,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverMenMenu()"
});
formatter.result({
  "duration": 2162782199,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnBottomsMenu()"
});
formatter.result({
  "duration": 151616800,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iClickOnPantMenu()"
});
formatter.result({
  "duration": 1060099900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 65
    }
  ],
  "location": "MenTestSteps.iMouseHoverOnProductNameCronusYogaPantAndClickOnSize(int)"
});
formatter.result({
  "duration": 171514700,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnCronusYogaPantAndClickOnColourBlack()"
});
formatter.result({
  "duration": 157548000,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iMouseHoverOnCronusYogaPantAndClickOnAddToCartButton()"
});
formatter.result({
  "duration": 158247001,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeMessageYouAddedCronusYogaPantToYourShoppingCart()"
});
formatter.result({
  "duration": 1540239401,
  "status": "passed"
});
formatter.match({
  "location": "GearTestSteps.iClickOnShoppingCartLinkIntoThatMessage()"
});
formatter.result({
  "duration": 1960982101,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeTextShoppingCart()"
});
formatter.result({
  "duration": 23263501,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeThatProductNameCronusYogaPant()"
});
formatter.result({
  "duration": 20431700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "32",
      "offset": 29
    }
  ],
  "location": "MenTestSteps.iShouldSeeProductSizeIs(int)"
});
formatter.result({
  "duration": 19135200,
  "status": "passed"
});
formatter.match({
  "location": "MenTestSteps.iShouldSeeProductColourBlack()"
});
formatter.result({
  "duration": 21718999,
  "status": "passed"
});
formatter.after({
  "duration": 676919700,
  "status": "passed"
});
formatter.uri("WomenTest.feature");
formatter.feature({
  "line": 1,
  "name": "Women Page Test",
  "description": "",
  "id": "women-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2146540700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "I am on homepage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 6,
  "name": "User should Sort by Product Name Filter",
  "description": "",
  "id": "women-page-test;user-should-sort-by-product-name-filter",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@sanity"
    },
    {
      "line": 5,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I mouse hover to Women menu",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Imouse hover to Tops menu",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I click on Jackets menu",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I Select Sort By filter Product Name",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I should see products name display in alphabetical order",
  "keyword": "Then "
});
formatter.match({
  "location": "WomenTestSteps.iMouseHoverToWomenMenu()"
});
formatter.result({
  "duration": 2158212299,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.imouseHoverToTopsMenu()"
});
formatter.result({
  "duration": 139906100,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iClickOnJacketsMenu()"
});
formatter.result({
  "duration": 1072510300,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iSelectSortByFilterProductName()"
});
formatter.result({
  "duration": 18800,
  "status": "passed"
});
formatter.match({
  "location": "WomenTestSteps.iShouldSeeProductsNameDisplayInAlphabeticalOrder()"
});
formatter.result({
  "duration": 1328636100,
  "status": "passed"
});
formatter.after({
  "duration": 657683901,
  "status": "passed"
});
});