var Gpio = require('onoff').Gpio
var LED = new Gpio(4, 'out') //use GPIO pin 4, change the 4 to respecify the pin number
var blinkInterval = setInterval(blinkLED, 250); // this sets the blink interval to 250ms
const express = require ('express');
const cors = require('cors');
const bodyParser = require('body-parser')