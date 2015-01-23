var analyticsCtrl = function ($scope, underscore, dialogs, $rootScope, SweetAlert) {

  $scope.init = function () {

  };

  $scope.analytics = function () {
    if (document.getElementById('source').files.length === 0) {
      swal("請選擇檔案", "發生錯誤", "error");
      return;
    }

    $('#source').parse({
      config: {
        complete: function (results) {
          $scope.$apply();
        }
      }
    });
  };
};


var parseIntFilterEmpty = function (value) {
  return parseInt(value) || 0;
}

app.controller('analyticsCtrl', analyticsCtrl);