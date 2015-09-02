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
                alert('获取验证码成功')
            },
            error: function(){
                alert("获取验证码失败")
            }
        })
    }

    $scope.test_isVerifyCodeCorrect = function(){
        var url = "mobile: "+$scope.mobile+"verify_code: "+$scope.verify_code+"status: "+1
        $.ajax({
            async:false,
            url: "http://t10.beauityworld.com/YSUserAPI/register_one",
            //data:{"mobile":$scope.mobile,"verify_code":$scope.verify_code,"status":1},
            data: userData,
            type:"GET",
            dataType:'jsonp',
            jsonp:'jsoncallback',
            timeout:5000,
            success:function(data){
                var json = eval(data);
                var flag = json.code
                if(flag==1){
                    //这种写法很恶心,后续改之
                    document.location.href = "setPassword.html"
                }else{
                    alert('验证错误,请重新输入')
                }
            },
            error:function(){
                console.log("数据请求失败")
            }
        })
    }
})