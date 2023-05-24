$(document).ready(function(){


    var data=[
        {
            
        "title":"Egypt Tangria",
        "sub_tile":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        "img":"./assests/images/1.jpeg",
        "date":"Aug 5,2013",
        "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/1.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/2.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/3.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/4.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/4.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/6.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/7.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/8.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/9.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/10.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
        {
            
            "title":"Egypt Tangria",
            "sub_tile":"Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
            "img":"./assests/images/11.jpeg",
            "date":"Aug 5,2013",
            "comments":"14 Comments"
        },
       

]
var imgwrap=$('#M_img_wrapper');
var contentwrap =$('#M_content_wrapper');
var cardwrapper=$('#cards_wrapper')
for (let index = 0; index < data.length; index++) {
    var col=$('<div></div>');
    col.addClass("col-md-4 mb-5");
    var card=$('<div id="js_card'+index+'"></div');
    card.addClass('card h-100 ');
    card.attr('data-toggle','modal');
    card.attr('data-target','#exampleModalCenter');

    var img=$('<img />');
    img.attr('src',data[index].img);
    img.addClass('img');
    var content_wrap=$('<div></div>');
    content_wrap.addClass("content_wrapper text-center");
    var card_title=$('<div></div');
    card_title.addClass('card_title');
    card_title.text(data[index].title)
    var card_subtitle=$('<div></div');
    card_subtitle.addClass('card_subtitle');
    var temp;
    if(data[index].sub_tile.length>=420){
        temp=data[index].sub_tile.slice(0, 100)+'..';
   
    } 
    else{
        temp=data[index].sub_tile; 
    }
    card_subtitle.text(temp);
    content_wrap.append(card_title).append(card_subtitle);

    var details_wrap=$('<div></div>');
    details_wrap.addClass("d-flex align-items-center justify-content-between ");

    var date_wrap=$('<div></div>');
    date_wrap.addClass("d-flex align-items-center ");
    var date_icon=$('<i></i>');
    date_icon.addClass('fa fa-calendar');
    var date_text=$('<div></div>');
    date_text.addClass("content_text");
    date_text.text(data[index].date);
    date_wrap.append(date_icon).append(date_text);

    var comment_wrap=$('<div></div>');
    comment_wrap.addClass("d-flex align-items-center ");
    var comment_icon=$('<i></i>');
    comment_icon.addClass('fa fa-comments-o');
    var comment_text=$('<div></div>');
    comment_text.addClass("content_text");
    comment_text.text(data[index].comments);
    comment_wrap.append(comment_icon).append(comment_text);

    details_wrap.append(date_wrap).append(comment_wrap);
    content_wrap.append(details_wrap);



    


    col.append(card.append(img).append(content_wrap));
    cardwrapper.append(col);
    
    $("#js_card"+index).click(function(){
       
        
            
            $("#exampleModalCenter").modal("show");
            contentwrap.empty();
            imgwrap.empty();
            var image=$('<img />');
            image.attr("src",data[index].img);
            image.addClass('img-fluid');

            var m_title=$('<div></div>')
            m_title.text(data[index].title);
            m_title.addClass("card_title");

            var m_subtitle=$('<div></div>')
            m_subtitle.text(data[index].sub_tile);
            m_subtitle.addClass("card_subtitle");

            imgwrap.append(image);
            contentwrap.append(m_title).append(m_subtitle);



        
          
     
        });
}
$(".close").click(function(){
       
        
            
    $("#exampleModalCenter").modal("hide");

  

});









  });