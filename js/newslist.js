$(function() {
    function padZero(n) {

        return n = n < 10 ? '0'+ n : n   
    }
    template.defaults.imports.dateStr = function(date) {
        let dt = new Date(date)
        let y =  dt.getFullYear(dt)
        let m = padZero(dt.getMonth()+1) 
        let d = padZero(dt.getDay()) 
        let hh = padZero(dt.getHours()) 
        let mm = padZero(dt.getMinutes()) 
        let ss = padZero(dt.getSeconds()) 

        return `${y}-${m}-${d}   ${hh}:${mm}:${ss}`

    }
    function getNewslist() {
        $.get('http://www.liulongbin.top:3006/api/news',function(res) {
        if(res.status !== 200) {
            return('获取列表失败')
        }
        console.log(res.data);
        let htmlstr = template('tpl-news',res)
        
        $('.newslist').html(htmlstr)
    })

    }
   getNewslist()
  
    





})