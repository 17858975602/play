/**
 * Created by Administrator on 2017/4/12.
 */
(function (Fly) {
    var Bird = function (config) {
        this.ctx=config.ctx;
        this.img=config.img;
        this.index = 0;
        this.imgW = this.img.width / 3;
        this.imgH = this.img.height;
//        画布中的坐标
        this.x=100;
        this.y = 100;
        //        加速度
        this.a = 0.0005;
//        初始速度
        this.v = 0;

//        最大角度
        this.maxAngel = 45;
//        最大角度达到的最大速度
        this.maxV = 0.5;
//        设置当前的角度
        this.curAngel = 0;
    };
    Bird.prototype={
        constructor:Bird,
        render: function (time) {
            var ctx=this.ctx;
            //           清空画布
            ctx.save();
            ctx.translate(this.x,this.y);
//            旋转的角度
            this.curAngel=this.maxAngel*this.v/this.maxV;
            if(this.curAngel>45){
                this.curAngel=45;
            }else if(this.curAngel<-45){
                this.curAngel=-45;
            }
            ctx.rotate(Fly.toRadian(this.curAngel));

//            画鸟
            ctx.drawImage(this.img, this.imgW * this.index++, 0, this.imgW, this.imgH, -this.imgW/2, -this.imgH/2, this.imgW, this.imgH);
            this.index = this.index % 3;


            this.v=this.v+this.a*time;

//         下落的距离 s=vt+1/2a*t*t
            this.y = this.y + (this.v * time + 1 / 2 * this.a * Math.pow(time, 2));


            ctx.restore();
        },
        changeSpeed: function (v) {
            this.v=v;
        },
    };
    Fly.Bird = Bird;
})(Fly);