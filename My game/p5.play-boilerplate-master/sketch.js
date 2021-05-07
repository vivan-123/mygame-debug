var gamestate = "start";
var canvas;
var carrotsGroup;
var carCount = 0;
var carrotsInInvetory;
var carrotsInInvetoryText;
var stallVisible = 0;

//plant carrots button
var plantCarrotsButton;


function preload() {

  //Buttons
  helpButtonImg = loadImage("Images/Help_button_img.png");
  farmButtonImg = loadImage("Images/Farm_button_img.png");
  marketButtonImg = loadImage("Images/Market_button_img.png");
  warButtonImg = loadImage("Images/war_button.png");
  plantCarrotsButtonImg = loadImage("Images/plant_carrots.png");
  harvestButtonImg = loadImage("Images/harvestButtonImg.png");
  backButtonImg = loadImage("Images/backButtonImg.png");
  sellCarrotsButtonImg = loadImage("Images/sellCarrotsImg.png")


  //Blobs
  yellowBlobImg = loadImage("Images/Yellow_blob_2.png");
  blueBlobImg = loadImage("Images/Blue_blob_2.png");
  orangeBlobImg = loadImage("Images/orange_blob_2.png");
  greenBlobImg = loadImage("Images/green_blob_2.png");

  //Knight
  knightFightImg = loadImage("Images/KnightFight.png");
  knightStandImg = loadImage("Images/knightStand.png");
  knightFinishImg = loadImage("Images/knightFinish.png");

  //Farm 
  carrotFarmImg = loadImage("Images/Carrot_farm_img.png");

  //Vegetables
  carrotImg = loadImage("Images/carrots.png");
  carrotsInInvetoryImg = loadImage("Images/carrot_basket.png");

  //Stall Image
  stallImg = loadImage("Images/stall.png");

}
function setup() {

  //Canvas
  canvas = createCanvas(1400, 800);
  canvas.position(20, 10);

  //Help button
  helpButton = createSprite(1000, 200);
  helpButton.addImage(helpButtonImg);
  helpButton.scale = 0.2;

  //Farm button
  farmButton = createSprite(1000, 300);
  farmButton.addImage(farmButtonImg);
  farmButton.scale = 0.2;

  //Market button
  marketButton = createSprite(1000, 400);
  marketButton.addImage(marketButtonImg);
  marketButton.scale = 0.2;

  //War button
  warButton = createSprite(1000, 500);
  warButton.addImage(warButtonImg);
  warButton.scale = 0.2

  //back button
  backButton = createSprite(100, 210);
  backButton.addImage(backButtonImg);
  backButton.scale = 0.17;
  backButton.visible = false;

  //Yellow Blob
  yellowBlob = createSprite(500, 200);
  yellowBlob.addImage(yellowBlobImg);
  yellowBlob.scale = 0.3;

  //Blue Blob
  blueBlob = createSprite(350, 210);
  blueBlob.addImage(blueBlobImg);
  blueBlob.scale = 0.3;

  //Orange Blob
  orangeBlob = createSprite(200, 190);
  orangeBlob.addImage(orangeBlobImg);
  orangeBlob.scale = 0.3;

  //Green Blob
  greenBlob = createSprite(100, 220);
  greenBlob.addImage(greenBlobImg);
  greenBlob.scale = 0.3;

  //Knight fight
  knightFight = createSprite(150, 500);
  knightFight.addImage(knightFightImg);
  knightFight.scale = 0.5;

  //Knight stand
  knightStand = createSprite(400, 520);
  knightStand.addImage(knightStandImg);
  knightStand.scale = 0.5;

  //Knight finish
  knightFinish = createSprite(620, 490);
  knightFinish.addImage(knightFinishImg);
  knightFinish.scale = 0.5;

  //carrot farm
  carrotFarm = createSprite();
  carrotFarm.addImage(carrotFarmImg);
  carrotFarm.visible = false;

  //plant carrots button
  plantCarrotsButton = createSprite(100, 100);
  plantCarrotsButton.addImage(plantCarrotsButtonImg);
  plantCarrotsButton.scale = 0.3;
  plantCarrotsButton.visible = false;

  //carrots group
  carrotsGroup = createGroup();

  //carrots
  carrot1 = createSprite(475, 220);
  carrot1.addImage(carrotImg);
  carrot1.scale = 0.2;
  carrot1.visible = false;
  carrotsGroup.add(carrot1);


  carrot2 = createSprite(475, 325);
  carrot2.addImage(carrotImg);
  carrot2.scale = 0.2;
  carrot2.visible = false;
  carrotsGroup.add(carrot2);

  carrot3 = createSprite(650, 220);
  carrot3.addImage(carrotImg);
  carrot3.scale = 0.2;
  carrot3.visible = false;
  carrotsGroup.add(carrot3);

  carrot4 = createSprite(650, 325);
  carrot4.addImage(carrotImg);
  carrot4.scale = 0.2;
  carrot4.visible = false;
  carrotsGroup.add(carrot4);

  carrot5 = createSprite(750, 220);
  carrot5.addImage(carrotImg);
  carrot5.scale = 0.2;
  carrot5.visible = false;
  carrotsGroup.add(carrot5);

  carrot6 = createSprite(750, 325);
  carrot6.addImage(carrotImg);
  carrot6.scale = 0.2;
  carrot6.visible = false;
  carrotsGroup.add(carrot6);

  carrot7 = createSprite(950, 220);
  carrot7.addImage(carrotImg);
  carrot7.scale = 0.2;
  carrot7.visible = false;
  carrotsGroup.add(carrot7);

  carrot8 = createSprite(950, 325);
  carrot8.addImage(carrotImg);
  carrot8.scale = 0.2;
  carrot8.visible = false;
  carrotsGroup.add(carrot8);

  harvestButton = createSprite(400, 700);
  harvestButton.addImage(harvestButtonImg);
  harvestButton.scale = 0.3;
  harvestButton.visible = false;

  carrotsInInvetorySprite = createSprite(900, 700);
  carrotsInInvetorySprite.addImage(carrotsInInvetoryImg);
  carrotsInInvetorySprite.visible = false;
  carrotsInInvetorySprite.scale = 0.1;

  sellCarrotsButton = createSprite(700,125);
  sellCarrotsButton.addImage(sellCarrotsButtonImg);
  sellCarrotsButton.scale = 0.6;
  sellCarrotsButton.visible = false;

  stall = createSprite(700,400);
  stall.addImage(stallImg);
  stall.scale = 1;
  stall.visible = false;
}

function draw() {
  background("black");

  if (mousePressedOver(farmButton)) {
    gamestate = "farm";
  }

  if (mousePressedOver(marketButton)) {
    gamestate = "market";
  }

  if (gamestate === "farm") {
    //change market button and help button position
    marketButton.x = 100;
    marketButton.y = 50;

    helpButton.x = 100;
    helpButton.y = 130;

    //backButton
    backButton.visible = true;

    //hiding sprites
    farmButton.visible = false;
    warButton.visible = false;
    knightFight.visible = false;
    knightFinish.visible = false;
    knightStand.visible = false;
    blueBlob.visible = false;
    greenBlob.visible = false;
    orangeBlob.visible = false;
    yellowBlob.visible = false;

    //Carrot farm
    carrotFarm.x = 750;
    carrotFarm.y = 250;
    carrotFarm.visible = true;
    carrotFarm.scale = 0.6;

    //plant carrots button
    plantCarrotsButton.x = 700;
    plantCarrotsButton.y = 700;
    plantCarrotsButton.visible = true;

    if (mousePressedOver(plantCarrotsButton)) {
      if (carCount < 8) {
        carrotsGroup.get(carCount).visible = true;
        carCount++;
      }
    }

    if (carrot8.visible === true) {
      harvestButton.visible = true;
    }

    if (mousePressedOver(harvestButton)) {
      carrotsGroup.setVisibleEach(false);
      carrotsInInvetory = 8;
      carrotsInInvetorySprite.visible = true;
    }

    if (carrotsInInvetorySprite.visible === true) {
      fill("orange")
      textFont("cooper");
      textSize(20);
      text("Carrots in your inventory :- ", 1000, 700);
      fill("lightgreen");
      text(carrotsInInvetory, 1230, 700);
    } 

    if (mousePressedOver(backButton)) {
      gamestate = "start";
    }

    if (mousePressedOver(marketButton)) {
      gamestate = "market";
    }

  }

  if (gamestate === "market")
  {

    //hide all the farm images
    carrotsInInvetorySprite.visible = false;
    carrotFarm.visible = false;
    marketButton.visible = false;
    plantCarrotsButton.visible = false;
    harvestButton.visible = false;
    farmButton.visible = false;
    warButton.visible = false;
    blueBlob.visible = false;
    greenBlob.visible = false;
    orangeBlob.visible = false;
    yellowBlob.visible = false;
    knightFight.visible = false;
    knightFinish.visible = false;
    knightStand.visible = false;

    //show back button
    backButton.visible = true;

    //change the y axis for the buttons in place of market button
    helpButton.x = 100;
    helpButton.y = 50;
    backButton.y = 130;

    stall.visible = true;
    //console.log("true");
    sellCarrotsButton.visible = true;
    
    if (mousePressedOver(sellCarrotsButton))
    {
      stall.visible = false;
      stallVisible = 1;
    }

    if (stallVisible === 1)
    {
      //console.log("false");
      stall.visible = false;
    }
  }

  
    drawSprites();
};

