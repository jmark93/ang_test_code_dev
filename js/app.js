(function() {
  var app = angular.module('store',[]);
  app.controller('StoreController', function() {
    this.products = gems;
  });
  var gems = [
    {
    name: 'Dodecahedron',
    price: 2.95,
    description: "This is a rare gem that is an exceptional buy.",
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'graphics/dode-1-full.png',
        thumb: 'graphics/dode-1-tn.png'
      },
      {
        full: 'graphics/dode-2-full.png',
        thumb: 'graphics/dode-2-tn.png'
      },
      {
      full: 'graphics/dode-3-full.png',
      thumb: 'graphics/dode-3-tn.png'
      },
    ]
  },
  {
    name: "Pentagonal Gem",
    price: 5.95,
    description: "A common gem that is useful for combatting ferrets.",
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'graphics/penta-1-full.png',
        thumb: 'graphics/penta-1-tn.png'
      },
      {
        full: 'graphics/penta-2-full.png',
        thumb: 'graphics/penta-2-tn.png'
      },
      {
      full: 'graphics/penta-3-full.png',
      thumb: 'graphics/penta-3-tn.png'
      },
    ]
  },
  {
    name: "Romburg43 Gem",
    price: 4,
    description: "A common gem that is useful for warding off wombats.",
    canPurchase: true,
    soldOut: false,
    images: [
      {
        full: 'graphics/romb-1-full.png',
        thumb: 'graphics/romb-1-tn.png'
      },
      {
        full: 'graphics/romb-2-full.png',
        thumb: 'graphics/romb-2-tn.png'
      },
      {
      full: 'graphics/romb-3-full.png',
      thumb: 'graphics/romb-3-tn.png'
      },
    ]
  },
];


app.controller("PanelController",function(){
  this.tab = 1;

  this.selectTab = function(setTab) {
    this.tab = setTab;
  };
  this.isSelected = function(checkTab) {
    return this.tab === checkTab;
  };
});
})();
