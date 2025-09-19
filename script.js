function volume_sphere(e) {
	e.preventDefault();
	const radius = document.getElementById("radius").value;
	const volume = document.getElementById("volume");
	volume.value = ((4/3)*Math.PI*Math.pow(radius, 3)).toFixed(4);
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
