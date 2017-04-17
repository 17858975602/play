/**
 * Created by Administrator on 2017/4/12.
 */
(function (Fly) {
    var Sky= function (config) {
        this.ctx=config.ctx;
        this.img = config.img;
        this.sky_x = config.x||0;
        this.sky_y = config.y||0;
        this.imgW=this.img.width
        this.sky_speed = -0.15;
    };
    Sky.prototype.render= function (time) {
        var ctx=this.ctx;
        ctx.drawImage(this.img,  this.sky_x,  this.sky_y);

        // 天空背景为匀速运动
        this.sky_x += this.sky_speed * time;

        // 判断天空背景位置
        if (this.sky_x <= -this.imgW) {
            this.sky_x += this.imgW*2;
        }

    };

    Fly.Sky=Sky;

})(Fly);