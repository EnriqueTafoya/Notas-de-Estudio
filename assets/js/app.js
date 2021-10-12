(function(){

    $(document).ready(function(evt){

        var app = {
            init: function() {
                this.enableSmoothScroll();
                this.enableCodeHighlighting();
            }, //init
            enableSmoothScroll: function(){

                var $contentBlockButtons = $(".content-block-button");
                var $html = $("html");

                //Display content blocks
                $contentBlockButtons.on("click", function(evt){  

                    evt.preventDefault();

                    $contentBlockButtons.removeClass("active");
                    evt.target.className += " active";

                    if (this.hash !== null && this.hash !== ""){                
                        var target = document.getElementById( this.hash.replace("#", "") );
                        var elementTop = this.hash.indexOf("home") === 1 ? 0 : target.offsetTop;
                        $html.animate({
                            scrollTop: elementTop
                        }, 800);
                    }//if this.hash            

                 });//contentBlockButtons.on
            },//enableSmoothScroll
            enableCodeHighlighting: function () {

                hljs.highlightAll();

            }//enableCodeHighlighting

        };//app;

        app.init();

    });//document.ready

})(); // IIF