function Verification()
{	
	var message = "";
	var champsOK = 0;
	
	
	saisie = document.getElementById("Mail").value;
	if(saisie == /@/ &&( saisie == /.fr$/ || saisie == /.com$/ || saisie == /.net$/))
	{
		champsOK++;
	}
	else
	{
		message += "-Mail incorrecte\n";
	}
	
}
function next()
{
  	if(document.getElementById("img_slideshow").src.indexOf("promo4.jpg") != -1)
	{
  		document.getElementById("img_slideshow").src = "promo1.png";
    }
    else if(document.getElementById("img_slideshow").src.indexOf("promo1.png") != -1)
	{
        document.getElementById("img_slideshow").src = "promo2.jpg";
    }
    else if(document.getElementById("img_slideshow").src.indexOf("promo2.jpg") != -1)
	{
        document.getElementById("img_slideshow").src = "promo3.jpg";
    }
	else if(document.getElementById("img_slideshow").src.indexOf("promo3.jpg") != -1)
	{
        document.getElementById("img_slideshow").src = "promo4.jpg";
    }
}

function last()
{
  	if(document.getElementById("img_slideshow").src.indexOf("promo2.jpg") != -1)
	{
  		document.getElementById("img_slideshow").src = "promo1.png";
    }
    else if(document.getElementById("img_slideshow").src.indexOf("promo1.png") != -1)
	{
        document.getElementById("img_slideshow").src = "promo4.jpg";
    }
    else if(document.getElementById("img_slideshow").src.indexOf("promo4.jpg") != -1)
	{
        document.getElementById("img_slideshow").src = "promo3.jpg";
    }
	else if(document.getElementById("img_slideshow").src.indexOf("promo3.jpg") != -1)
	{
        document.getElementById("img_slideshow").src = "promo2.jpg";
    }
}