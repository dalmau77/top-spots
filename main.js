$(document).ready(function () {
    // write your code here
    $.getJSON("data.json", function (data) {
        var newData = '';
        $.each(data, function (item, index) {
            newData += '<tr>';
            newData += '<td>' + index.name;
            newData += '<td>' + index.description + '</td>';
            newData += '<td><a href="https://www.google.com/maps?q=' + index.location + '">' + "open in google" + '</a></td>';
            newData += '</tr>';
        });
        $('#content').append(newData);
        console.log(newData);
    });
});

