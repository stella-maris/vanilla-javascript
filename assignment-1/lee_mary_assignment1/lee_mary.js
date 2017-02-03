window.onload = function () {
    var changeDivs = document.getElementsByClassName("change");
    for (var i = 0; i < changeDivs.length; i++) {
        var changePars = changeDivs[i].getElementsByTagName('p');
        for (var j = 0; j < changePars.length; j++) {
            changePars[j].onmouseout = function() {
                this.style.color='black';
            };
            changePars[j].onmouseover = function () {
                this.style.color='red';
            };                     
        }
    };

    var allParagraphs = document.getElementsByTagName('p');
    for (var i = 0; i < allParagraphs.length; i++) {
        allParagraphs[i].onclick = function() {
//                        console.log(this.style.border);
            if (this.style.border == 'none' || this.style.border == '') {
                this.style.border = "1px dashed black";
            j} else {
                this.style.border = "none";
            }                   
        };
    };

    var top = document.getElementById('top').getElementsByTagName('img');
    var middle = document.getElementById('middle').getElementsByTagName('img');
    for (var i = 0; i < top.length; i++) {
        top[i].ondblclick = function() {
            this.style.display = "none";
        }    
    }
    for (var i = 0; i < middle.length; i++) {
        middle[i].ondblclick = function() {
            this.style.display = "none";
        }    
    };
    
  
    var bottom = document.getElementById('bottom').getElementsByTagName('a');
    for (var i = 0; i < bottom.length; i++) {
        var attr = bottom[i].getAttribute('href');
        if (attr.indexOf('nhl') > -1) {
            bottom[i].setAttribute('href', 'www.nhl.com?#');
//            bottom[i].setAttribute('href', '');
        }
    };
    
 var allImages = document.getElementsByTagName('img');
    for (var i = 0; i < allImages.length; i++) {
        allImages[i].width = 200;
    }
    
}