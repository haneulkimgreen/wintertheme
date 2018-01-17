(function($){
// jquery start ====================

var wrap = $('#wrap');

//불러올 파일 목록 만들기
var baseUrl = './src/';
var loadFile = {headBox: baseUrl +  'headBox.html',
                content: baseUrl +  'main_content_01.html',
                footBox: baseUrl +  'footBox.html'
              };

// header import
// wrap.prepend('<div id="headBoxWrap"></div>');
// var headBoxWrap = $('#headBoxWrap');

// headBoxWrap.load(loadFile.headBox , function() {
// var headBox = $('#headBox');
// var headBoxBg = headBox.css('backgroundColor');

// headBoxWrap.css({'backgroundColor':headBoxBg});

// });
ImportFile('headBox', loadFile.headBox);
ImportFile('contentBox', loadFile.content);
ImportFile('footBox', loadFile.footBox);

// bannerBox import
// headBoxWrap.after('<div id="bannerBoxWrap"></div>')
// var bannerBoxWrap = $('#bannerBoxWrap');
//bannerBoxWrap.load(loadFile.bannerBox);
// ImportFile(bannerBoxWrap, loadFile.bannerBox, true);

// aboutBox
// bannerBoxWrap.after('<div id="aboutBoxWrap"></div>');
// var aboutBoxWrap = $('#aboutBoxWrap');

// aboutBoxWrap.load(loadFile.aboutBox , function() {
// var aboutBox = $('#aboutBox');
// var aboutBoxBg = aboutBox.css('backgroundColor');

// aboutBoxWrap.css({'backgroundColor':aboutBoxBg});

// });
// ImportFile(aboutBoxWrap, loadFile.aboutBox, true);

//newsBox
// aboutBoxWrap.after('<div id="newsBoxWrap"></div>');
// var newsBoxWrap = $('#newsBoxWrap');

// newsBoxWrap.load(loadFile.newsBox , function() {
// var newsBox = $('#newsBox');
// var newsBoxBg = newsBox.css('backgroundColor');

// newsBoxWrap.css({'backgroundColor':newsBoxBg});

// });
// ImportFile(newsBoxWrap, loadFile.newsBox, true);

//blogBox
// newsBoxWrap.after('<div id="blogBoxWrap"></div>');
// var blogBoxWrap = $('#blogBoxWrap');

// blogBoxWrap.load(loadFile.blogBox , function() {
// var blogBox = $('#blogBox');
// var blogBoxBg = blogBox.css('backgroundColor');

// blogBoxWrap.css({'backgroundColor':blogBoxBg});

// });
// ImportFile(blogBoxWrap, loadFile.blogBox, true);

//lnbBox
// blogBoxWrap.after('<div id="lnbBoxWrap"></div>');
// var lnbBoxWrap = $('#lnbBoxWrap');

// lnbBoxWrap.load(loadFile.lnbBox , function() {
// var lnbBox = $('#lnbBox');
// var lnbBoxBg = lnbBox.css('backgroundColor');
// lnbBoxWrap.css({'backgroundColor':lnbBoxBg});
// });

// ImportFile(lnbBoxWrap, loadFile.lnbBox, true);

//footNavBox
// lnbBoxWrap.after('<div id="footNavBoxWrap"></div>');
// var footNavBoxWrap = $('#footNavBoxWrap');

// footNavBoxWrap.load(loadFile.footNavBox , function() {
// var footNavBox = $('#footNavBox');
// var footNavBoxBg = newsBox.css('backgroundColor');

// footNavBoxWrap.css({'backgroundColor':footNavBoxBg});

// });
// ImportFile(footNavBoxWrap, loadFile.footNavBox, true);

// footer import
// wrap.append('<div id="footBoxWrap"></div>');
// var footBoxWrap = $('#footBoxWrap');

// footBoxWrap.load(loadFile.footBox , function() {
// var footBox = $('#footBox');
// var footBoxBg = footBox.css('backgroundColor');

// footBoxWrap.css({'backgroundColor':footBoxBg});

// });
// ImportFile(footBoxWrap, loadFile.footBox, true);

// // 각 기능을 요약해서 처리할 함수로 바꾸기  호이스트 현상으로 제일 아래있어도 위에서부터 먹는다.
// function ImportFile(select, file, backgroundIf) {
//   select.load(file, function() {
//     select.addClass('clearfix');
//     var childrenBox = select.children();
//     childrenBox.css({margin: '0 auto'});

//     if(backgroundIf == true){
//       var bgColor = childrenBox.css('backgroundColor');
//       // console.log( 'select:' + childrenBox, 'background:' + bgColor);
//       select.css({'backgroundColor':bgColor});
//     }
//   });  
// };
// jquery end ====================

})(this.jQuery);