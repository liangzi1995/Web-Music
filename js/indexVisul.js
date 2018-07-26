	function Random(m,n)
	{
		return Math.round(Math.random()*(n-m)+m);
	}

	function RanColor(obj)
	{
		obj.style.fill="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";
		obj.style.background="rgb("+Random(0,255)+","+Random(0,255)+","+Random(0,255)+")";		
	}