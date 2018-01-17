(function($){
// jquery start ====================

var wrap = $('#wrap');

//불러올 파일 목록 만들기
var baseUrl = './src/';
var loadFile = {headBox: baseUrl +  'headBox.html',
                content: baseUrl +  'main_content_04.html',
                footBox: baseUrl +  'footBox.html'
              };
ImportFile('headBox', loadFile.headBox);
ImportFile('contentBox', loadFile.content);
ImportFile('footBox', loadFile.footBox);

})(this.jQuery);