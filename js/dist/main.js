!function(t){var r={};function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,r,e){i.o(t,r)||Object.defineProperty(t,r,{configurable:!1,enumerable:!0,get:e})},i.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},i.n=function(t){var r=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(r,"a",r),r},i.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)},i.p="",i(i.s=3)}([function(t,r){t.exports=function(){this.x=0,this.y=0,this.direction="right"}},function(t,r){t.exports=function(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}},function(t,r,i){var e=i(1),n=i(0);t.exports=function(){self=this,this.board=document.querySelector("#board").querySelectorAll("div"),this.furry=new n,this.coin=new e,this.score=0,this.timeInterval=250,this.gameEnd=!1,this.index=function(t,r){return t+10*r},this.showFurry=function(){this.board[this.index(this.furry.x,this.furry.y)].classList.add("furry")},this.hideVisibleFurry=function(){document.querySelector(".furry").classList.remove("furry")},this.showCoin=function(){this.board[this.index(this.coin.x,this.coin.y)].classList.add("coin")},this.moveFurry=function(){"right"===this.furry.direction?this.furry.x++:"left"===this.furry.direction?this.furry.x--:"down"===this.furry.direction?this.furry.y++:"up"===this.furry.direction&&this.furry.y--,this.gameOver(),!1===this.gameEnd&&(this.hideVisibleFurry(),this.checkCoinCollision(),this.showFurry())},this.turnFurry=function(t){switch(t.which){case 37:this.furry.direction="left";break;case 38:this.furry.direction="up";break;case 39:this.furry.direction="right";break;case 40:this.furry.direction="down"}},this.checkCoinCollision=function(){this.furry.x===this.coin.x&&this.furry.y===this.coin.y&&(document.querySelector(".coin").classList.remove("coin"),this.score++,document.querySelector("#score strong").innerHTML=this.score,this.coin=new e,this.showCoin(),clearInterval(this.idInterval),self.timeInterval-=5,this.startGame())},this.gameOver=function(){if(this.furry.x<0||this.furry.x>9||this.furry.y<0||this.furry.y>9){clearInterval(this.idInterval),this.gameEnd=!0,document.querySelector("#board").classList.add("invisible"),document.querySelector("#score").classList.add("invisible"),document.querySelector("#over").classList.remove("invisible");var t=document.createElement("pre");document.querySelector("#over").appendChild(t),t.innerHTML="GAME OVER!\nuzyskano: "+this.score+" pkt"}},this.startGame=function(){this.idInterval=setInterval(function(){self.moveFurry()},self.timeInterval)}}},function(t,r,i){var e=new(i(2));e.showCoin(),e.showFurry(),e.startGame(),document.addEventListener("keydown",function(t){self.turnFurry(t)})}]);
//# sourceMappingURL=main.js.map