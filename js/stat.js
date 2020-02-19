'use strict';

var CLOUD_WIDTH = 450;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 0;
var GAP = 10;
var FONT_GAP = 20;
var BAR_X = 160;
var BAR_Y = 70;
var BAR_GAP = 50;
var TEXT_X = 160;
var TEXT_Y = 250;
var BAR_WIDTH = 40;
var barHeight = 160;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  // ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var height = barHeight * times[i] / maxTime;
    var y = BAR_Y + (barHeight - height);
    var score = Math.round(times[i]);

    var x = Math.floor(Math.random() * 100);
    var color = 'hsl(240,' + x + '%, 50%)';

    if (players[i] === 'Вы') {
      color = 'rgba(255, 0, 0, 1)';
    }

    ctx.fillStyle = color;
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, y, BAR_WIDTH, height);
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], TEXT_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
    ctx.fillText(score, TEXT_X + (BAR_WIDTH + BAR_GAP) * i, y - GAP);
  }

  ctx.fillText('Ура вы победили!', TEXT_X, (CLOUD_Y + FONT_GAP));
  ctx.fillText('Список результатов:', TEXT_X, (CLOUD_Y + FONT_GAP) + FONT_GAP);
};
