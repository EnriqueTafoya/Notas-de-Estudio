(function(){

    $(document).ready(function(evt){

        var app = {
            $contentBlockButtons: null,
            $cleanSearchBoxButton: null,
            $searchBox: null,
            totalContentBlockButtons: 0,
            init: function() {                
                app.$contentBlockButtons = $(".content-block-button");
                app.totalContentBlockButtons = app.$contentBlockButtons.length;
                app.$searchBox = $("#searchBox");
                app.$cleanSearchBoxButton = $("#cleanSearchBoxButton");                

                this.enableSmoothScroll();
                this.enableCodeHighlighting();
                this.enableSearchBox();
                this.enableCleanSearchBox();
            }, //init
            enableSmoothScroll: function(){
                var $html = $("html");

                //Display content blocks
                app.$contentBlockButtons.on("click", function(evt){  

                    evt.preventDefault();

                    app.$contentBlockButtons.removeClass("active");
                    evt.target.className += " active";

                    if (this.hash !== null && this.hash !== ""){                
                        var target = document.getElementById( this.hash.replace("#", "") );
                        var elementTop = ( target.offsetTop < 70 ) ? 0 : target.offsetTop;
                        $html.animate({
                            scrollTop: elementTop
                        }, 800);
                    }//if this.hash      
                    
                    return false;

                 });//contentBlockButtons.on
            },//enableSmoothScroll
            enableCodeHighlighting: function () {
                hljs.highlightAll();
            },//enableCodeHighlighting
            enableSearchBox: function(){                
                app.$searchBox.keyup(function(evt){
                    var input = this.value.trim().toLowerCase();
                    var inputLength = input.length;
                    if (inputLength > 0) {
                        app.showCleanSearchBoxButton();
                        for(var i = 0; i < app.totalContentBlockButtons ; i++) {
                            var iText = app.$contentBlockButtons[i].innerHTML.toLowerCase();                            
                            if (iText.indexOf(input) === -1){
                                app.$contentBlockButtons[i].style.display = "none";
                            } else {
                                app.$contentBlockButtons[i].style.display = "block";
                            }
                        }//for
                    } else {
                        app.hideCleanSearchBoxButton();
                        app.showContentBlockButtons();
                    }
                });//$searchBox.keydown                
            },//enableSearchBox
            enableCleanSearchBox: function(){
                this.$cleanSearchBoxButton.click(function(evt){
                    app.$searchBox.val("");
                    app.showContentBlockButtons();
                    app.hideCleanSearchBoxButton();
                });
            },//enableCleanSearchBox
            showContentBlockButtons: function(){
                for (var i = 0; i < this.totalContentBlockButtons ; i++)
                    this.$contentBlockButtons[i].style.display = "block";
            },//showContentBlockButtons
            showCleanSearchBoxButton: function(){
                this.$cleanSearchBoxButton.show();
            },//showCleanSearchBoxButton
            hideCleanSearchBoxButton: function(){
                this.$cleanSearchBoxButton.hide();
            },//hideCleanSearchBoxButton
        };//app;

        app.init();

    });//document.ready

})(); // IIF