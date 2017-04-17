/**
 * Created by Administrator on 2017/4/12.
 */
(function (window) {
    var FlyObj= {};
    //工具函数
    FlyObj.loadImages = function( imgSrc, callback ) {
        var count = 0,
            imgsLen = imgSrc.length,
            imgList = {};

        imgSrc.forEach(function(val, index) {
            var img = new Image();
            img.src = 'images/' + val + '.png';
            imgList[ val ] = img;

            img.onload = function() {
                count++;

                if( count >= imgsLen ) {
                    callback( imgList );
                }
            };
        });
    };
    FlyObj.toRadian = function( angle ) {
        return angle / 180 * Math.PI;
    };

    // 动态创建canvas
    FlyObj.createCv = function( id ) {
        // 动态创建canvas标签
        var cv = document.createElement('canvas');
        cv.width = 800;
        cv.height = 600;

        // 将canvas标签追加到页面中（指定id元素中）
        var container = document.getElementById( id );
        container.appendChild( cv );

        // 返回上下文
        return cv.getContext('2d');
    };


    window.Fly=FlyObj;
})(window);