let vm=new Vue({
    el:"#app",
    computed:{
        comp(){
            if (this.a.length===0){
                return "请输入3到8位用户名"
            }
            if (this.a.length<3){
                return "请继续输入";
            }
            if (this.a.length>=3&&this.a.length<=8){
                return "验证可用";
            }
            if(this.a.length>8){
                return "超过8位，请删除一些";
            }
        },
        password(){
            if (this.b.length===0){
                return "请输入8到15位密码";
            }
            if (this.b.length<8){
                return "请继续输入";
            }
            if (this.a.length>=8&&this.a.length<=15){
                return "验证可用";
            }
            if(this.b.length>15){
                return "超过15位，请重设密码";
            }
        }
    },
    data:{
        a:"",
        b:""
    },
});