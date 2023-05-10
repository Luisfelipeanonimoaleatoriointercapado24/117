function starClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true})
    classifier = ml5.soundClasifier('',modelReady);
}
function ModelReady(){
    classifier.classify(gotResult)
}

function gotResult(error, result) {
    if (error) {
        console.error(error);
    }else {
        console.log(result);
        random_number_r = Math.floor(Math.random() *255) + 1;
        random_number_g = Math.floor(Math.random() *255) + 1;
        random_number_b = Math.floor(Math.random() *255) + 1;

        document.getElementById("result_label").innerHTML = 'posso ouvir -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Preisao -'+(result[0].confudence*100).toFixed(2)+ " %"
        document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
        document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    
        img = document.getElementById("alien1")
        img1 = document.getElementById("alien2")
        img2 = document.getElementById("alien3")
        img3 = document.getElementById("alien14")

        if(result[0].label == "palmas") {
            img.src = 'aliens-01-.gif';
            img1.src = 'alens-02-.png';
            img2.src = 'alens-03-.png';
            img3.src = 'alens-04-.png';
        }

        else if(result[0].label == "sino"){
            img.src = 'aliens-01-.png';
            img1.src = 'alens-02-.gif';
            img2.src = 'alens-03-.png';
            img3.src = 'alens-04-.png';
        }

        else if(result[0].label == "estalos"){
            img.src = 'aliens-01-.png';
            img1.src = 'alens-02-.png';
            img2.src = 'alens-03-gif';
            img3.src = 'alens-04-.png';
    }

    else{
        img.src = 'aliens-01-.png';
        img1.src = 'alens-02-.png';
        img2.src = 'alens-03-png    ';
        img3.src = 'alens-04-.gif'; 
    }
}
}