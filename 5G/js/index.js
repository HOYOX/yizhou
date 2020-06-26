
		function ani(claname,type1){
            if(($(claname).offset().top - $(window).scrollTop())<$(window).height()){
					$(claname).addClass(type1);

			};
			$(window).scroll(function(){
				if(($(claname).offset().top - $(window).scrollTop())<$(window).height()){
					$(claname).addClass(type1);

				};
			});
			
		};
		ani('.swiper_1 .sw_1','fadeInLeft');
		ani('.swiper_1 .sw_2','fadeInRight');
		ani('.con_2 .con_aa','bounceInUp');
		ani('.con_22 .con_aa','bounceInUp');
		ani('.con_3 .con_33','fadeInLeft');
		ani('.con_333 .con_333_l','bounceInUp');
		ani('.con_333 .con_333_r','bounceInUp');
		ani('.con_4 .pope_1','fadeInLeft');
		ani('.con_44 .pope_1','bounceInRight');
		ani('.con_6 .con_66','fadeInUp');
		ani('.content_7 .con_77','fadeInDown');
		ani('.con_7 .con_7_99','fadeInLeft');
		ani('.con_7 .con_7_70','fadeInUp');
		
		