
const baseContent = `
	<div>
		<h3 style="font-weight:bold; font-size:17px; margin-bottom:10px" className="text-xl font-bold">Introduction to HTML</h3>
		<div className="mt-2 text-gray-500">
			<p>HTML, or HyperText Markup Language, is the standard markup language for creating web pages.</p>
			<p>
				Iriure autem justo ipsum dolore. Nulla volutpat dolores vel dolores et clita ut eirmod accusam et sea at elitr tation. Sed invidunt ut justo et. Blandit esse ullamcorper lorem. Dolor amet diam vero voluptua dolore vero sanctus dolore velit sanctus eleifend erat. Et ipsum dolor ut sed consetetur at diam gubergren nulla erat labore dolores duo accusam dolores erat. Kasd erat gubergren stet dolor veniam elitr autem sit erat takimata clita qui et molestie elitr sit. Dolores dolor kasd nihil gubergren feugait dolor gubergren id sed ea. Duo magna iriure magna in sit gubergren sanctus. Molestie voluptua nulla sadipscing takimata duo sed nonumy takimata illum et ut diam commodo sea. Consectetuer justo dolor dolor rebum. Sit aliquyam no diam consetetur esse laoreet dolor est no amet magna nihil sed ipsum lorem dolor eros.
			</p>

			<p>
				Eirmod erat ipsum est dolore vel tempor sanctus takimata eos dolore tincidunt sed commodo. Adipiscing stet velit eos magna velit nonumy voluptua et diam sanctus est elit. Sed amet id id nam luptatum et no no voluptua et ipsum dolores consetetur. Diam ea diam amet nisl dolor sed dolore nisl vulputate sed ea ipsum nonumy magna voluptua mazim laoreet ea. Et nam labore ut sit accusam no.
			</p>
		 </div>
	</div>
	<div>
		<h3 style="font-weight:bold; font-size:17px; margin-bottom:10px" className="text-xl font-bold">Introduction to CSS</h3>
		<p className="mt-2 text-gray-500">
			Learn how to style your web pages with CSS, including selectors, properties, and layout.
		</p>
		<p className="mt-2 text-gray-500">
			Vulputate dolore ea augue lorem eirmod sanctus lorem no diam hendrerit accusam duo. Ipsum nulla ut ipsum justo sed nonumy eos facilisi dolor zzril diam diam erat est consetetur et veniam. Rebum at lobortis facer invidunt et sit sea dolore labore duis quod. Ea wisi aliquyam sanctus. Diam voluptua nonumy dolores consetetur labore dolor rebum eu. Amet rebum consetetur sed. Lorem sit magna vero lorem iusto erat et blandit sea sea eros lobortis voluptua. Aliquyam lorem nonumy consectetuer odio kasd voluptua. Dolor takimata eirmod dolor justo accusam. Invidunt dignissim zzril accumsan kasd justo ipsum magna justo sit diam sanctus. Nonummy velit euismod no eirmod takimata praesent amet justo aliquyam voluptua diam. Dolor justo sit gubergren magna lorem lorem labore eirmod eirmod clita et et facer.
		</p>
	</div>
	<div>
		<h3 style="font-weight:bold; font-size:17px; margin-bottom:10px" className="text-xl font-bold">Introduction to JavaScript</h3>
		<p className="mt-2 text-gray-500">
			Learn the fundamentals of JavaScript, including variables, functions, and events.
		</p>
		<p className="mt-2 text-gray-500">
			No ipsum magna voluptua sanctus dolor gubergren magna congue rebum stet justo diam sit no nonumy dolore erat ea. Aliquyam sea vel elitr. Sanctus accusam lorem ad. Eos esse diam tempor no consetetur clita qui est gubergren elitr et clita liber. Gubergren sadipscing et stet eos duo zzril eirmod quis eirmod dolor elitr diam ipsum sit clita elit. Vero elitr dolore clita sit elitr enim sed aliquyam enim et lobortis consetetur. Eirmod eirmod ipsum clita justo invidunt lorem sea at imperdiet adipiscing eirmod sea dolor eos diam est est. Ut accumsan quis at autem ipsum consequat. Iriure assum dolor lorem ipsum quis lorem ipsum ut sit lobortis veniam amet. Lorem esse amet sit facilisis consequat at sanctus. Nostrud ea kasd in dolor consetetur vel eirmod aliquyam et justo. Diam vero gubergren dolor. Lorem dolore accusam nonumy ea consetetur nobis.
		</p>
	</div>

`

export const list = [
	{
		id: 1,
		category: 'Acme University',
		courses:[
			{"id":1,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"2.4","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":5,"total_chapter":6,"duration":8,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-06", content:baseContent, is_learning:true, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":2,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"4.6","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":4,"total_chapter":8,"duration":2,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-06", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":3,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"2.3","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":4,"total_chapter":13,"duration":9,"difficulty":"Beginner","format":"Online","certification":"No","date":"2024-05-03", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":4,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"0.1","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":5,"total_chapter":10,"duration":6,"difficulty":"Beginner","format":"Online","certification":"No","date":"2024-05-01", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":5,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"4.0","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":2,"total_chapter":9,"duration":4,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-07", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":6,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"0.3","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":1,"total_chapter":13,"duration":9,"difficulty":"Beginner","format":"Online","certification":"No","date":"2024-05-02", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":7,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"4.5","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":4,"total_chapter":7,"duration":7,"difficulty":"Beginner","format":"Online","certification":"No","date":"2024-05-01", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":8,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"5.0","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":3,"total_chapter":9,"duration":3,"difficulty":"Beginner","format":"Online","certification":"No","date":"2024-05-04", content:baseContent, is_learning:true, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":9,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"1.1","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":2,"total_chapter":13,"duration":2,"difficulty":"Beginner","format":"Online","certification":"No","date":"2024-05-03", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":10,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"4.8","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":3,"total_chapter":6,"duration":3,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-08", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":11,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"4.6","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":5,"total_chapter":10,"duration":9,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-01", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":12,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"0.4","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":5,"total_chapter":6,"duration":7,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-00", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":13,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"0.7","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":3,"total_chapter":7,"duration":6,"difficulty":"Beginner","format":"Online","certification":"No","date":"2024-05-08", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":14,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"3.8","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":2,"total_chapter":9,"duration":7,"difficulty":"Beginner","format":"Online","certification":"No","date":"2024-05-06"}
		],
	},
	{
		id: 2,
		category:'Globex Corporation',
		courses:[
			{"id":15,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"2.4","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":5,"total_chapter":6,"duration":8,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-06", content:baseContent, is_learning:false, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":16,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"4.6","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":4,"total_chapter":8,"duration":2,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-06", content:baseContent, is_learning:true, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
		],
	},
	{
		id: 3,
		category: 'Stark Industries',
		courses:[
			{"id":17,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"2.4","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":5,"total_chapter":6,"duration":8,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-06", content:baseContent, is_learning:true, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			{"id":18,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"4.6","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":4,"total_chapter":8,"duration":2,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-06", content:baseContent, is_learning:true, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
		],
	},
	{
		id: 4,
		category: 'Wayne Enterprises',
		courses:[
			{"id":19,"title":"Introduction to Web Development","des":"Learn the fundamentals of web development, including HTML, CSS, and JavaScript.","star":"2.4","state":"Free","thumb":"https://raw.githubusercontent.com/Anxiu0101/PicgoImg/master/campus-hub-cover.png?w=800&h=500","completed_chapter":5,"total_chapter":6,"duration":8,"difficulty":"Beginner","format":"Online","certification":"Yes","date":"2024-05-06", content:baseContent, is_learning:true, downloadPdfUrl: 'https://anxiu.cloud/assets/sample-data.pdf'},
			
		],
	},
]