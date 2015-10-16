angular.module("template/typeahead/typeahead_popup_company.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("template/typeahead/typeahead_popup_company.html",
    "<ul class=\"dropdown-menu\" ng-show=\"isOpen() && !moveInProgress\"" +
    "ng-style=\"{top: position().top+'px', left: position().left+'px'}\"" +
    "style=\"display: block;\" role=\"listbox\"" +
    "aria-hidden=\"{{!isOpen()}}\">" +
    "<li ng-repeat=\"match in matches track by $index\""+
    "ng-class=\"{active: isActive($index) }\""+
    "ng-mouseenter=\"selectActive($index)\""+
    "ng-click=\"selectMatch($index)\""+
    "role=\"option\""+
    "id=\"{{::match.id}}\">"+
    "<div uib-typeahead-match index=\"$index\" match=\"match\" query=\"query\" template-url=\"templateUrl\"></div>"+
    "</li>"+
    "<li ng-show=\"showCreate\" data-ng-class=\"{active: isActive('createCompany')}\""+
    "ng-mouseenter=\"selectActive('createCompany')\""+
    "ng-click=\"selectMatch('createCompany')\" role=\"option\">"+
    "<a href tabindex=\"-1\"> create company </a>"+
    "</li>"+
    "</ul>");
}]);
