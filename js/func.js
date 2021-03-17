
function listFeature () {
    let featureData = [
        {
            id :1,
            title : 'Gallery',
            sub : 'SUBTITLE'
        },
        {
            id :2,
            title : 'Activities',
            sub : 'SUBTITLE'
        },
        {
            id :3,
            title : 'Keynotes',
            sub : 'SUBTITLE'
        }
    ]; 

    let htmlListFeature=''


    for (let i=0; i < featureData.length; i++) {
        htmlListFeature += 
        "<div class='card'>" 
            +"<div>" 
                +"<h6>"+ featureData[i].title +"</h6>" 
                + "<p>"+featureData[i].sub+"</p>" 
            + "</div>" 
        + "</div>"
    }

    return htmlListFeature;
}
console.log(listFeature())
document.getElementById("featureCard").innerHTML = listFeature()


// var product = [
//     {
//         id :1,
//         productName : 'Adidas',
//         description: 'Kacamata tampan dan beraniLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
//         category : 'Sepatu',
//         price: 15000,
//         priceCoret: 50000,
//         prodcutImage: 'https://',
//         size: 'Medium',
//         bahan: '100% Cotton',
//         gender: 'Male'

//     }
// ]