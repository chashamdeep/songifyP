var context;

var delay;
var overdrive;
var wahwah;
var tremolo;

function tunaDemo() {
          var tuna = new Tuna(context);

             delay= new tuna.Delay({
              feedback:0.78,
              delayTime:90,
              wetLevel:0.9,
              dryLevel:1,
              cutOff:5000,
              bypass:1
            });

             overdrive= new tuna.Overdrive({
                outputGain:1,
                drive:0.9,
                curveAmount:1,
                algorithmIndex:4,
                bypass:1
            });
             wahwah = new tuna.WahWah({
              automode: true, //true/false
              baseFrequency: 0.5, //0 to 1
              excursionOctaves: 3, //1 to 6
              sweep: 1, //0 to 1
              resonance: 2, //1 to 100
              sensitivity: 1, //-1 to 1
              bypass: 1
            });
             tremolo = new tuna.Tremolo({
              intensity: 0.2, //0 to 1
              rate: 8, //0.001 to 8
              stereoPhase: 0, //0 to 180
              feedback: 0.9, //0 to 1+
              bypass: 1
            });
        }
                context = new AudioContext();
                tunaDemo();
                var song1=document.querySelector('audio');
                var source=context.createMediaElementSource(song1);

                source.connect(wahwah.input);
                source.connect(tremolo.input);
                source.connect(delay.input);
                source.connect(overdrive.input);
                overdrive.connect(context.destination);
                wahwah.connect(context.destination);
                delay.connect(context.destination);
                tremolo.connect(context.destination);

var del=document.querySelector('#delay');
var ovr=document.querySelector('#overdrive');
var wah=document.querySelector('#wahwah');
var trem=document.querySelector('#tremolo');

// var ovr=document.querySelector('#overdrive');
del.addEventListener('click',function(e)
{
      $(this).toggleClass('changecolor');
      if(delay.bypass)
      {
        delay.bypass=0;
        console.log('false');
      }
      else {
        delay.bypass=1;
        console.log('true');
      }
});
ovr.addEventListener('click',function(e)
{
      $(this).toggleClass('changecolor');
      if(overdrive.bypass)
      {
        overdrive.bypass=0;
        console.log('false');
      }
      else {
        overdrive.bypass=1;
        console.log('true');
      }
});
wah.addEventListener('click',function(e)
{
      $(this).toggleClass('changecolor');
      if(wahwah.bypass)
      {
        wahwah.bypass=0;
        console.log('false');
      }
      else {
        wahwah.bypass=1;
        console.log('true');
      }
});
trem.addEventListener('click',function(e)
{
      $(this).toggleClass('changecolor');
      if(tremolo.bypass)
      {
        tremolo.bypass=0;
        console.log('false');
      }
      else {
        tremolo.bypass=1;
        console.log('true');
      }
});