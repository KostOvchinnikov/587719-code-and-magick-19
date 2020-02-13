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
var BAR_WIDTH = 50;
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

  ctx.fillStyle = '#000';

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '000';
    ctx.fillText(players[i], TEXT_X + (BAR_WIDTH + BAR_GAP) * i, TEXT_Y);
    ctx.fillRect(BAR_X + (BAR_WIDTH + BAR_GAP) * i, BAR_Y, BAR_WIDTH, (barHeight * times[i]) / maxTime);
  }

  ctx.fillText('Ура вы победили!', TEXT_X, (CLOUD_Y + FONT_GAP));
  ctx.fillText('Список результатов:', TEXT_X, (CLOUD_Y + FONT_GAP) + FONT_GAP); // Как выполнить перенос строки?
};
