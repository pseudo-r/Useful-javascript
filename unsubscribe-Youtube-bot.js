//UNSUSCRIPTION YOUTUBE
// 1. Go to https://www.youtube.com/subscription_manager
// 2. Open the Developer Console. (COMMAND+ALT+I on Mac)
// 3. Paste this into the Developer Console and run it
function reddit_strangestringtobesafe_unsubscribe(channel){channel.click();document.querySelector("#main yt-button-renderer#confirm-button").click();}Array.prototype.forEach.call(document.querySelectorAll("paper-button[subscribed].ytd-subscribe-button-renderer"), function(el){setTimeout(function(){reddit_strangestringtobesafe_unsubscribe(el);}, 10);});
