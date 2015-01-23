var analyticsCtrl = function ($scope, underscore, dialogs, $rootScope, SweetAlert) {

  $scope.result = {};
  $scope.isAnalytics = false;

  $scope.analytics = function () {
    if (document.getElementById('source').files.length === 0) {
      swal("請選擇檔案", "發生錯誤", "error");
      return;
    }

    $('#source').parse({
      config: {
        encoding: 'big5',
        complete: function (results) {
          var result = results.data.slice(4);
          underscore.each(result, function (value, key) {
            if (underscore.size(value) === 1 || value[1] === '') {
              return;
            }
            var words = value[7].split(/(　|\s)?\d+/);
            var area = words[0].substring(6);
            var count = $scope.result[area] === undefined ? 0 : $scope.result[area];
            $scope.result[area] = count + 1;
          });
          SweetAlert.swal("Good job!", "分析完成!", "success");
          $scope.isAnalytics = true;
        }
      }
    });
  };
};


var parseIntFilterEmpty = function (value) {
  return parseInt(value) || 0;
}

app.controller('analyticsCtrl', analyticsCtrl);