let quotes = [
  {
    name: "Laverne Cox",
    engQuote: "Who you are is beautiful and amazing.",
    myaQuote: "မင်းရဲ့ဖြစ်တည်မှုတိုင်းက လှပပြီးတော့ အံ့သြစရာကောင်းတယ်။"
  },

  {
    name: "Harvey Milk",
    engQuote: "Hope will never be silent.",
    myaQuote: "မျှော်လင့်ချက်ဆိုတာ ဘယ်တော့မှ မတိတ်ဆိတ်သွားဘူး။"
  },

  {
    name: "Melissa Etheridge",
    engQuote: "Love is never wrong.",
    myaQuote: "အချစ်ဆိုတာ ဘယ်တော့မှမမှားဘူး။"
  },
 
  {
    name: "Rick Parnell",
    engQuote: "To realize a world of equality and dignity for all, we will have to change laws and policies; we will also have to change hearts and minds.",
    myaQuote: "ကမ္ဘာကြီးရဲ့ တန်းတူညီမျှမှုနဲ့ ဂုဏ်သိက္ခာကို နားလည်သဘောပေါက်ဖို့အတွက် ကျွန်တော်တို့တွေက ဥပဒေတွေ၊ မူဝါဒတွေကို ပြောင်းလဲရမှာဖြစ်သလို ကျွန်တော်တို့ရဲ့ နှလုံးသားနဲ့ စိတ်ကိုလည်း ပြောင်းလဲဖို့ လိုအပ်ပါတယ်။"
  }, 

  {
    name: "Oprah Winfrey",
    engQuote: "Life is about finding yourself, embracing your strengths and weaknesses, and being true to who you are.",
    myaQuote: "ဘဝဆိုတာ ကိုယ့်ကိုယ်ကိုယ် ရှာဖွေဖို့၊ အားသာချက်၊ အားနည်းချက်ကို သိဖို့နဲ့ မင်းဘယ်လိုလူဖြစ်တယ်ဆိုတာကို လက်ခံဖို့ ဖြစ်ပါတယ်။"
  },
  
  {
    name: "Billie Jean King",
    engQuote: "No one changes the world who isn’t obsessed.",
    myaQuote: "စိတ်ဓာတ်ပြင်းပြမှုမရှိဘဲ ကမ္ဘာကြီးကို ပြောင်းလဲလို့မရဘူး"
  },

  {
    name: "Harvey Fierstein",
    engQuote: "Accept no one’s definition of your life, define yourself.",
    myaQuote: "မင်းဘဝကို တခြားသူတွေ  လာရောက်စွက်ဖက်တဲ့အရာတွေကိုလက်မခံဘဲ မင်းဘဝအတွက် ကိုယ့်ဟာကိုယ် သတ်မှတ်ပါ။"
  },
];

  let quotesCollection = () => {
  let num1 = Math.floor(Math.random() * 256);
  let num2 = Math.floor(Math.random() * 256);
  let num3 = Math.floor(Math.random() * 256);

  let engQuote = document.getElementById("english");
  let myaQuote = document.getElementById("myanmar");
  let name = document.getElementById("name");
  let randomQuote = Math.floor(Math.random() * quotes.length);
  engQuote.innerText = `${quotes[randomQuote].engQuote}`;
  myaQuote.innerText = `${quotes[randomQuote].myaQuote}`;
  name.innerText = `${quotes[randomQuote].name}`;
  
   engQuote.style.color= `rgb(${num1}, ${num2}, ${num3})`;
   myaQuote.style.color= `rgb(${num1}, ${num2}, ${num3})`;
   name.style.color= `rgb(${num1}, ${num2}, ${num3})`;
  setTimeout(quotesCollection, 3000);
};

setTimeout(quotesCollection, 0);
