# Discord SoundBoard bot

This is a self-hosting bot which can play any mp3 file you put into the sounds folder


## configuration

you can configure the bot in the .env file. You only really need to change the bot token you can leave the rest unchanged.

you also need to download Node.js v12.0.0 or newer and FFMPEG otherwise the bot wont be able to play sounds through the voice channel.

## Adding sounds

to add a sound simply add an mp3 file to the sounds folder. you don't have to restart the bot, it will work on the run

## commands

to play a sound simply type [prefix][name of the sound]
so for example if the prefix is 'sb!' and the mp3 file's name is Bruh.mp3 then simply type  
```
sb!Bruh
```
you can list the all the available sounds with:
```
sb!list
```
also you can just play a random sound from the available sounds with:
```
sb!random
```
If you want the bot to stay in the voice channel so you won't hear the annoying joining/leaving sound you can just simply use [prefix]stay [sound name]
```
sb!stay Bruh
```
When you want the bot to leave, use the leave command
```
sb!leave
```
## Thank you 
  
  If you need direct help from me Im happy to help you, just add me in discord  
  my username is Doggi#4758

