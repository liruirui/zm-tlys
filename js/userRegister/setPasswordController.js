var setPasswordModule = angular.module("setPwd",[])
setPasswordModule.controller("setPasswordController", function ($scope) {
    $scope.password = $("#getPwd").val()
    $scope.confirmPassword = $("#getPwdConfirm").val()

    /*
    可以跨域请求数据，但是返回的code值为0，提示“手机格式有误”
    * */
    $scope.setPwdFinish = function(){
        alert($scope.password + "&&" + $scope.confirmPassword)
            $.ajax({
                async:false,
                url:"http://t10.beauityworld.com/YSUserAPI/register_two?mobile=18037367631?password"+$scope.password+"?repassword="+$scope.confirmPassword,
                type: "POST",
                dataType: 'jsonp',
                jsonp: 'jsoncallback',
                timeout: 5000,
                success: function () {
                    alert('successful')
                },
                error: function(){
                    alert("error")
                }
            })
    }
})