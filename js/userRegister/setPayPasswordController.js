var setPayPasswordModule = angular.module("setPayPwd",[])
setPayPasswordModule.controller("setPayPasswordController", function ($scope) {
    $scope.payPassword = $('#payPassword').val()
    $scope.confirmPayPassword = $('#confirmPayPassword').val()

    $scope.setPayPwdFinish = function () {
        $.ajax({
            async:false,
            url:"http://t10.beauityworld.com/YSUserAPI/register_three?mobile=18037367631?paymentpwd="+$scope.payPassword+"?repaymentpwd="+$scope.confirmPayPassword,
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
