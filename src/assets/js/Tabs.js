$(function() {
    $('#addTab').click(function() {
        var num_tabs = $('div#tabs ul li.tab').length + 1;
        $('div#tabs ul').append(
            '<li class="tab"><a href="#tab-' + num_tabs + '">Section ' + num_tabs + '</a></li>');

        $('div#tabs').append(
            '<div id="tab-' + num_tabs + '"></div>');
        $('#tabs').tabs("refresh");
        $('#tabs').tabs("option", "active", -1); //makes the new tab active

        insertContent("asdf");
    });
});

//Insert content into the currently selected tab
function insertContent(content) {
    var activeTab = $("#tabs").tabs('option', 'active');
    activeTab += 1;
    $("#tab-" + activeTab).append(content);
}
$('#tabs').tabs();