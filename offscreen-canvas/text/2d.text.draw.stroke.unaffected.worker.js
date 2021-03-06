// DO NOT EDIT! This test has been generated by /offscreen-canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.text.draw.stroke.unaffected
// Description:strokeText does not start a new path or subpath
// Note:

importScripts("/resources/testharness.js");
importScripts("/2dcontext/resources/canvas-tests.js");

var t = async_test("strokeText does not start a new path or subpath");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

ctx.fillStyle = '#f00';
ctx.fillRect(0, 0, 100, 50);

ctx.moveTo(0, 0);
ctx.lineTo(100, 0);

ctx.font = '35px Arial, sans-serif';
ctx.strokeStyle = '#f00';
ctx.strokeText('FAIL', 5, 35);

ctx.lineTo(100, 50);
ctx.lineTo(0, 50);
ctx.fillStyle = '#0f0';
ctx.fill();

_assertPixel(offscreenCanvas, 50,25, 0,255,0,255, "50,25", "0,255,0,255");
_assertPixel(offscreenCanvas, 5,45, 0,255,0,255, "5,45", "0,255,0,255");
t.done();

});
done();
