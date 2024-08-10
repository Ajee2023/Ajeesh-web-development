const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

// Replace '/dev/ttyACM0' with your Arduino's serial port
const port = new SerialPort({
  path: 'COM7',
  baudRate: 9600
});

// Create a parser to read lines from the serial port
const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

// Open the serial port
port.on('open', () => {
  console.log('Serial port open');
});

// Handle incoming data from Arduino
parser.on('data', (data) => {
 // console.log(`Received from Arduino: ${data}`);
 const values = data.trim().split(',').map(Number); // Split by comma and convert to numbers
 if (values.length === 4) {
   const [ldr1, ldr2, ldr3,ldr4] = values;
   console.log(`LDR1 Value: ${ldr1}`);
   console.log(`LDR2 Value: ${ldr2}`);
   console.log(`LDR3 Value: ${ldr3}`);
   console.log(`LDR4 Value: ${ldr4}`);
 } else {
   console.error('Unexpected data format:', data);
 }


});

// Handle errors
port.on('error', (err) => {
  console.error('Error: ', err.message);
});
