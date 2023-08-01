function book() {
	if(document.form.from.value==""){
		alert("Please fill information..");
		return false;
	}
	
	else if(document.form.to.value==""){
		alert("Please fill information..");
		return false;
	}
	
	else if(document.form.date.value==""){
		alert("Please fill information..");
		return false;	
    }
	else if(document.form.from.value==document.form.to.value){
		alert("Same Destination...");
		return false;
}
	
	else if(document.form.from.value=="Pune"&&document.form.to.value=="Delhi"){
		window.location.href="punetodelhi.html";
		return false;
}
	else if(document.form.from.value=="Pune"&&document.form.to.value=="Goa"){
		window.location.href="punetogoa.html";
		return false;
}
	else if(document.form.from.value=="Pune"&&document.form.to.value=="Kolkata"){
		window.location.href="punetokolkata.html";
		return false;
}
	else if(document.form.from.value=="Pune"&&document.form.to.value=="Hydrabad"){
		window.location.href="punetohydrabad.html";
		return false;
}
	else if(document.form.from.value=="Pune"&&document.form.to.value=="Bangalore"){
		window.location.href="punetobangalore.html";
		return false;
}
	else if(document.form.from.value=="Delhi"&&document.form.to.value=="Goa"){
		window.location.href="delhitogoa.html";
		return false;
}
	else if(document.form.from.value=="Delhi"&&document.form.to.value=="Kolkata"){
		window.location.href="delhitokolkata.html";
		return false;
}
	else if(document.form.from.value=="Delhi"&&document.form.to.value=="Hydrabad"){
		window.location.href="delhitohydrabad.html";
		return false;
}
	
	else if(document.form.from.value=="Delhi"&&document.form.to.value=="Bangalore"){
		window.location.href="delhitobangalore.html";
		return false;
}
	else if(document.form.from.value=="Kolkata"&&document.form.to.value=="Goa"){
		window.location.href="kolkatatogoa.html";
		return false;
}
	else if(document.form.from.value=="Kolkata"&&document.form.to.value=="Delhi"){
		window.location.href="kolkatatodelhi.html";
		return false;
}
	else if(document.form.from.value=="Kolkata"&&document.form.to.value=="Hydrabad"){
		window.location.href="kolkatatohydrabad.html";
		return false;
}
	else if(document.form.from.value=="Kolkata"&&document.form.to.value=="Bangalore"){
		window.location.href="kolkatatobangalore.html";
		return false;
}
	else if(document.form.from.value=="Hydrabad"&&document.form.to.value=="Goa"){
		window.location.href="hydrabadtogoa.html";
		return false;
}
	else if(document.form.from.value=="Hydrabad"&&document.form.to.value=="Delhi"){
		window.location.href="hydrabadtodelhi.html";
		return false;
}
	else if(document.form.from.value=="Hydrabad"&&document.form.to.value=="Kolkata"){
		window.location.href="hydrabadtokolkata.html";
		return false;
}
	else if(document.form.from.value=="Hydrabad"&&document.form.to.value=="Bangalore"){
		window.location.href="hydrabadtobangalore.html";
		return false;
}
	else if(document.form.from.value=="Bangalore"&&document.form.to.value=="Goa"){
		window.location.href="banbaloretogoa.html";
		return false;
}
	else if(document.form.from.value=="Bangalore"&&document.form.to.value=="Delhi"){
		window.location.href="bangaloretodelhi.html";
		return false;
}
	else if(document.form.from.value=="Bangalore"&&document.form.to.value=="Kolkata"){
		window.location.href="bangaloretokolkata.html";
		return false;
}
	else if(document.form.from.value=="Bangalore"&&document.form.to.value=="Hydrabad"){
		window.location.href="bangaloretohydrabad.html";
		return false;
}
	else if(document.form.date.value>23/07/2023){
		alert("Please fill informasjxkjhstion..");
		return false;	
    }
	
}