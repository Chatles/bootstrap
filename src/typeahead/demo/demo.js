angular.module('ui.bootstrap.typeahead').run(function() {!angular.$$csp().noInlineStyle && !angular.$$uibTypeaheadCss && angular.element(document).find('head').prepend('<style type="text/css">[uib-typeahead-popup].dropdown-menu{display:block;}</style>'); angular.$$uibTypeaheadCss = true;});

angular.module('demo', ['ngAnimate', 'ngSanitize', 'uib/template/typeahead/typeahead-popup.html', 'uib/template/typeahead/typeahead-match.html', 'ui.bootstrap.typeahead']);
angular.module('demo').controller('DemoCtrl', function($scope, $timeout, $q) {


  //'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Dakota', 'North Carolina', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  $scope.companyList = [{name: 'Alabama', id: 1}, {name:'Alaska', id:2}, {name:'Arizona',id:3}];

  $scope.ha = 'xxx';

  $scope.createCompany = function(name) {
    var defer = $q.defer();
    $timeout(function() {
      console.log('name=', name);
      defer.resolve({
        name: name
      });
    }, 2000);
    return defer.promise;
  };

});
