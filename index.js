// Quote Shuffle

const stoicQuote = ['“I cannot escape death, but at least I can escape the fear of it.”', '“Think of yourself as dead. You have lived your life. Now, take what’s left and live it properly. What doesn’t transmit light creates its own darkness.”', '“You act like mortals in all that you fear, and like immortals in all that you desire.”', '“No evil is honorable: but death is honorable; therefore death is not evil.”', '“Don’t behave as if you are destined to live forever. Death hangs over you. While you live, while it is in your power, be good. Now.”', 'Let us prepare our minds as if we’d come to the very end of life. Let us postpone nothing. Let us balance life’s books each day. The one who puts the finishing touches on their life each day is never short of time.', 'Never say about anything, “I have lost it,” but instead, “I have given it back.” Did your child die? It was given back. Did your wife die? She was given back.', 'You will give yourself relief, if you do every act of your life as if it were the last.', 'You are younger; but what does that matter? There is no fixed count of our years. You do not know where death awaits you; so be ready for it everywhere.', 'Men do not care how nobly they live, but only how long, although it is within the reach of every man to live nobly, but within no man’s power to live long.'];

function randomQuote(){
  return stoicQuote[Math.floor(Math.random()*stoicQuote.length)];
}

if (randomQuote() === stoicQuote[0]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[0];
  document.querySelector("#quote-atribution").innerHTML = '— Epictetus';
} else if (randomQuote() === stoicQuote[1]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[1];
  document.querySelector("#quote-atribution").innerHTML = '— Marcus Aurelius';
} else if (randomQuote() === stoicQuote[2]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[2];
  document.querySelector("#quote-atribution").innerHTML = '— Lucius Annaeus Seneca';
} else if (randomQuote() === stoicQuote[3]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[3];
  document.querySelector("#quote-atribution").innerHTML = '— Zeno of Citium';
} else if (randomQuote() === stoicQuote[4]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[4];
  document.querySelector("#quote-atribution").innerHTML = '— Marcus Aurelius';
} else if (randomQuote() === stoicQuote[5]){
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[5];
  document.querySelector("#quote-atribution").innerHTML = '— Lucius Annaeus Seneca';
} else if (randomQuote() === stoicQuote[6]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[6];
  document.querySelector("#quote-atribution").innerHTML = '— Epictetus';
} else if (randomQuote() === stoicQuote[7]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[7];
  document.querySelector("#quote-atribution").innerHTML = '— Marcus Aurelius';
} else if (randomQuote() === stoicQuote[8]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[8];
  document.querySelector("#quote-atribution").innerHTML = '— Seneca';
} else if (randomQuote() === stoicQuote[9]) {
  document.querySelector("#quote-shuffle").innerHTML = stoicQuote[9];
  document.querySelector("#quote-atribution").innerHTML = '— Seneca';
} else {
  document.querySelector("#quote-shuffle").innerHTML = '“Death Smiles At Us All”';
  document.querySelector("#quote-atribution").innerHTML = '— Unknown';
}


// Form Results

function calculateResults() {

  if (document.querySelector("#birthday").value) {

    const birthday = document.querySelector("#birthday").value;
    console.log(birthday);

    const ageMilliseconds = Date.now() - new Date(birthday);
    console.log(ageMilliseconds);

    const ageOfDeath = document.querySelector("#death-age").value;
    console.log(ageOfDeath);

    const ageOfDeathMilliseconds = ageOfDeath * 31556952000;
    console.log(ageOfDeathMilliseconds);

    const perctentageLived = parseInt((ageMilliseconds / ageOfDeathMilliseconds) * 100);
    console.log(perctentageLived);
    document.querySelector("#percentage-int").innerHTML = perctentageLived;

    var i = 0;
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("progress");
        var width = 1;
        var id = setInterval(frame, 15);
        function frame() {
          if (width >= perctentageLived) {
            clearInterval(id);
            i = 0;
          } else {
            width++;
            elem.style.width = width + "%";
          }
        }
      }

    const millisecondsLeft = ageOfDeathMilliseconds - ageMilliseconds;
    console.log(millisecondsLeft);

    const yearsLeft = parseInt(millisecondsLeft / 31556952000);
    console.log(yearsLeft);
    document.querySelector("#years").innerHTML = yearsLeft;

    const monthsLeft = parseInt(millisecondsLeft / 2629746000);
    console.log(monthsLeft);
    document.querySelector("#months").innerHTML = monthsLeft;

    const weeksLeft = parseInt(millisecondsLeft / 604800000);
    console.log(weeksLeft);
    document.querySelector("#weeks").innerHTML = weeksLeft;

    const daysLeft = parseInt(millisecondsLeft / 86400000);
    console.log(daysLeft);
    document.querySelector("#days").innerHTML = daysLeft;

    // How long you want the animation to take, in ms
    const animationDuration = 2000;
    // Calculate how long each ‘frame’ should last if we want to update the animation 60 times per second
    const frameDuration = 1000 / 60;
    // Use that to calculate how many frames we need to complete the animation
    const totalFrames = Math.round( animationDuration / frameDuration );
    // An ease-out function that slows the count as it progresses
    const easeOutQuad = t => t * ( 2 - t );

    // The animation function, which takes an Element
    const animateCountUp = el => {
      let frame = 0;
      const countTo = parseInt( el.innerHTML, 10 );
      // Start the animation running 60 times per second
      const counter = setInterval( () => {
        frame++;
        // Calculate our progress as a value between 0 and 1
        // Pass that value to our easing function to get our
        // progress on a curve
        const progress = easeOutQuad( frame / totalFrames );
        // Use the progress value to calculate the current count
        const currentCount = Math.round( countTo * progress );

        // If the current count has changed, update the element
        if ( parseInt( el.innerHTML, 10 ) !== currentCount ) {
          el.innerHTML = currentCount;
        }

        // If we’ve reached our last frame, stop the animation
        if ( frame === totalFrames ) {
          clearInterval( counter );
        }
      }, frameDuration );
    };

    // Run the animation on all elements with a class of ‘countup’
      const countupEls = document.querySelectorAll( '.countup' );
      countupEls.forEach( animateCountUp );

  } else {
    alert('Please Fill In Your Birthday. 💀')
  }
}
