var bt = document.querySelectorAll('.button')[0];
var turbVal = { val: 0.000001 };
var turb = document.querySelectorAll('#blur-shadow feTurbulence')[0];
var btTl = new TimelineLite({ paused: true, onUpdate: function() {
  turb.setAttribute('baseFrequency', '0 ' + turbVal.val);
} });

btTl.to(turbVal, 0.2, { val: 0.3 });
btTl.to(turbVal, 0.2, { val: 0.000001 });

bt.addEventListener('click', function() {
  btTl.restart();
  });