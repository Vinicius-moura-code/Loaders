function createLoader() {
  var ContainerLoader = '<div class="ContainerLoader"></div>';
  var iris = '<div class="iris"></div>';
  var pupil = '<div class="pupil"></div>';
  var tomoesarea = '<div class="tomoe-area"></div>';
  var tomoes = '<div class="tomoes"></div>';
  var tomoe = '<div class="tomoe"></div>';
  let sharingan = '<div class="sharingan"></div>';
  $("body").append(ContainerLoader);
  $(".ContainerLoader").append(sharingan);
  $(".sharingan").append(pupil);
  $(".sharingan").append(iris);
  $(".sharingan").append(tomoes);
  $(".tomoes").append(tomoesarea);
  $(".tomoes").append(tomoesarea);
  $(".tomoes").append(tomoesarea);
  $(".tomoe-area").append(tomoe);
}

createLoader();

function removeLoader() {
  $(".tomoe-area").html("");
  $(".tomoes").html("");
  $(".sharingan").html("");
}
function removeLoaderTeste() {
  $(".ContainerLoader").remove();
}
