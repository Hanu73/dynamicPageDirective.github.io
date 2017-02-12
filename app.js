var app = angular.module('paginationModule', []);




app.directive("pagination", function($compile, $filter) {
    return {

        scope: {
            user: '=page',
            items: '=items',

        },
        restrict: 'E',
        template: '<div class="row"  ng-init="initPage()"><div class="col-sm-4"><ul class="pagination" style="margin-bottom: 0px;"> <li "><a href ng-click="firstPage" title="First Page"> <span class="glyphicon glyphicon-fast-backward"></span></a></li><li ><a href ng-click="previousPage()" title="Previous Page"><span class="glyphicon glyphicon-step-backward"></span></a></li><li><li  ><a href ng-click="nextPage()" title="Next Page"><span class="glyphicon glyphicon-step-forward"></span></a></li> <li  ><a href ng-click="lastPage()" title="Last Page"><span class="glyphicon glyphicon-fast-forward"></span> </a></li></ul><input type="text" ng-model="pageNumber" ng-keyup="gotoPage(pageNumber)"style="width:30px">/<a href"#" ng-bind="totalPages"></a></li></div><div class="col-sm-4" style="margin-top: 25px;"><select style="width:70px" ng-change="setPageLimit(pageSelection)" ng-model="pageSelection"><option ng-repeat="entry in totalEntries" value="{{entry}}" >{{entry}}</option></select></div>  <div class="col-sm-4" style="margin-top: 25px;"> search<input type="text" ng-model="searchText" ng-change="searchPageData(searchText)" placeholder="search Text"></div></div><div class="row"><div ng-show="resultPageData.length>0"><ng-include src="getTemplateUrl()"/></div>  <div ng-show="resultPageData.length==0"><h1>No Records are matching</h1></div></div>',

        controller: function($scope, $filter) {

            $scope.totalItems = $scope.items.length;
            $scope.totalEntries = [];
            for (i = 10; i <= $scope.totalItems; i = i + 10) {
                $scope.totalEntries.push(i);
            }
            $scope.pageSelection = $scope.totalEntries[0];



            $scope.initPage = function() {
                $scope.currentPage = 0;
                $scope.pageNumber = $scope.currentPage + 1;


                $scope.entryLimit = 10; // items per page
                $scope.resultPageData = $scope.items.slice(0, $scope.entryLimit);
                $scope.totalPages = $scope.numPages($scope.items);

            }
            $scope.getTemplateUrl = function() {

                var pageDetail = $scope.user + ".html";

                return pageDetail;

            }

            $scope.nextPage = function() {

                $scope.currentPage = $scope.currentPage + 1;
                $scope.pageNumber = $scope.currentPage + 1;

                var begin = (($scope.currentPage) * $scope.entryLimit),
                    end = begin + $scope.entryLimit;

                $scope.resultPageData = $scope.items.slice(begin, end);

            }


            $scope.gotoPage = function(pageIndex) {
                var begin = ((pageIndex - 1) * $scope.entryLimit),
                    end = begin + $scope.entryLimit;

                $scope.resultPageData = $scope.items.slice(begin, end);
            }

            $scope.previousPage = function()

            {

                $scope.currentPage = $scope.currentPage - 1;
                $scope.pageNumber = $scope.currentPage + 1;
                var begin = (($scope.currentPage) * $scope.entryLimit),
                    end = begin + $scope.entryLimit;

                $scope.resultPageData = $scope.items.slice(begin, end);
            }
            $scope.setPageLimit = function(limit) {
                $scope.entryLimit = parseInt(limit);
                $scope.currentPage = 0;
                $scope.pageNumber = $scope.currentPage + 1;
                var begin = (($scope.currentPage) * $scope.entryLimit),
                    end = begin + $scope.entryLimit;
                $scope.resultPageData = $scope.items.slice(begin, end);
                $scope.totalPages = $scope.numPages($scope.items);
            }

            $scope.searchPageData = function(searchName) {

                $scope.resultPageData = $filter('filter')($scope.items, searchName);
                $scope.totalPages = $scope.numPages($scope.resultPageData);
            }

            $scope.numPages = function(pageItems) {

                return Math.ceil(pageItems.length / $scope.entryLimit);
            };

            $scope.firstPage = function() {
                $scope.currentPage = 0;
                $scope.pageNumber = $scope.currentPage + 1;
                var begin = (($scope.currentPage) * $scope.entryLimit),
                    end = begin + $scope.entryLimit;

                $scope.resultPageData = $scope.items.slice(begin, end);
            }


            $scope.lastPage = function() {
                $scope.currentPage = $scope.totalPages - 1;
                $scope.pageNumber = $scope.currentPage + 1;
                var begin = (($scope.currentPage) * $scope.entryLimit),
                    end = begin + $scope.entryLimit;

                $scope.resultPageData = $scope.items.slice(begin, end);
            }



        }



    };
});


var userApp = angular.module('userApp', ['paginationModule']);


userApp.controller('userController', function($scope)

    {
        $scope.items = [{
                "id": "100",
                "name": "Sonoo",
                "salary": "50000"
            },
            {
                "id": "101",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "102",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "103",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "104",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "105",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "106",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "107",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "108",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "109",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "110",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "111",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "112",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "113",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "114",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "115",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "116",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "117",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "118",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "119",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "120",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "121",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "122",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "123",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "124",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "125",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "126",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "127",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "128",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "129",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "130",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "131",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "132",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "133",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "134",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "135",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "136",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "137",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "138",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "102",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "101",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "102",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "101",
                "name": "Sonoo Jaiswal",
                "salary": "50000"
            },
            {
                "id": "102",
                "name": "Vimal Jaiswal",
                "salary": "60000"
            },
            {
                "id": "101",
                "name": "Sonoo ajay",
                "salary": "50000"
            },
            {
                "id": "102",
                "name": "Vimal naresh",
                "salary": "60000"
            }
        ]

        $scope.pageNames = ["page1", "page2"];
        $scope.pageName = $scope.pageNames[0];


    })
