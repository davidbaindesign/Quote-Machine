var authors = [];

function authorAdd (name,quotes,img){
  this.name = name;
  this.quotes = quotes;
  this.img = img;
  authors.push(this);
};

var Ddavis = new authorAdd("Dale Davis",["If you ever see me in a fight with a grizzly bear, pour honey on me."],"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUSlaBmfevOt025lkLrucLhHuVW3TArKbhFPOQPA1HbGOSeVi4pg");


var einstein = new authorAdd("Albert Einstein",
                         ["Insanity: doing the same thing over and over again and expecting different results." ,"The only source of knowledge is experience."],
                         "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTXJ6SmX_vOJN_pR9mnum6wJeFUYvxDRMrI9WYJ_9aO3pBlgzOfng");
      
  
var lincoln = new authorAdd("Abraham Lincoln",

["Nearly all men can stand adversity, but if you want to test a man's character, give him power.",
"Always bear in mind that your own resolution to succeed is more important than any other.",
"Whatever you are, be a good one."],
                       
"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTZpp0GTT_2MmH5_fEA6dhNwDly_DecBV_GLXET0qcw3z1hwK-0xA");
         

var jefferson = new authorAdd("Thomas Jefferson",
       ["Once you go black, you never go back."],        "https://pbs.twimg.com/profile_images/684856414939000832/E7DGVu8B.jpg");
  

var beethoven = new authorAdd("Beethoven",
          ["What!?"],
       "http://www.beethovenplus.com/wp-content/uploads/2013/12/BeethovenPic.jpg");

var bush = new authorAdd("George W. Bush",
                         
    ["Fool me once, shame on shame on you. Fool me you can't get fooled again."],
                         
"http://www.diamonds.net/News/FilesRep/Gallery/George%20W.%20Bush.JPG");

var jfk = new authorAdd("John F. Kennedy",
["Change is the law of life. And those who look only to the past or present are certain to miss the future.","As we express our gratitude, we must never forget that the highest appreciation is not to utter words, but to live by them."],
"http://1.bp.blogspot.com/_ug7WAB_NfJc/S9jDVf45fhI/AAAAAAAAAOg/eERFlRDzTNc/s320/jfk.jpg");

var mlk = new authorAdd(
"Martin Luther King Jr.",
  ["Life's most persistent and urgent question is, 'What are you doing for others?","Our lives begin to end the day we become silent about things that matter.","Faith is taking the first step even when you don't see the whole staircase."],
   "http://a4.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTE5NTU2MzE2MjgwNDg5NDgz.jpg");

var churchill = new authorAdd ("Winston Churchill",
  ["A lie gets halfway around the world before the truth has a chance to get its pants on."],
 "http://www.queensofvintage.com/wp-content/uploads/2010/05/winston_churchill.jpg");  

var Gandhi = new authorAdd("Mahatma Gandhi",
 ["Live as if you were to die tomorrow; learn as if you were to live forever."],
 "http://a1.files.biography.com/image/upload/c_fill,cs_srgb,dpr_1.0,g_face,h_300,q_80,w_300/MTIwNjA4NjMzODE4MjIwMDQ0.jpg" )

var colonel = new authorAdd("Colonel Sanders",
                            ["I'm too drunk to taste this chicken."],
                            "http://images.starpulse.com/news/resize_image.php?source_image_uri=http%3A%2F%2Fimages.starpulse.com%2Fnews%2Fbloggers%2F10%2Fblog_images%2Fnorm-macdonald-as-col-sanders.jpg&fp=270x169&target_height=300&target_width=300")


var colors = ["#EEA2AD","#EE82EE","#9F79EE","#436EEE","#00F5FF","#76EEC6","#FFF68F","#FFE4B5","#FF6347","#312e27","#a81d08","#ff8700","#52a67c","#01456b","#a65252"];
  
  function quote() {
    
    
    var who = Math.floor(Math.random() * authors.length);
    var what = Math.floor(Math.random() * authors[who].quotes.length);
    var shade = Math.floor(Math.random() * colors.length);
    
    
    
      $("#update").html("<div class= group1><div class=left><img class= round src =" + authors[who].img + "></div>" + "<div class=right><p><span class= quoteSt>"+'“'+"</span>" + authors[who].quotes[what] + "<span class= quoteEn>"+'”'+"</span></p><div class= author><p>-" + authors[who].name + "</div></div></div>");
    
    $("body").css("background-color",colors[shade]);
    
    
    $(".quoteSt,.quoteEn,.author").css("color",colors[shade]);
    
    
  };

$(document).ready(function() {
	quote();
});

function tweet() {
 
  window.open("https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + $("#update").text());
  
};