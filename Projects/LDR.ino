int light1, light2 ,light3,light4;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

}

void loop() {
  // put your main code here, to run repeatedly:
  light1= analogRead(A0);
  light2= analogRead(A1);
  light3= analogRead(A2);
  light4= analogRead(A4);
  Serial.print(light1);
  Serial.print(',');
  Serial.print(light2);
  Serial.print(',');
  Serial.print(light3);
  Serial.print(',');
  Serial.println(light4);
  
  delay(500);

}
