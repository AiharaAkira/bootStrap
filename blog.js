function searchBlog(){

    $.ajax({

        url:'/v2/search/web',
        type:'get',
        headers: {
            "Authorization": "KakaoAK 0172b72d9317e5bbb5d67b16667edd8a"
        },
        data:$('#bs_form').serialize(),
        success:function(data){
            console.log('ajax_sucess');
        },
        error:function(data){
            console.log('ajax_error');
        }

    });

};