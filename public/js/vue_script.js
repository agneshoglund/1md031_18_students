"use strict";
var socket = io();
//function MenuItem(bg, pr, kc, gl, la, img ) {
  //  this.burger = bg; // The this keyword refers to the object itself
    //this.price = pr;
    //this.kCal = kc;
    //this.gluten = gl;
    //this.lactose = la;
    //this.image = img;

    //this.product = function () {
      //return this.burger +'innehåller' + this.price +'price' + this.kCal +'kCal' + this.image +'image';
    //}
  //}
  //var Halloumiburger = new MenuItem("HalloumiBurger", "750 kcal", true, false, true, "img/hallo.jpg")
  //var Beanburger = new MenuItem("BeanBurger", "600 kcal", true, false, false, 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Bean_Burger_%2824501090158%29.jpg/1600px-Bean_Burger_%2824501090158%29.jpg')
  //var Cheeseburger = new MenuItem("CheeseBurger", "800 kcal", true, false, true, 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Homemade_cheeseburger.jpg/1600px-Homemade_cheeseburger.jpg')
  //var Nacho = new MenuItem("Nacho", "350 kcal", true, true, false, "https://annetravelfoodie.com/wp-content/uploads/2018/10/nachos-todos-oil-vinegar-950x950.jpg")
  //var Pommes = new MenuItem("Pommes", "450 kcal", false, false, false, "http://www.bockholmengruppen.com/wp-content/uploads/2019/01/5_DSC4727.jpg")
  //  var menuList = [];


  //var menuList = [];
  //menuList.push(Halloumiburger);
  //menuList.push(Beanburger);
  //menuList.push(Cheeseburger);
  //menuList.push(Nacho);
  //menuList.push(Pommes);




var vm = new Vue({
el: '#burgare',
  data: {
    menu: food,
    placeOrder: false,
    checked:[],
    orderObject: {fullname:"",email:"",payment:"", gender:"",},
    //burgers: menuList,
    //gender:"",
    //radio:"",
    //fullname:"",
    //email:"",
    //street:"",
    //number:"",
    //payment:"",
    //checked:[],
    orders: {},
    Position: {x:0, y:0},
  },
//  created: function () {
  //  socket.on('initialize', function (data) {
    //  this.orders = data.orders;
    //}.bind(this));

    //socket.on('currentQueue', function (data) {
    //  this.orders = data.orders;
    //}.bind(this));
  //},
  methods: {
      markDone: function() {
        console.log("bottom clicked")
          //Add some functionality
      },
      getNext: function () {
        var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
          return Math.max(last, next);
        }, 0);
        return lastOrder + 1;
      },
     displayOrder: function(event){
      console.log(event);
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
                    this.Position = {x: event.clientX - 10 - offset.x,
                               y: event.clientY - 10 - offset.y};

          },

      addOrder: function (event) {
        socket.emit("addOrder", { orderItems: this.checked,
                                  orderId: this.orderObject.fullname,
                                  details: this.Position,
                                  })


          }
    }
});
