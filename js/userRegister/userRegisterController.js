var userRegModule = angular.module("userReg",[])
userRegModule.controller("userRegController", function ($scope, $http) {
    $scope.mobile = $('#mobile').val()
    $scope.verify_code = $('#verify_code').val()
    $scope.status = $('#status').val()



    var userData = {
        'mobile':$scope.mobile,
        'verify_code': $scope.verify_code,
        'status': $scope.status
    }

    $scope.getVerifyCode = function () {
        $.ajax({
            async:false,
            url:"http://t10.beauityworld.com/YSUserAPI/getVerifyCodeByUserMobile?mobile="+$scope.mobile,
            type: "POST",
            dataType: 'jsonp',
            jsonp: 'jsoncallback',
            data: userData,
            timeout: 5000,
            success: function () {
                alert('successful')
            },
            error: function(){
                alert("error")
            }
        })
    }
    $scope.test_isVerifyCodeCorrect = function(){
        var url = "mobile: "+$scope.mobile+"verify_code: "+$scope.verify_code+"status: "+1
        $.ajax({
            async:false,
            url: "http://t10.beauityworld.com/YSUserAPI/register_one?mobile="+$scope.mobile+"?verify_code="+$scope.verify_code+"?status="+1,
            type:"POST",
            dataType:'jsonp',
            jsonp:'jsoncallback',
            timeout:5000,
            success:function(data){
                var flag = data.code
                if(flag===1){
                    document.location.href = "setPassword.html"
                }else{
                    console.log('data.code = 0 ::: 验证错误')
                }
            },
            error:function(){
                console.log("something happen")
            }
        })
    }
})