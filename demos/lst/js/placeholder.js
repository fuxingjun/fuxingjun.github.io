if (navigator.userAgent.indexOf("MSIE")>0) {
            $("input[placeholder]").each(function(){
                $(this).val((($(this).val()=="")?$(this).attr("placeholder"):"")).blur(function(){
                    if ($(this).val()=="") $(this).val($(this).attr("placeholder"));
                }).focus(function(){
                    if ($(this).val()==$(this).attr("placeholder")) $(this).val("");
                });
            });}


            if (navigator.userAgent.indexOf("MSIE")>0) {
            $("textarea[placeholder]").each(function(){
                $(this).val((($(this).val()=="")?$(this).attr("placeholder"):"")).blur(function(){
                    if ($(this).val()=="") $(this).val($(this).attr("placeholder"));
                }).focus(function(){
                    if ($(this).val()==$(this).attr("placeholder")) $(this).val("");
                });
            });}