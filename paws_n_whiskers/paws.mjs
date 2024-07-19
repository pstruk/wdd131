// This is the ES module used by index.html and form.html
export const animals = [
	{
		name: 'Axel',
		category: 'Dogs',
		breed: 'Labrador Retriever',
		sex: 'Male',
        weight: '50 pounds',
		age: '2 years',
		personality: ['Smart', 'Energetic', 'Runs'],
		color: 'Black',
		image: './images/axel_dog.jpg',
		id: '248366'
	},
	{
		name: 'Cooper',
		category: 'Cats',
		breed: 'Domestic Short Hair',
		sex: 'Male',
        weight: '2.6 pounds',
		age: '3 years',
		personality: ['Sweet', 'Social', 'Playful'],
		color: 'Orange Tabby',
		image: './images/cooper_cat.jpg',
		id: '249600'
	},
	{
		name: 'Jericho',
		category: 'Dogs',
		breed: 'Rottweiler',
		sex: 'Male',
        weight: '18 pounds',
		age: '1 year',
		personality: ['Friendly', 'Loyal', 'Energetic'],
		color: 'Black',
		image: './images/jericho_dog.jpg',
		id: '250045'
	},
	{
		name: 'Kylo',
		category: 'Cats',
		breed: 'Domestic Short Hair',
		sex: 'Male',
        weight: '3 pounds',
		age: '6 years',
		personality: ['Smart', 'Playful', 'Independent'],
		color: 'Grey Tabby',
		image: './images/kylo_cat.jpg',
		id: '248320'
	},
	{
		name: 'Mustard',
		category: 'Rabbits',
		breed: 'Dwarf',
		sex: 'Male',
        weight: '1 pound',
		age: '3 years',
		personality: ['Playful', 'Loves Exercise'],
		color: 'White',
		image: './images/mustard_rabbit.jpg',
		id: '231345'
	},
	{
		name: 'Sapporo',
		category: 'Rabbits',
		breed: 'Holland Lop',
		sex: 'Female',
        weight: '1.3 pounds',
		age: '1 year',
		personality: ['Friendly', 'Funny', 'Playful'],
		color: 'Brown',
		image: './images/sapporo_rabbit.jpeg',
		id: '247877'
	},
	{
		name: 'Tiny',
		category: 'Cats',
		breed: 'Domestic Short Hair',
		sex: 'Female',
        weight: '2.9 pounds',
		age: '10 months',
		personality: ['Sweet', 'Friendly', 'Cuddly'],
		color: 'Black',
		image: './images/tiny_the_cat.jpg',
		id: '249992'
	},
    {
        name: 'Toffee',
		category: 'Rabbits',
		breed: 'French Lop',
		sex: 'Male',
        weight: '1 pound',
		age: '2 years',
		personality: ['Playful', 'Loves Grass'],
		color: 'Brown',
		image: './images/toffee_rabbit.jpg',
		id: '249944'
    },
	{
		name: 'Wesley',
		category: 'Dogs',
		breed: 'Great Pyrenees',
		sex: 'Male',
        weight: '15.6 pounds',
		age: '1 year',
		personality: ['Gentle', 'Mellow', 'Shy'],
		color: 'White',
		image: './images/wesley_dog.jpg',
		id: '249930'
	}
]

export function getRandomNumber(maxValue) {
    const randomNumber = Math.floor(Math.random() * maxValue);
    return randomNumber;
}

export function getPageName(event) {
    const pageName = event.target.location.pathname;
    return pageName;
}

export function submissionTemplate(submissionDetails) {
    document.querySelector(".considerations").style.display = "none";
	document.querySelector("#fees").style.display = "none";
    
    const successMessage = `<div id="responseMessage">
		<p>${submissionDetails.name},<br> Thank you for submitting a Pet Adoption Application!</p>
		<p>Your application has now been received by our office. We will contact you 
      	at ${submissionDetails.email} within 72 hours to set up your adoption appointment, where  
      	your ${submissionDetails.totalHouseMembers} household members will meet their new ${submissionDetails.pet}.
		</p>
		</div>`
	  
    document.querySelector("#insertMessage").innerHTML = successMessage;
}
  