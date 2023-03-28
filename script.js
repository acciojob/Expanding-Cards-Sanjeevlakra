//your JS code here. If required.
const panels=document.querySelectorAll(".panel");

	panels.forEach((panel)=> {
		panel.addEventListener("click",() => {
			panels.forEach((panel)=>{
				panel.classList.remove("active");
			});
			panel.classList.remove("active");
		});
	});