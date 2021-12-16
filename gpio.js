import RPi.GPIO as GPIO
import time

pin1 = 18
pin2 = 18
pin3 = 18


def led_on(pin):
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(pin, GPIO.OUT)

    GPIO.output(pin, True)

def led_off(pin):
    GPIO.setmode(GPIO.BOARD)
    GPIO.setup(pin, GPIO.OUT)

    GPIO.cleanup(pin)

led_on(pin1)
print('led ON')
time.sleep(3)
led_off(pin1)
print('led OFF')
time.sleep(3)
led_on(pin2)
print('led ON')
time.sleep(3)
led_off(pin2)
print('led OFF')
time.sleep(3)
led_on(pin3)
print('led ON')
time.sleep(3)
led_off(pin3)
print('led OFF')
time.sleep(3)
