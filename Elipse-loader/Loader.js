function createLoader() {
    var container = '<div class="container"></div>';
    var ring = '<div class="ring"></div>';
    var p = '<p>Loading...</p>';
    $("body").append(container);
    $(".container").append(ring);
    $(".container").append(ring);
    $(".container").append(ring);
}
createLoader()