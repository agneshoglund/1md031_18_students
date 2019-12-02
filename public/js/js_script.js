function MenuItem(bg, pr, kc, gl, la, ing, img ) {
    this.burger = bg; // The this keyword refers to the object itself
    this.price = pr;
    this.kCal = kc;
    this.gluten = gl;
    this.lactose = la;
    this.ingredient = ing;
    this.image = img;
    this.product = function () {
      return this.burger +'innehåller' + this.price +'price' + this.kCal +'kCal' + this.image +'image';
    }
  }

  var Halloumiburger = new MenuItem("Halloumi Burger", "750 kcal", true, false, true, "img/hallo.jpg")
  var Beanburger = new MenuItem("Bean burger", "600 kcal", true, false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bean_Burger_%2824501090158%29.jpg/1600px-Bean_Burger_%2824501090158%29.jpg')
  var Cheeseburger = new MenuItem("Cheese Burger", "800 kcal", true, false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Homemade_cheeseburger.jpg/1600px-Homemade_cheeseburger.jpg')
  var Nacho = new MenuItem("Nacho", "350 kcal", true, false, true, "https://annetravelfoodie.com/wp-content/uploads/2018/10/nachos-todos-oil-vinegar-950x950.jpg")
  var Pommes = new MenuItem("Pommes", "450 kcal", true, false, true, "https://img.pixers.pics/pho_wat(s3:700/FO/42/16/70/16/700_FO42167016_1b4d39e48f1774592ba33d51cac6d891.jpg,700,525,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,475,jpg)/fototapeter-pommes-frites-mit-ketchup-und-majonnas.jpg")
//  var menuList = [];
//  menuList.push(Halloumiburger);
//  menuList.push(Beanburger);
//



// Objects are then instantiated using the new keyword
//var menu = new MenuItem('Bean burger', "600 kcal");

//console.log( menu.burger);
