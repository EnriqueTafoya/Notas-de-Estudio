(function(){

    $(document).ready(function(e){

        var $sidebar = $("#sidebar");
        var $content = $("#content");
        var $sidebarToggle = $(".sidebar-toggle");

        //Toggle Sidebar
        $sidebarToggle.on("click", function(evt){
            evt.preventDefault();
            $sidebar.toggleClass("active");
            $content.toggleClass("active");
        });//sidebarToggle.click

    });//document.ready

})();//IInvoked function