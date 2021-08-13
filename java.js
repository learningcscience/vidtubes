function like(x){
		var a = document.getElementById("likes");
			 if ( x.style.color ==="red") {
			 	a.innerHTML = "2,567";
			 	x.style.color = "gray";
			 }else{
			 	x.style.color = "red";
			 	a.innerHTML = "2,568";
			 }
		}

	function myfunction(){
			var x = document.getElementById("not");
			if (x.style.display === "block") {
				x.style.display = "none";
			}else {
				x.style.display = "block";
			}
		}

	function myfunctions(){
			var x = document.getElementById("user-det");
			if (x.style.display === "block") {
				x.style.display = "none";
			}else {
				x.style.display = "block";
			}
		}
